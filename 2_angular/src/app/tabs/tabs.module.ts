import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent, TabTitle, TabContent } from './tab/tab.component';
// import { TabTitleComponent } from './tab-title/tab-title.component';
// import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TabsComponent,
        TabComponent,
        TabTitle,
        TabContent
    ],
    exports: [
        TabsComponent,
        TabComponent,
        TabTitle,
        TabContent
    ]
})
export class TabsModule {}
