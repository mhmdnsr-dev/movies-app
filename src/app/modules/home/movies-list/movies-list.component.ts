import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../../shared/movie';
import { TmdbRes } from '../../shared/tmdb-res';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  constructor(private sharedMovies: MoviesService) {}

  popular!: Movie[];
  ngOnInit() {
    this.sharedMovies.getPopular(1).subscribe(
      (value: Object) => {
        const data = value as TmdbRes;
        this.popular = data.results;
      },
      err => {
        console.log(err);
      }
    );
  }
}
