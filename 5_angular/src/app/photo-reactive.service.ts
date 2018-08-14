import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { publishReplay, refCount, scan, map, takeUntil } from 'rxjs/operators';
import Photo from './photo.model';

/**
 * Операция над фотографиями. Принимает и отправляет массив фотографий
 */
type PhotoOperation = (photos: Photo[]) => Photo[];

@Injectable()
export class PhotoServiceReactive implements OnDestroy {
    readonly url = 'https://jsonplaceholder.typicode.com';
    readonly perPage = 9;
    private page = 0;
    /** поток новых фотографий, выкидываются единажды */
    private newPhotos$ = new Subject<Photo[]>();
    /** поток функций которые будут применены к photos */
    private updates$ = new Subject<PhotoOperation>();
    /** актуальный поток фотографий */
    public photos$: Observable<Photo[]>;
    /** action поток добавления фотографий */
    private add$ = new Subject<Photo[]>();
    /** поток отписки */
    private destroy$ = new Subject<void>();

    constructor(private http: HttpClient) {
        this.photos$ = this.updates$.pipe(
            takeUntil(this.destroy$),
            scan(
                (messages: Photo[], operation: PhotoOperation) =>
                    operation(messages),
                []
            ),
            publishReplay(1),
            refCount()
        );

        this.add$.pipe(
                takeUntil(this.destroy$),
                map(function(newPhotos: Photo[]): PhotoOperation {
                    return (photos: Photo[]) => {
                        return photos.concat(newPhotos);
                    };
                })
            )
            .subscribe(this.updates$);

        this.newPhotos$.pipe(takeUntil(this.destroy$))
            .subscribe(this.add$);
    }

    /**
     * Получение данные по http
     * @param start Начальная страница
     */
    private getPhotos(start: number = 0): Observable<Photo[]> {
        const params = new HttpParams()
            .set('_start', String(start * this.perPage))
            .set('_limit', String(this.perPage));
        return this.http.get<Photo[]>(this.url + '/photos', { params });
    }

    /**
     * Загрузить партию фотографий
     */
    public loadPhotos(): void {
        this.getPhotos(this.page++).subscribe((loadedPhotos: Photo[]) => {
            this.addPhotos(loadedPhotos);
        });
    }

    /**
     * Императивно добавляет в поток фотографии
     * @param photos - массив новых фотографий
     */
    public addPhotos(photos: Photo[]): void {
        this.newPhotos$.next(photos);
    }

    /**
     * передаем значение в destroyStream
     */
    ngOnDestroy() {
        this.destroy$.next();
    }
}
