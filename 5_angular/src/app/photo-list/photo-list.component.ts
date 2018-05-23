import {
    Component,
    OnInit,
    Input,
    Output,
    ChangeDetectionStrategy,
    EventEmitter
} from '@angular/core';

import Photo from 'src/app/photo.model';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoListComponent implements OnInit {
    @Input() photos: Photo[];
    @Output() loadMore = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    showButton(): boolean {
        return true;
    }

    emitLoadMore(): void {
        this.loadMore.emit();
    }
}
