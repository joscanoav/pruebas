import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule,CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  // Propiedad enlazada bidireccionalmente con el input del formulario
  nombre: string = '';

  /**
   * Método llamado cuando el usuario envía el formulario.
   * Aquí podrías validar, enviar datos a un servidor, etc.
   */
  registrar(): void {
    // Por ahora, sólo mostramos una alerta con el nombre capturado
    alert(`Registrado: ${this.nombre}`);
  }
}