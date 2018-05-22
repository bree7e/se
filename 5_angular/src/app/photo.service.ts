import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import Photo from 'src/app/photo.model';

@Injectable()
export class PhotoService {
  private photos: Photo[];

  constructor() {}

  getPhotos(): Observable<Photo[]> {
      return of(this.photos);
  }
}
