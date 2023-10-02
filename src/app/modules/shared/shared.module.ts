import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 16,
      animation: false,
      titleFontSize: '12',
      unitsFontSize: '10',
      backgroundColor: '#000',
      titleColor: '#fff',
      unitsColor: '#fff',
      titleFontWeight: '600',
      unitsFontWeight: '600',
      showSubtitle: false,
      outerStrokeWidth: 4,
      showInnerStroke: false,
      backgroundPadding: 2,
      outerStrokeColor: '#1acb75',
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MovieCardComponent,
    FormsModule,
    NgCircleProgressModule,
    RouterModule,
  ],
})
export class SharedModule {}
