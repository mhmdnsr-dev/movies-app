import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartElementViewService } from '../../cart-element-view.service';
@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent {
  cartItems: any[] = [];
 constructor(private cartElementViewService:CartElementViewService){}
 ngOnInit(){
  this.cartItems = this.cartElementViewService.getArrayValue();
 }
}
