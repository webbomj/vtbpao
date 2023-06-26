import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingComponent } from './pages/setting/setting.component';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SettingComponent, FilterComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [SettingComponent],
  providers: [],
})
export class ContragentModule {}
