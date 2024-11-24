import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlaMundoComponent } from "./ola-mundo/ola-mundo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OlaMundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dolera';
}
