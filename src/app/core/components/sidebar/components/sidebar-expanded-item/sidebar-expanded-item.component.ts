import { Component, Input } from '@angular/core';
import {
  IChildrenSidebar,
  ISidebarData,
  SidebarChildrenType,
} from '../../data/data.interface';

@Component({
  selector: 'app-sidebar-expanded-item',
  templateUrl: './sidebar-expanded-item.component.html',
  styleUrls: ['./sidebar-expanded-item.component.scss'],
})
export class SidebarExpandedItemComponent {
  @Input('data') sidebarData!: ISidebarData | undefined;
  panelOpenState = false;

  isItemHeader(item: IChildrenSidebar) {
    return item.type === SidebarChildrenType.header;
  }

  isItemChild(item: IChildrenSidebar) {
    return item.type === SidebarChildrenType.child;
  }
}
