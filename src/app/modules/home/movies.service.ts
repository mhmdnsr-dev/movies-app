import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  get trending() {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NmMjYxMTEwNDhmOTI5ODBiMTBkMGIyZjBjNjNjZCIsInN1YiI6IjY1MTAwNGU0MjZkYWMxMDBlYjFhMTcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZYQsGb-WbKHowHfR3NcpfLkOFMJNJhV6XMon4aVHhc',
        },
      }
    );
  }

  getPopular(page: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NmMjYxMTEwNDhmOTI5ODBiMTBkMGIyZjBjNjNjZCIsInN1YiI6IjY1MTAwNGU0MjZkYWMxMDBlYjFhMTcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZYQsGb-WbKHowHfR3NcpfLkOFMJNJhV6XMon4aVHhc',
        },
      }
    );
  }

  gatSearch(q: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=0ccf26111048f92980b10d0b2f0c63cd`
    );
  }
}
