# Задание 2.

Создано:
* Модуль Tabs
* 2 директивы (Заголовок вкладки, Содержимое вкладки), которые выбирают dom элементы по селекторам тегов `<tab-title>` и `<tab-content>`.
* Компонент "Вкладка" 
```html
<ng-template #titleTemplate>
    <ng-content select="tab-title"></ng-content>
</ng-template>
<ng-template #contentTemplate>
    <ng-content select="tab-content"></ng-content>
</ng-template>
```
В коде объявлены 2 переменных, которые через декоратор `@ViewChild` получают разметку заголовка и содержмого, чтобы в дальнейшем их рендерить вместе с внутренностями.
```ts
    @ViewChild('titleTemplate') public titleTemplate: TemplateRef<TabTitle>;
    @ViewChild('contentTemplate') public contentTemplate: TemplateRef<TabContent>;
```

* Компонент "Вкладки"
Рисует список вкладок по разметке заголовков отдельных вкладок, а также содержимое активной вкладки используя директиву `ngTemplateOutlet`. 

```html
<li *ngFor="let tab of tabs">
    <ng-template [ngTemplateOutlet]="tab.titleTemplate"></ng-template>
</li>
<ng-template [ngTemplateOutlet]="activeTab.contentTemplate" *ngIf="tabs.length"></ng-template>
```

Доступ к списку вкладок осуществлён через декоратор `@ContentChildren`.
```ts
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    activeTab: TabComponent = null;
```    

**Задание:** форкнуть проект (зеркало на гитхаб) и на его основе реализовать табы по указанной в app.component.html разметке (в отдельном модуле, в отдельном каталоге). И содержимое, и заголовок должны поддерживать отображение других компонентов/произвольного html. По умолчанию активен первый таб. Должна поддерживаться возможность динамически добавить/убрать таб. При удалении активного таба, активным становится первый таб (если остался хотя бы один). Для оформления табов достаточно использовать 3 класса из styles.css. Приложение должно работать без NO_ERRORS_SCHEMA/CUSTOM_ELEMENTS_SCHEMAв AppModule.

**Дополнительное задание:** Сделать так, чтобы содержимое табов инициализировалось только при активации таба. Допускается изменение разметки.
