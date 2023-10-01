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
  isLiked: boolean = false;
  constructor(private cartElementViewService:CartElementViewService ){}
  addToCart(movie: Movie) {
    var movieElement = this.cartElementViewService.addObject(movie);
    this.isLiked = true; 
    console.log(movieElement)
    console.log(this.isLiked)
  }
}
