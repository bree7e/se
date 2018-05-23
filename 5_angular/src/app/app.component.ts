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


    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.onLoadMore();
    }

    onLoadMore(): void {
        this.photoService.getMorePhotos().subscribe(photos => {
            this.photos = [...this.photos, ...photos];
        });
    }
}
