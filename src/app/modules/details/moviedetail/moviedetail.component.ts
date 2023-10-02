import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Detail from '../details';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css'],
})
export class MoviedetailComponent {
  movieid!: number;
  moviedetail!: Detail;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute = activeRoute;
    this.router = router;
    this.movieid = +this.activeRoute.snapshot.params['id'];
    const url = `https://api.themoviedb.org/3/movie/${this.movieid}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NmMjYxMTEwNDhmOTI5ODBiMTBkMGIyZjBjNjNjZCIsInN1YiI6IjY1MTAwNGU0MjZkYWMxMDBlYjFhMTcwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZYQsGb-WbKHowHfR3NcpfLkOFMJNJhV6XMon4aVHhc',
      },
    };
    fetch(url, options)
      .then(res => res.json())
      .then(val => {
        this.moviedetail = val;
        console.log(val);
      })
      .catch(err => console.error('error:' + err));
  }
}
