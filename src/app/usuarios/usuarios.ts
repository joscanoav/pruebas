import { Component,OnInit } from '@angular/core';
import { CommonModule }               from '@angular/common';  // ←

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios implements OnInit {
  // Array que se rellenará tras simular la carga de datos
  usuarios: string[] = [];

  /**
   * Ciclo OnInit:
   * Angular invoca este método una vez que los bindings están listos.
   * Aquí simulamos una llamada a servidor con setTimeout.
   */
  ngOnInit(): void {
    // Después de 1 segundo, populamos el array
    setTimeout(() => {
      this.usuarios = ['Ana', 'Luis', 'María'];
    }, 1000);
  }
}
