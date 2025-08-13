import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private products = [
  {
    id: 1,
    name: 'AyurGlow Anti-Aging Powder',
    price: 999,
    image: 'assets/img/product.png',
    batchNo: 'AG001',
    ingredients: [
      { name: 'Amla Powder', quantity: '20g', benefits: 'Vitamin C, skin glow, collagen boost' },
      { name: 'Ashwagandha Powder', quantity: '15g', benefits: 'Stress relief, hormone balance, muscle strength' },
      { name: 'Turmeric Powder (Curcumin extract 95%)', quantity: '5g', benefits: 'Anti-inflammatory, skin brightening' },
      { name: 'Tulsi Powder', quantity: '5g', benefits: 'Blood purification, antioxidant' },
      { name: 'Giloy Powder', quantity: '5g', benefits: 'Immunity boost, detox' },
      { name: 'Shatavari Powder', quantity: '10g', benefits: 'Hormonal support, skin moisture' },
      { name: 'Goji Berry Powder', quantity: '5g', benefits: 'Anti-aging, eye health' },
      { name: 'Maca Root Powder', quantity: '5g', benefits: 'Energy, hormone balance' },
      { name: 'Cinnamon Powder', quantity: '2g', benefits: 'Blood sugar control, flavor' },
      { name: 'Honey Powder', quantity: '20g', benefits: 'Natural sweetness, antibacterial' },
      { name: 'Gulkand Powder', quantity: '5g', benefits: 'Flavor, skin glow, cooling' }
    ],
    nutrition: [
      { nutrient: 'Energy', value: '18 kcal' },
      { nutrient: 'Protein', value: '0.5 g' },
      { nutrient: 'Carbohydrates', value: '3.8 g' },
      { nutrient: 'Sugars', value: '2.5 g' },
      { nutrient: 'Fat', value: '0.1 g' }
    ],
    usage: 'Take 1 scoop (3-5g) in warm water or milk on an empty stomach in the morning. For best results, use for at least 1-2 months.',
    storage: 'Store in a cool, dry place, away from direct sunlight. Keep container tightly closed after use.',
    manufacturer: {
      name: 'AyurGlow Naturals',
      address: 'Ravet, Pune, India',
      customerCare: '[Phone/Email]',
      fssai: 'xxxxxxxxxxxxx'
    }
  }
];


  private cart: any[] = [];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }

  addToCart(product: any) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }
}
