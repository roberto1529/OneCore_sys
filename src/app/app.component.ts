import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'OneCore Sys';
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
      this.primeng.ripple.set(true);
  }
}
