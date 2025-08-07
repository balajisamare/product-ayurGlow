import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemCount = 0;
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.updateCartSummary();
  }

  updateCartSummary() {
    this.itemCount = this.cartService.getCartCount();
    this.totalPrice = this.cartService.getCartTotal();
  }
}
