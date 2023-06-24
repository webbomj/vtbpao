import { Component } from '@angular/core';
import {
  IconColor,
  IconPosition,
} from 'src/app/shared/components/button/custom-button.interface';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  getEnum(key: string): any {
    switch (key) {
      case 'IconPosition':
        return IconPosition;
      case 'IconColor':
        return IconColor;
      default:
        return null;
    }
  }
}
