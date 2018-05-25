import {
    Component,
    Input,
    Directive,
    ViewChild,
    TemplateRef
} from '@angular/core';
@Directive({
    selector: 'tab-title',
    host: { class: 'tabs__title' }
})
export class TabTitle {}

@Directive({
    selector: 'tab-content'
})
export class TabContent {}

@Component({
    selector: 'tab',
    templateUrl: './tab.component.html'
})
export class TabComponent {
    @Input() active = false;
    @ViewChild('titleTemplate') public titleTemplate: TemplateRef<TabTitle>;
    @ViewChild('contentTemplate') public contentTemplate: TemplateRef<TabContent>;
}
