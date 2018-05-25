import { Component, OnInit, ViewChild, Input, HostBinding, ElementRef } from '@angular/core';
import { TabTitleComponent } from '../tab-title/tab-title.component';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
    // @Input() active = false;
    @HostBinding('class.tabs__title') _ = true;
    @Input()
    @HostBinding('class.tabs__title--active') active = false;
    @ViewChild(TabTitleComponent) private title: ElementRef;
    @ViewChild(TabContentComponent) private content: ElementRef;

    constructor() {
        this.title.nativeElement.class
    }

    ngOnInit() {}
}
