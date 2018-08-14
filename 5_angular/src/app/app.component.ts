import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photo.service';
import Photo from './photo.model';
import { PhotoServiceReactive } from './photo-reactive.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    photos: Photo[] = [];
    photos$: Observable<Photo[]>;
    showButton = true;

    constructor(
        private photoService: PhotoService,
        private photoServiceReactive: PhotoServiceReactive
    ) {}

    ngOnInit() {
        this.photos$ = this.photoServiceReactive.photos$;
    }

    onLoadMore(): void {
        const pageSize = 9;
        this.photoService.getMorePhotos(pageSize).subscribe(photos => {
            this.photos = [...this.photos, ...photos];
            if (photos.length < pageSize) {
                this.showButton = false;
            }
        });
    }

    onLoadMoreReactive(): void {
        this.photoServiceReactive.loadPhotos();
    }
}
