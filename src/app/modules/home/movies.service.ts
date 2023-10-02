import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private searchQuery = new BehaviorSubject('');

  get getQuery() {
    return this.searchQuery;
  }

  set setQuery(q: string) {
    this.searchQuery.next(q);
  }
}
