import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as root from './../../../shared/data/root.json';
import { EncryptionService } from '../../coverage/encryption.interceptor';  // Verifica la ruta de importación

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  ep: any = root;

  constructor(private http: HttpClient, private readonly cto: EncryptionService) {}

  public Auth_Service(data: any) {
    const { host, port, modulo, version, rutas } = this.ep;
    const endpoint = `${host}${port}${modulo}${version}${rutas.index}`;

    // Encriptar datos antes de enviarlos
    const encryptedData = {
      data: this.cto.encryptData(data)
    };

    console.log('Encrypted Data:', encryptedData);
    return this.http.post(endpoint, encryptedData);  // Enviar datos encriptados
  }
}
