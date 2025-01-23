import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputOtpModule } from 'primeng/inputotp';
import { Router } from '@angular/router';
import { FormularioService } from './services/formulario.service';
import {Md5} from 'ts-md5';
import { EncryptionService } from '../../coverage/encryption.interceptor';
import { RespondeAuth } from './types/responses.interfaces';
@Component({
  selector: 'sub-app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, FloatLabelModule,IconFieldModule,InputIconModule,
            InputOtpModule,],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit  {
    fb: FormGroup;
    icons:string= "pi pi-moon";
    severity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined = 'secondary';

    constructor(private formBuilder:FormBuilder, private _router: Router, private service: FormularioService, private readonly cto: EncryptionService){
        this.fb = this.formBuilder.group({
            usuario: ['', [Validators.required, Validators.minLength(3)]],
            pass: ['', [Validators.required, Validators.minLength(6)]],
            // email: ['', [Validators.required, Validators.email]],
            token: ['']
          });
    }

    ngOnInit(): void {}

    public mensajeError(campo: string, error: string): boolean {
      const control = this.fb.get(`${campo}`);
      return control! && control.hasError(error) && (control.dirty || control.touched);
    }

      public onSubmit(): void {
        let error: boolean = false;


          for (const control in this.fb.controls) {
            const controls = this.fb.get(control) as FormControl
            if (controls && controls.invalid) {
              controls.markAsTouched()
              error = true
            }
          }

          if (error) {
            return
          }

          this.fb.patchValue({ pass:  Md5.hashStr(this.fb.value.pass) });
            
          this.service.Auth_Service(this.fb.value).subscribe((res: RespondeAuth)=> {
              
              let response = this.cto.decryptData(res)
              console.log('Respuesta servidor =>', response);
          });

          /* if (this.fb.value.usuario ==='rmol' && this.fb.value.pass ==='123456') {
          this._router.navigate(['/modulos']);
             console.log(this.fb.value); 
          } */

      }
}
