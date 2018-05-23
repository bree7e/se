import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import Photo from 'src/app/photo.model';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    //   private photos: Photo[];
    private photosUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=10'; // URL to web api

    constructor(private http: HttpClient) {}

    getPhotos(start: number = 0, limit: number = null): Observable<Photo[]> {
        return this.http
            .get<Photo[]>(this.photosUrl)
            .pipe(tap(_ => console.log(_)));
    }
}
