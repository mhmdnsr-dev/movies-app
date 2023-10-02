import { Component } from '@angular/core';
import { CartElementViewService } from '../../cart-element-view.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartItems: Movie[] = [];
  constructor(private cartElementViewService: CartElementViewService) {
    this.cartElementViewService.getArray().subscribe(value => {
      this.cartItems = value;
    });
  }
}
