import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlaMundoComponent } from "./ola-mundo/ola-mundo.component";
import { BtnSignupComponent } from "./btn-signup/btn-signup.component";
import { WelcomeDoleraComponent } from "./welcome-dolera/welcome-dolera.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OlaMundoComponent, BtnSignupComponent, WelcomeDoleraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dolera';
}
