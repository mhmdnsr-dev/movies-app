import { Component, Input } from '@angular/core';
import { Movie } from '../../shared/movie';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
})
export class RecommendComponent {
  @Input() movieid!: number;
  movies: Array<Movie> = [];

  constructor() {
    console.log(this.movieid, 'CONSTRUCTOR');
  }

  ngOnInit() {
    const url = `https://api.themoviedb.org/3/movie/${this.movieid}/recommendations?language=en-US;`;
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
        console.log(res);
        return res.json();
      })
      .then(val => {
        this.movies = val.results;
        console.log(val);
      })
      .catch(err => console.error('error:' + err));
  }
}
