import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DatePickerModule } from 'primeng/datepicker';
import { InputOtpModule } from 'primeng/inputotp';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-sub-slider',
  standalone: true,
  imports: [ButtonModule, FloatLabelModule,IconFieldModule,InputIconModule,
    DatePickerModule, InputOtpModule, CommonModule, ],
  templateUrl: './slider.component.html',
  styleUrl: '../auth.component.scss',
})
export class SliderComponent implements OnInit {
  icons:string= "pi pi-moon";
  severity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined = 'secondary';
  theme: string='';

  constructor(public themeService: ThemeService){

  }



  ngOnInit(): void {}


  public ColorTheme():void {

    const theme = this.themeService.toggleTheme();
    this.theme = theme;
    console.log('theme', theme);
    if (theme === "primeone-dark") {
        this.icons = "pi pi-sun";
        this.severity = "success";
    }else{
      this.icons = "pi pi-moon";
        this.severity = "secondary";
    }



  }


}
