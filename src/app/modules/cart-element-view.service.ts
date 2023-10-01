import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartElementViewService {
private arrayObj = new BehaviorSubject<any[]>([])
  constructor() { }


  addObject(cartItem: object) {
    const currentArray = this.arrayObj.value;
    const exists = currentArray.includes(cartItem);
    if (!exists) {
      currentArray.push(cartItem);
      this.arrayObj.next(currentArray);
    }
    return currentArray
  }

  getArrayValue(): any[] {
    return this.arrayObj.value;
  }
}
