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
  constructor(private moviesService: MoviesService) {}
  page: number = 1;
  totalPages!: number;
  movies: Movie[] = [];
  query!: string;
  notFound: boolean = false;

  async ngOnInit() {
    this.moviesService.getQuery.subscribe(async (q: string) => {
      this.query = q;
      const data: TmdbRes = await this.getMovies();
      !data.results.length ? (this.notFound = true) : (this.notFound = false);
      this.movies = data.results;
      this.totalPages = data.total_pages < 200 ? data.total_pages : 200;
      this.page = 1;
    });
  }

  async paginationTo(page: number) {
    this.movies = []; // To showing spinner component
    const data: TmdbRes = await this.getMovies(page);

    // update movies
    this.movies = data?.results;

    // update number of page
    this.page = page;
  }

  async getMovies(page: number = 1) {
    let res: Response;
    if (this.query) {
      res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${this.query}&api_key=0ccf26111048f92980b10d0b2f0c63cd&page=${page}`
      );
    } else {
      // `https://api.themoviedb.org/3/movie/movies?language=en-US&page=${page}`
      res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NmMjYxMTEwNDhmOTI5ODBiMTBkMGIyZjBjNjNjZCIsInN1YiI6IjY1MTAwNGU0MjZkYWMxMDBlYjFhMTcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZYQsGb-WbKHowHfR3NcpfLkOFMJNJhV6XMon4aVHhc',
          },
        }
      );
    }
    return (await res.json()) as TmdbRes;
  }
}
