import { Component, Input } from '@angular/core';
import { ISidebarData, SidebarDataType } from '../../data/data.interface';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss'],
})
export class SidebarListComponent {
  @Input('data') sidebarData!: ISidebarData[];

  itemIsExpansion(item: ISidebarData) {
    return item.type === SidebarDataType.expansion;
  }
}
