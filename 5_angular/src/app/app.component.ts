import { Component, OnInit } from '@angular/core';

import Photo from './photo.model';
import { PhotoServiceReactive } from './photo-reactive.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ PhotoServiceReactive ]
})
export class AppComponent implements OnInit {
    photos$: Observable<Photo[]>;
    showButton = true;

    constructor(
        private photoServiceReactive: PhotoServiceReactive
    ) {}

    ngOnInit() {
        this.photos$ = this.photoServiceReactive.photos$;
        this.onLoadMoreReactive();
    }

    onLoadMoreReactive(): void {
        this.photoServiceReactive.loadPhotos();
    }
}
