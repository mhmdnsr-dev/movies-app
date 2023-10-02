import { Component } from '@angular/core';
import { Movie } from '../../shared/movie';
import { TmdbRes } from '../../shared/tmdb-res';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  trending: Movie[] = [];

  query: string = '';
  constructor(private moviesService: MoviesService) {}

  async ngOnInit() {
    this.moviesService.getQuery.subscribe((q: string) => {
      this.query = q;
    });

    const res: Response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NmMjYxMTEwNDhmOTI5ODBiMTBkMGIyZjBjNjNjZCIsInN1YiI6IjY1MTAwNGU0MjZkYWMxMDBlYjFhMTcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZYQsGb-WbKHowHfR3NcpfLkOFMJNJhV6XMon4aVHhc',
        },
      }
    );

    const data: TmdbRes = await res.json();
    this.trending = data.results;
  }

  slising(s: number, e: number) {
    return this.trending.slice(s, e);
  }
}
