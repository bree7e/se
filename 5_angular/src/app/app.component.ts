import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoService } from './photo.service';
import Photo from 'src/app/photo.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    photos: Observable<Photo[]>;

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photos = this.photoService.getPhotos();
        console.log('init');
    }

    onLoadMore(): void {
        console.log('click on load');
    }
}
