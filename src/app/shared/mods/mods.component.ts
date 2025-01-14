import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DataViewModule } from 'primeng/dataview';
import { TypeContratos } from './type/dto.interfaces';

@Component({
  selector: 'app-mods',
  imports: [ToolbarModule, ButtonModule, AvatarModule, AvatarGroupModule, DataViewModule],
  templateUrl: './mods.component.html',
  styleUrl: './mods.component.scss'
})
export class ModsComponent implements OnInit {
  contrato!: TypeContratos[];
  constructor(){}

  ngOnInit(): void {
    this.contrato = [  {
      id: 1,
      icono: 'pi pi-heart',
      nombre: 'Contrato Medicina General',
      ruta: '/medicina/general',
      status: true,
      fecha_init: '2025-01-01',
      fecha_end: '2026-01-01'
    },
    {
      id: 2,
      icono: 'pi pi-stethoscope',
      nombre: 'Contrato Especialista Cardiología',
      ruta: '/medicina/cardiologia',
      status: true,
      fecha_init: '2025-02-01',
      fecha_end: '2026-02-01'
    },
    {
      id: 3,
      icono: 'pi pi-clinic',
      nombre: 'Contrato Clínica de Diagnóstico',
      ruta: '/medicina/clinica',
      status: true,
      fecha_init: '2025-03-01',
      fecha_end: '2026-03-01'
    },
    {
      id: 4,
      icono: 'pi pi-chart-line',
      nombre: 'Contrato Análisis Clínicos',
      ruta: '/analitica/analisis-clinicos',
      status: true,
      fecha_init: '2025-04-01',
      fecha_end: '2026-04-01'
    },
    {
      id: 5,
      icono: 'pi pi-balance-scale',
      nombre: 'Contrato Auditoría Contable',
      ruta: '/contabilidad/auditoria',
      status: true,
      fecha_init: '2025-05-01',
      fecha_end: '2026-05-01'
    },
    {
      id: 6,
      icono: 'pi pi-pulse',
      nombre: 'Contrato Laboratorio de Análisis',
      ruta: '/analitica/laboratorio',
      status: true,
      fecha_init: '2025-06-01',
      fecha_end: '2026-06-01'
    },
    {
      id: 7,
      icono: 'pi pi-wallet',
      nombre: 'Contrato Gestión Contable',
      ruta: '/contabilidad/gestion',
      status: true,
      fecha_init: '2025-07-01',
      fecha_end: '2026-07-01'
    },
    {
      id: 8,
      icono: 'pi pi-hospital',
      nombre: 'Contrato Hospitalización',
      ruta: '/medicina/hospitalizacion',
      status: true,
      fecha_init: '2025-08-01',
      fecha_end: '2026-08-01'
    },
    {
      id: 9,
      icono: 'pi pi-cogs',
      nombre: 'Contrato Equipos Médicos',
      ruta: '/medicina/equipos',
      status: true,
      fecha_init: '2025-09-01',
      fecha_end: '2026-09-01'
    },
    {
      id: 10,
      icono: 'pi pi-book',
      nombre: 'Contrato Formación Contable',
      ruta: '/contabilidad/formacion',
      status: true,
      fecha_init: '2025-10-01',
      fecha_end: '2026-10-01'
    }]
  }
}
