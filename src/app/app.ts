import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Registro } from './registro/registro';
import { Usuarios } from './usuarios/usuarios';
import { Tareas } from './tareas/tareas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Registro,Tareas,Usuarios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pruebas';
}
