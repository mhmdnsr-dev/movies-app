import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { WatchListComponent } from './modules/watch/watch-list/watch-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path:'watch-list',
    component:WatchListComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
