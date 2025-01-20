import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexeddbService {
  private db!: IDBDatabase;

  constructor() {
    this.initDB();
  }

  // Inicializa la base de datos
  private initDB(): void {
    const request = indexedDB.open('storage-onecore', 1);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('usurio')) {
        db.createObjectStore('miObjectStore', { keyPath: 'id', autoIncrement: true });
        console.log('ObjectStore creado');
      }
    };

    request.onsuccess = (event: Event) => {
      this.db = (event.target as IDBOpenDBRequest).result;
      console.log('Base de datos inicializada con éxito');
    };

    request.onerror = (event: Event) => {
      console.error('Error al inicializar la base de datos:', (event.target as IDBOpenDBRequest).error);
    };
  }

  // Agregar un dato
  addData(data: any): Promise<number> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['miObjectStore'], 'readwrite');
      const store = transaction.objectStore('miObjectStore');
      const request = store.add(data);

      request.onsuccess = () => {
        console.log('Dato agregado:', data);
        resolve(request.result as number);
      };

      request.onerror = (event: Event) => {
        console.error('Error al agregar dato:', (event.target as IDBRequest).error);
        reject((event.target as IDBRequest).error);
      };
    });
  }

  // Leer un dato por ID
  getDataById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['miObjectStore'], 'readonly');
      const store = transaction.objectStore('miObjectStore');
      const request = store.get(id);

      request.onsuccess = () => {
        console.log('Dato obtenido:', request.result);
        resolve(request.result);
      };

      request.onerror = (event: Event) => {
        console.error('Error al leer dato:', (event.target as IDBRequest).error);
        reject((event.target as IDBRequest).error);
      };
    });
  }

  // Listar todos los datos
  getAllData(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['miObjectStore'], 'readonly');
      const store = transaction.objectStore('miObjectStore');
      const request = store.openCursor();
      const results: any[] = [];

      request.onsuccess = (event: Event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          results.push(cursor.value);
          cursor.continue();
        } else {
          resolve(results);
        }
      };

      request.onerror = (event: Event) => {
        console.error('Error al listar datos:', (event.target as IDBRequest).error);
        reject((event.target as IDBRequest).error);
      };
    });
  }
}
