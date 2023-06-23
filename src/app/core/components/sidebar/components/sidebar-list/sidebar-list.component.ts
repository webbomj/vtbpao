import { Component, Input, OnInit } from '@angular/core';
import { ISidebarData, SidebarDataType } from '../../data/data.interface';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss'],
})
export class SidebarListComponent implements OnInit {
  @Input('data') sidebarData!: ISidebarData[];

  ngOnInit(): void {
    console.log(this.sidebarData);
  }

  itemIsExpansion(item: ISidebarData) {
    return item.type === SidebarDataType.expansion;
  }
}
