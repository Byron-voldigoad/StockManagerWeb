import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductService, Product } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule, // ← Pour *ngFor
    NavigationComponent,
    ProductCardComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}