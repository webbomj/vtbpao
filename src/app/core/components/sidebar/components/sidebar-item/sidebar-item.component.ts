import { Component, Input } from '@angular/core';
import { ISidebarItemData } from './sidebar-item.interface';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
})
export class SidebarItemComponent {
  @Input('data') sidebarItemData: ISidebarItemData | undefined;
}
