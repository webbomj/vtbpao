import { Component } from '@angular/core';

import { sidebarData } from './data/data';
import { ISidebarData } from './data/data.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebarData: ISidebarData[] = sidebarData;
}
