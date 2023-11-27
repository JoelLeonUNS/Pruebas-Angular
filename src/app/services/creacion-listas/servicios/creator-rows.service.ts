import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemData } from '../interfaces/table.interface';

@Injectable({
  providedIn: 'root'
})
export class CreatorRowsService {
  listOfData:ItemData[] = [];

  constructor() { }

  private datosSujetos = new BehaviorSubject<ItemData[]>(this.listOfData);
  datos$: Observable<ItemData[]> = this.datosSujetos.asObservable();

  actualizarDatos(nuevosDatos: ItemData[]) {
    this.datosSujetos.next(nuevosDatos);
  }

  addDataRow(name:String, rol:String):void {
    const newItem: ItemData = {
      id: `${this.listOfData.length + 1}`,
      name: name,
      rol: rol
    };
    this.listOfData = [...this.listOfData, newItem]; // Añade un nuevo elemento al array usando spread operator
    this.actualizarIndice();
  }

  actualizarIndice() {
    this.listOfData = this.listOfData.map((item, index) => {
      return {
        ...item,
        id: `${index + 1}`, // Actualizas el ID con el nuevo índice (+1 porque los índices comienzan en 0)
      };
    });
    this.actualizarDatos(this.listOfData); // Actualiza los datos en el BehaviorSubject
  }

  deleteDataRow(id: String): void {
    this.listOfData = this.listOfData.filter(item => item.id !== id); // Filtrar y eliminar el elemento con el ID correspondiente
    this.actualizarDatos(this.listOfData); // Actualizar el BehaviorSubject con la lista actualizada de datos
  }

}
