import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WatchModule } from '../watch/watch.module';


@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule,WatchModule],
  exports: [HeaderComponent, FooterComponent, MovieCardComponent],
})
export class SharedModule {}
