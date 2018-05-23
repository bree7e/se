import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, merge } from 'rxjs/operators';

import { PhotoService } from './photo.service';
import Photo from 'src/app/photo.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // photos$: Observable<Photo[]>;
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
