import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotoItemComponent } from 'src/app/photo-item/photo-item.component';
import { PhotoListComponent } from 'src/app/photo-list/photo-list.component';
import { PhotoPopupComponent } from './photo-popup/photo-popup.component';

@NgModule({
    declarations: [AppComponent, PhotoItemComponent, PhotoListComponent, PhotoPopupComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
