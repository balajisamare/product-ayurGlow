import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

// Import Angular Material modules needed
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],  // add Mat modules here
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailsComponent {
  product: any;
  displayedColumns: string[] = ['name', 'quantity', 'benefits']; // table columns

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);

    // Optional: If ingredients might be undefined, ensure it’s at least an empty array to avoid errors
    if (!this.product?.ingredients) {
      this.product.ingredients = [];
    }
  }
}
