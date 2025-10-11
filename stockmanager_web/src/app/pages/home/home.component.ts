import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule], // ← Pour routerLink
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ← .css pas .scss
})
export class HomeComponent {
  // Pour l'instant, pas de logique
}