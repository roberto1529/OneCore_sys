import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputOtpModule } from 'primeng/inputotp';
import { Router } from '@angular/router';
import { FormularioService } from './services/formulario.service';
import { Md5 } from 'ts-md5';
import { EncryptionService } from '../../coverage/encryption.interceptor';
import { RespondeAuth } from './types/responses.interfaces';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'sub-app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    FloatLabelModule,
    IconFieldModule,
    InputIconModule,
    InputOtpModule,
    ToastModule,
    DialogModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
  providers: [MessageService],
})
export class FormularioComponent implements OnInit, OnDestroy  {
  fb: FormGroup;
  icons: string = 'pi pi-moon';
  severity: | 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined = 'secondary';
  isPassword = true;
  eyeIcons: string = 'pi pi-eye'
  visible: boolean = true;
  timeLeft: number = 5 * 60; // 5 minutos en segundos
  timer: any;
  formattedTime: string = ''; 
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private service: FormularioService,
    private readonly cto: EncryptionService,
    private msjServices: MessageService
  ) {
    this.fb = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      // email: ['', [Validators.required, Validators.email]],
      token: [],
    });
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  public mensajeError(campo: string, error: string): boolean {
    const control = this.fb.get(`${campo}`);
    return (
      control! && control.hasError(error) && (control.dirty || control.touched)
    );
  }

  private ToastAlert(
    severity: string,
    summary: string,
    detail: string,
    sticky: boolean
  ) {
    this.msjServices.clear();
    this.msjServices.add({
      severity: `${severity}`,
      summary: `${summary}`,
      detail: `${detail}`,
      sticky: sticky,
    });
  }

  public ViewPassword(): void{
    this.isPassword = !this.isPassword;
    if (this.isPassword === false) {
      this.eyeIcons = 'pi pi-eye-slash'
    }else{
      this.eyeIcons  = 'pi pi-eye'
    }
  }

  public onSubmit(): void {
    let error: boolean = false;

    for (const control in this.fb.controls) {
      const controls = this.fb.get(control) as FormControl;
      if (controls && controls.invalid) {
        controls.markAsTouched();
        error = true;
        this.ToastAlert(
          'error',
          'Error',
          'Por favor verique usuario y/o clave ingresados',
          false
        );
      }
    }

    if (error) {
      return;
    }

    this.fb.patchValue({ pass: Md5.hashStr(this.fb.value.pass) });

    this.service.Auth_Service(this.fb.value).subscribe((res: RespondeAuth) => {
      let response = this.cto.decryptData(res);
      console.log('Respuesta servidor =>', response);
      this.visible = true;
    });

    /* if (this.fb.value.usuario ==='rmol' && this.fb.value.pass ==='123456') {
          this._router.navigate(['/modulos']);
             console.log(this.fb.value); 
          } */
  }

  public onValueOtp(): void{
    console.log(this.fb.value);
    
  }


  startCountdown() {
    this.updateFormattedTime(); // Actualiza el tiempo formateado inicialmente
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateFormattedTime();
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  updateFormattedTime() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    this.formattedTime = `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }

  padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
