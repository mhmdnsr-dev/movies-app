import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchListComponent } from './watch-list/watch-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WatchListComponent],
  imports: [CommonModule, SharedModule],
  exports: [WatchListComponent],
})
export class WatchModule {}
