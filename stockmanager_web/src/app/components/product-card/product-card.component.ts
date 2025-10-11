import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [], // Pas besoin d'imports pour l'instant
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product; // ← Le produit passé depuis le parent

  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/produit', this.product.id]);
  }
}