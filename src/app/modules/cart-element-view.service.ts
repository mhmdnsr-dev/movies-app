import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './shared/movie';

@Injectable({
  providedIn: 'root',
})
export class CartElementViewService {
  private arrayObj = new BehaviorSubject<Movie[]>([]);
  constructor() {
    const storedItems = localStorage.getItem('cartItems');
    const initialArray = storedItems ? JSON.parse(storedItems) : [];
    this.arrayObj = new BehaviorSubject<any[]>(initialArray);
  }
  deleteObject(cartItem: Movie) {
    const currentArray = this.arrayObj.value;
    const updatedArray = currentArray.filter(item => item.id !== cartItem.id);

    this.arrayObj.next([...updatedArray]);
    localStorage.setItem('cartItems', JSON.stringify(updatedArray));

    return updatedArray;
  }

  addObject(cartItem: Movie) {
    let currentArray = this.arrayObj.value;
    // const exists = currentArray.includes(cartItem);
    const exists = currentArray.find(m => m.id === cartItem.id);
    if (!exists) currentArray.push(cartItem);
    else currentArray = currentArray.filter(m => m.id !== cartItem.id);

    this.arrayObj.next(currentArray);
    localStorage.setItem('cartItems', JSON.stringify(currentArray));
    return currentArray;
  }

  getArrayValue(): any[] {
    return this.arrayObj.value;
  }
  getArray() {
    return this.arrayObj;
  }
}
