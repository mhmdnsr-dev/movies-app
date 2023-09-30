import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../../shared/movie';
import { TmdbRes } from '../../shared/tmdb-res';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  constructor(private sharedMovies: MoviesService) {}

  trending: Movie[] = [];
  ngOnInit() {
    // console.log($());
    this.sharedMovies.trending.subscribe(
      (value: Object) => {
        console.log(value);
        const data = value as TmdbRes;
        this.trending = data.results;
      },
      err => {
        console.log(err);
      }
    );
  }

  slising(s: number, e: number) {
    return this.trending.slice(s, e);
  }
}
