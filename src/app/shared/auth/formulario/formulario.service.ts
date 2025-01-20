import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import  * as root  from './../../../shared/data/root.json'

@Injectable({
  providedIn: 'root'
})

export class FormularioService {
  ep: any = root;
  constructor(private http: HttpClient) {}

  public Auth_Service(data: any){
    const endpoint = `${this.ep.host}${this.ep.port}${this.ep.modulo}${this.ep.rutas.index}`;

    console.log('Salida', endpoint);

    return this.http.post(endpoint,data)  
  }
}
