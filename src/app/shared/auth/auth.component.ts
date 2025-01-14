import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePickerModule } from 'primeng/datepicker';
import { InputOtpModule } from 'primeng/inputotp';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, FloatLabelModule,IconFieldModule,InputIconModule,
    DatePickerModule, InputOtpModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  fb: FormGroup;
  icons:string= "pi pi-moon";
  severity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined = 'secondary';
  constructor(private formBuilder:FormBuilder,
              public themeService: ThemeService,
              private _router: Router
            ){
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

  public ColorTheme():void {

    const theme = this.themeService.toggleTheme();
    console.log('theme', theme);
    if (theme === "primeone-dark") {
        this.icons = "pi pi-sun";
        this.severity = "success";
    }else{
      this.icons = "pi pi-moon";
        this.severity = "secondary";
    }



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

      if (this.fb.value.usuario ==='rmol' && this.fb.value.pass ==='123456') {
         this._router.navigate(['/modulos']);
         console.log(this.fb.value);
      }

  }

}
