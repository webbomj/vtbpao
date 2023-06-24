import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [BackButtonComponent, ButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, BackButtonComponent, ButtonComponent],
})
export class SharedModule {}
