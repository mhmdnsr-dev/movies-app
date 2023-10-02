import { Component } from '@angular/core';
import { CartElementViewService } from '../../cart-element-view.service';
import { Movie } from '../../shared/movie';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent {
  cartItems: Movie[] = [];
  constructor(private cartElementViewService: CartElementViewService) {}
  ngOnInit() {
    this.cartItems = this.cartElementViewService.getArrayValue();
  }
  deleteItem(item: Movie) {
    this.cartElementViewService.deleteObject(item);
    this.cartItems = this.cartElementViewService.getArrayValue();
  }
}
