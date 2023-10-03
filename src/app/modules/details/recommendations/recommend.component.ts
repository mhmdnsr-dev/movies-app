import { Component, Input } from '@angular/core';
import { Movie } from '../../shared/movie';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
})
export class RecommendComponent {
  @Input() movieid!: BehaviorSubject<number>;
  movies: Array<Movie> = [];

  constructor() {}

  ngOnInit() {
    this.movieid.subscribe(id => {
      const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US;`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NmMjYxMTEwNDhmOTI5ODBiMTBkMGIyZjBjNjNjZCIsInN1YiI6IjY1MTAwNGU0MjZkYWMxMDBlYjFhMTcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZYQsGb-WbKHowHfR3NcpfLkOFMJNJhV6XMon4aVHhc',
        },
      };

      fetch(url, options)
        .then(res => {
          return res.json();
        })
        .then(val => {
          this.movies = val.results;
        })
        .catch(err => {});
    });
  }
}
