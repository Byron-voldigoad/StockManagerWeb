import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [], // Pas besoin d'imports supplémentaires
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // Pour l'instant, formulaire statique
  // On ajoutera la logique Reactive Forms plus tard
}