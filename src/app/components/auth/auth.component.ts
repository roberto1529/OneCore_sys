import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePickerModule } from 'primeng/datepicker';
import { InputOtpModule } from 'primeng/inputotp';

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


  constructor(private formBuilder:FormBuilder){
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

  }

}
