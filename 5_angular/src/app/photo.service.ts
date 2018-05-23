import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import Photo from 'src/app/photo.model';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    readonly url = 'https://jsonplaceholder.typicode.com';
    private page = 0;

    constructor(private http: HttpClient) {}

    getPhotos(start: number = 0, limit: number = 10): Observable<Photo[]> {
        const params = new HttpParams()
            .set('_start', String(start))
            .set('_limit', String(limit));
        return this.http
            .get<Photo[]>(this.url + '/photos', { params });
            // .pipe(tap(_ => console.log(_)));
    }

    getMorePhotos(limit = 9): Observable<Photo[]> {
        return this.getPhotos(this.page++ * limit, limit);
    }
}
