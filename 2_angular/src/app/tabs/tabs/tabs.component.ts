import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    @HostBinding('class.tabs__titles') _ = true;

    constructor() {}

    ngOnInit() {}
}
