import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [BackButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, BackButtonComponent],
})
export class SharedModule {}
