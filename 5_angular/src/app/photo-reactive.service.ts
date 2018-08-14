import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { tap, concat, publishReplay, refCount, scan } from 'rxjs/operators';
import Photo from './photo.model';

type PhotoOperation = (photos: Photo[]) => Photo[];
const initialPhotos: Photo[] = [];

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    // readonly url = 'http://localhost:3000';
    readonly url = 'https://jsonplaceholder.typicode.com';
    private page = 0;
    /** поток, который публикует новые фотографии один раз */
    public newPhotos = new Subject<Photo[]>();
    /** поток фотографий, актуальный на последний момент */
    public photos: Observable<Photo[]>;
    /** поток updates получает `operations` которые будут применены к photos,
     * способ изменить все фотографии в потоке photos */
    // updates - стрим функций. Типизирован функцией MessageOperation над сообщениями, те принимает и возвращает массив сообщений
    public updates: Subject<any> = new Subject<any>();

    constructor(private http: HttpClient) {
        this.photos = this.updates.pipe(
            scan((messages: Photo[], operation: PhotoOperation) => {
                return operation(messages);
            }, initialPhotos),
            // make sure we can share the most recent list of messages across anyone
            // who's interested in subscribing and cache the last known list of photos
            publishReplay(1),
            refCount()
        );
    }

    /**
     * Добавляет в поток фотографии
     * @param newPhotos - массив новый фотографий
     */
    addPhotos(newPhotos: Photo[]): void {
        // this.updates.next((photos: Photo[]): Photo[] => {
        //     return this.photos.pipe(concat(newPhotos));
        // });
    }

    getPhotos(start: number = 0, limit: number = 10): Observable<Photo[]> {
        const params = new HttpParams()
            .set('_start', String(start))
            .set('_limit', String(limit));
        return this.http.get<Photo[]>(this.url + '/photos', { params });
        // .pipe(tap(_ => console.log(_)));
    }

    getMorePhotos(limit = 9): Observable<Photo[]> {
        return this.getPhotos(this.page++ * limit, limit);
    }
}

// Внутри стрима. Принимается операция и массив сообщений, выполняется операция над этим массивом.
// На первом шаге операции нет, массив уже с сообщениями

// Императивное добавление в каритнке. Реактивное
// На кождое новое сообщение надо создать свою функцию типа MessageOperation, которое к стриму сообщений concat'ирует это новое сообщение.