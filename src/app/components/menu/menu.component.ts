import { Component, OnInit } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { OpcionMenu } from './Class/Type.interface';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-menu',
  imports: [ListboxModule, ButtonModule, FormsModule, TooltipModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  Opciones!:OpcionMenu[];
  sMenu!: any;
  ngOnInit(): void {
    this.Opciones  = [
      { nombre: 'New York', icono: 'pi-apple' },
      { nombre: 'Rome', icono: 'pi-apple' },
      { nombre: 'London', icono: 'pi-apple' },
      { nombre: 'Istanbul', icono: 'pi-apple' },
      { nombre: 'Arabian', icono: 'pi-apple' },
      { nombre: 'Chicago', icono: 'pi-apple' }
  ];  
  }
}
