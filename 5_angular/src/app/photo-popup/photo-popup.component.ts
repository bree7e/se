import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import Photo from 'src/app/photo.model';

@Component({
    selector: 'app-photo-popup',
    templateUrl: './photo-popup.component.html',
    styleUrls: ['./photo-popup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPopupComponent implements OnInit {
    @Input() photo: Photo;
    @Output() close = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
