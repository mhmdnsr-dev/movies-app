import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './shared/movie';


@Injectable({
  providedIn: 'root'
})
export class CartElementViewService {
private arrayObj = new BehaviorSubject<any[]>([])
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
  
  
  

  

   addObject(cartItem: object) {
    const currentArray = this.arrayObj.value;
    const exists = currentArray.includes(cartItem);
    if (!exists) {
      currentArray.push(cartItem);
      this.arrayObj.next(currentArray);
      localStorage.setItem('cartItems', JSON.stringify(currentArray));
    }
    return currentArray;
  }

  getArrayValue(): any[] {
    return this.arrayObj.value;
  }
}




