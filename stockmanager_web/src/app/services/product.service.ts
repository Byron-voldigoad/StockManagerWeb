import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Chaise en bois sculpté vintage",
      price: 120,
      description: "Magnifique chaise ancienne en bois massif avec détails sculptés à la main. Pièce unique datant du début du 20ème siècle.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
      category: "Meubles",
      quantity: 2
    },
    {
      id: 2,
      name: "Lampe à huile en laiton",
      price: 85,
      description: "Lampe à huile authentique en laiton patiné. Parfait état de fonctionnement.",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
      category: "Luminaires", 
      quantity: 1
    },
    {
      id: 3,
      name: "Service à thé en porcelaine",
      price: 65,
      description: "Service complet pour 6 personnes, motif floral délicat. Années 1950.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400",
      category: "Vaisselle",
      quantity: 3
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return ["Tous", "Meubles", "Luminaires", "Vaisselle", "Décoration", "Livres"];
  }
}