import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
 constructor(private httpClient: HttpClient){}
  ngOnInit() {
    this.httpClient.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US').subscribe((data: any) => {
      console.log(data);
    });
 
}}
