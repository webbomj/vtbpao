import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarListComponent } from './components/sidebar/components/sidebar-list/sidebar-list.component';
import { SidebarExpandedItemComponent } from './components/sidebar/components/sidebar-expanded-item/sidebar-expanded-item.component';
import { SidebarItemComponent } from './components/sidebar/components/sidebar-item/sidebar-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarListComponent,
    SidebarExpandedItemComponent,
    SidebarItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
