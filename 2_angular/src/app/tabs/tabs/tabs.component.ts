import {
    Component,
    ContentChildren,
    QueryList,
    AfterContentInit
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    activeTab: TabComponent = null;

    ngAfterContentInit() {
        if (this.tabs) {
            this.selectTab(this.tabs.first);
        }
        this.tabs.changes.subscribe(tabs => {
            const activeTabs = tabs.filter(tab => tab.active);
            if (activeTabs.length === 0) {
                this.selectTab(tabs.first);
            }
        });
    }

    selectTab(tab: TabComponent) {
        this.tabs.toArray().forEach(t => (t.active = false));
        if (tab) {
            tab.active = true;
            this.activeTab = tab;
        }
    }
}
