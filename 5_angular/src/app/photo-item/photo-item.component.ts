import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import Photo from 'src/app/photo.model';

@Component({
    selector: 'app-photo-item',
    templateUrl: './photo-item.component.html',
    styleUrls: ['./photo-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoItemComponent implements OnInit {
    @Input() photo: Photo;

    constructor() {}

    ngOnInit() {}
}
