import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './pages/setting/setting.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SettingComponent],
  imports: [CommonModule, SharedModule],
  exports: [SettingComponent],
})
export class ContragentModule {}
