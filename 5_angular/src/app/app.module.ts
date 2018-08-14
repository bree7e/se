import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotoPopupComponent } from './photo-popup/photo-popup.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';

@NgModule({
    declarations: [AppComponent, PhotoItemComponent, PhotoListComponent, PhotoPopupComponent],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
