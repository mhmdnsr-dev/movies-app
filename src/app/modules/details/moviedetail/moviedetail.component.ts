import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Detail from '../details';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css'],
})
export class MoviedetailComponent {
  moviedetail!: Detail;
  movieid = new BehaviorSubject(1);
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.params.subscribe(queryParams => {
      this.movieid.next(+queryParams['id']);
      const url = `https://api.themoviedb.org/3/movie/${this.movieid.value}?language=en-US`;
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
          if (!res.ok) this.router.navigate(['not-found']);
          return res.json();
        })
        .then(val => {
          this.moviedetail = val;
        })
        .catch(err => {});
    });
  }
}
