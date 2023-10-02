import { Component, Input, Output } from '@angular/core';
import { Movie } from '../movie';
import { CartElementViewService } from '../../cart-element-view.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  cartItems: Movie[] = [];
  isLiked!: boolean;
  constructor(private cartElementViewService: CartElementViewService) {
    this.cartElementViewService.getArray().subscribe(value => {
      this.cartItems = value;
    });
  }

  ngOnInit() {
    this.colorBtn();
  }

  addToCart(movie: Movie) {
    this.cartElementViewService.addObject(movie);
    this.colorBtn();
  }

  colorBtn() {
    this.isLiked = this.cartItems.find(m => m.id === this.movie.id)
      ? true
      : false;
  }
}
