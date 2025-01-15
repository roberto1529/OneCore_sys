import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DataViewModule } from 'primeng/dataview';
import { TypeContratos } from './type/dto.interfaces';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-mods',
  imports: [
    ToolbarModule,ButtonModule,AvatarModule,AvatarGroupModule,DataViewModule,CardModule,ChipModule
  ],
  templateUrl: './mods.component.html',
  styleUrl: './mods.component.scss',
})
export class ModsComponent implements OnInit {
  contrato!: TypeContratos[];
  constructor() {}

  ngOnInit(): void {
    this.contrato = [
      {
        id: 1,
        icono: 'pi pi-heart',
        nombre: 'Medicina General',
        ruta: '/medicina/general',
        status: true,
        fecha_init: '2025-01-01',
        fecha_end: '2026-01-01',
      },
      {
        id: 4,
        icono: 'pi pi-chart-pie',
        nombre: 'Análisis de Datos',
        ruta: '/analitica/analisis-datos',
        status: true,
        fecha_init: '2025-04-01',
        fecha_end: '2026-04-01',
      },
      {
        id: 5,
        icono: 'pi pi-chart-scatter',
        nombre: 'Modulo Contable',
        ruta: '/contabilidad/auditoria',
        status: true,
        fecha_init: '2025-05-01',
        fecha_end: '2026-05-01',
      },
      {
        id: 6,
        icono: 'pi pi-sparkles',
        nombre: 'Moldulo Odontologia',
        ruta: '/analitica/laboratorio',
        status: true,
        fecha_init: '2025-06-01',
        fecha_end: '2026-06-01',
      },
      {
        id: 7,
        icono: 'pi pi-money-bill',
        nombre: 'Modulo Financiero',
        ruta: '/contabilidad/gestion',
        status: true,
        fecha_init: '2025-07-01',
        fecha_end: '2026-07-01',
      },
      {
        id: 8,
        icono: 'pi pi-building',
        nombre: 'Modulo Hoteleria',
        ruta: '/medicina/hospitalizacion',
        status: true,
        fecha_init: '2025-08-01',
        fecha_end: '2026-08-01',
      },
      {
        id: 9,
        icono: 'pi pi-microsoft',
        nombre: 'Modulo proyectos',
        ruta: '/medicina/equipos',
        status: true,
        fecha_init: '2025-09-01',
        fecha_end: '2026-09-01',
      },

    ];
  }
}
