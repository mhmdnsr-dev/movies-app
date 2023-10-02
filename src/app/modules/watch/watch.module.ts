import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchListComponent } from './watch-list/watch-list.component';




@NgModule({
  declarations: [
    WatchListComponent,

  ],
  imports: [
    CommonModule
  ],
  exports :[
    WatchListComponent
  ]
})
export class WatchModule { }
