import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule,CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
  // Array que almacena las tareas pendientes
  tareas: string[] = ['Comprar leche', 'Hacer ejercicio'];

  // Cadena enlazada al input para la nueva tarea
  nuevaTarea: string = '';

  /**
   * Agrega `nuevaTarea` al array `tareas` si no está vacío.
   * Luego limpia el campo de entrada.
   */
  agregar(): void {
    const t = this.nuevaTarea.trim();
    if (t) {
      this.tareas.push(t);
      this.nuevaTarea = '';
    }
  }

  /**
   * Elimina la tarea en la posición `idx` del array.
   * @param idx Índice de la tarea a eliminar
   */
  eliminar(idx: number): void {
    this.tareas.splice(idx, 1);
  }
}