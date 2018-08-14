import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { tap, concat, publishReplay, refCount, scan } from 'rxjs/operators';
import Photo from './photo.model';

/**
 * Операция над фотографиями. Принимает и отправляет массив фотографий
 */
type PhotoOperation = (photos: Photo[]) => Photo[];

@Injectable({
    providedIn: 'root'
})
export class PhotoServiceReactive {
    readonly url = 'https://jsonplaceholder.typicode.com';
    readonly perPage = 9;
    private page = 0;
    /** поток функций которые будут применены к photos */
    private updates = new Subject<PhotoOperation>();
    /** поток фотографий, актуальный на последний момент */
    public photos$: Observable<Photo[]>;

    constructor(private http: HttpClient) {
        this.photos$ = this.updates.pipe(
            scan(
                (messages: Photo[], operation: PhotoOperation) => operation(messages), []
            ),
            publishReplay(1),
            refCount()
        );
    }

    /**
     * Добавляет в поток фотографии
     * @param newPhotos - массив новых фотографий
     */
    private addPhotosToStream(newPhotos: Photo[]): void {
        this.updates.next((photos: Photo[]): Photo[] => {
            return photos.concat(newPhotos);
        });
    }

    private getPhotos(start: number = 0): Observable<Photo[]> {
        const params = new HttpParams()
            .set('_start', String(start * this.perPage))
            .set('_limit', String(this.perPage));
        return this.http.get<Photo[]>(this.url + '/photos', { params });
    }

    public loadPhotos(): void {
        this.getPhotos(this.page++).subscribe((newPhotos: Photo[]) => {
            this.addPhotosToStream(newPhotos);
        });
    }
}
