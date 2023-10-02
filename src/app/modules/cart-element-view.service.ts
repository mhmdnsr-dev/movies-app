import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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




