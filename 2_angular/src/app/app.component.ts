import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public tabs = [1, 2, 3];
    public activeTab = 1;

    public dec() {
        this.tabs = this.tabs.slice(0, -1);
    }

    public inc() {
        this.tabs = [...this.tabs, this.tabs.length + 1];
    }

    selectTab(tab: number) {
        // this.tabs.map((t) => {
        //     tab.selected = false;
        //   })
        //   tab.selected = true;        
        this.activeTab = tab;
    }
}
