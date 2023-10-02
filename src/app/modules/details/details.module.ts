import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { SharedModule } from '../shared/shared.module';
import { RecommendComponent } from './recommendations/recommend.component';

@NgModule({
  declarations: [MoviedetailComponent, RecommendComponent],
  imports: [CommonModule, SharedModule],
  exports: [MoviedetailComponent, RecommendComponent],
})
export class DetailsModule {}
