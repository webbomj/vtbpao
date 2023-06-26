import { Component } from '@angular/core';
import {
  IconColor,
  IconPosition,
} from '../../components/button/custom-button.interface';
import { BaseComponent } from 'src/app/core/components/base/base.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent extends BaseComponent {
  filter = true;

  toggleFilter() {
    this.filter = !this.filter;
  }
}
