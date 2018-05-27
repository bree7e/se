import {
    Component,
    Input,
    ChangeDetectionStrategy,
    EventEmitter,
    Output,
    HostListener
} from '@angular/core';
import Photo from 'src/app/photo.model';

@Component({
    selector: 'app-photo-popup',
    templateUrl: './photo-popup.component.html',
    styleUrls: ['./photo-popup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoPopupComponent {
    @Input() photo: Photo;
    @Output() close = new EventEmitter();

    @HostListener('document:keyup', ['$event'])
    handleEscape(event: KeyboardEvent): void {
        if (event.keyCode === 27) {
            this.closePopup();
        }
    }

    closePopup() {
        this.close.emit();
    }
}
