import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent {
  query: string = '';
  constructor(private moviesService: MoviesService) {}

  queryHandler() {
    this.moviesService.setQuery = this.query;
  }

  resetQuery() {
    this.query = '';
    this.moviesService.setQuery = '';
  }
}
