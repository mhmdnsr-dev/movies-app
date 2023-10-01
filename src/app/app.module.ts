import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { WatchModule } from './modules/watch/watch.module';



@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HomeModule,WatchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
