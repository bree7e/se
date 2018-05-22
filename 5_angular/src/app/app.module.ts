import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoItemComponent } from 'src/app/photo-item/photo-item.component';
import { PhotoListComponent } from 'src/app/photo-list/photo-list.component';

@NgModule({
  declarations: [AppComponent, PhotoItemComponent, PhotoListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
