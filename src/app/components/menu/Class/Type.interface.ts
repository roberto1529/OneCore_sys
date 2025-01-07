export interface OpcionMenu {
        nombre: string,
        icono: string,
        ruta?: string,
        severity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined,
        variant: 'outlined' | 'text' | undefined,
        bool?:boolean, 
}