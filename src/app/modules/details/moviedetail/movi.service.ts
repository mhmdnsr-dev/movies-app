import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviService {

  constructor( private http:HttpClient) { }



  getmoviedetail(id: any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
  }
}
