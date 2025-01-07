import { Component, OnInit } from '@angular/core';
import { ListboxModule } from 'primeng/listbox';
import { OpcionMenu } from './Class/Type.interface';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-menu',
  imports: [ListboxModule, ButtonModule, FormsModule, TooltipModule, AvatarModule, AvatarGroupModule, OverlayBadgeModule, PopoverModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  Opciones!:OpcionMenu[];
  sMenu!: any;
  ngOnInit(): void {
    this.Opciones  = [
      { nombre: 'New York', icono: 'pi-home',  severity:'contrast' , variant: undefined, bool: false},
      { nombre: 'Rome', icono: 'pi-apple'    , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'London', icono: 'pi-apple'  , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Istanbul', icono: 'pi-apple', severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Arabian', icono: 'pi-apple' , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Chicago', icono: 'pi-apple' , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'London', icono: 'pi-apple'  , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Istanbul', icono: 'pi-apple', severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Arabian', icono: 'pi-apple' , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Chicago', icono: 'pi-apple' , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'London', icono: 'pi-apple'  , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Istanbul', icono: 'pi-apple', severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Arabian', icono: 'pi-apple' , severity:'secondary', variant: 'outlined', bool: true},
      { nombre: 'Chicago', icono: 'pi-apple' , severity:'secondary', variant: 'outlined', bool: true},
  ];  
  }
}
