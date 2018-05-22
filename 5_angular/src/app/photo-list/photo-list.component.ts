import { Component, OnInit, Input } from '@angular/core';

import Photo from 'src/app/photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  @Input() photos: Photo[];

  constructor() {}

  ngOnInit() {}

  showButton(): boolean {
    return true;
  }
}
