import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photo.service';
import Photo from './photo.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    photos: Photo[] = [];
    showButton = true;

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.onLoadMore();
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

}
