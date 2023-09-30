import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { TrendingComponent } from './trending/trending.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    MoviesListComponent,
    TrendingComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeroSectionComponent, MoviesListComponent, HomePageComponent],
})
export class HomeModule {}
