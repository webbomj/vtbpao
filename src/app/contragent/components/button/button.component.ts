import { Component, Input } from '@angular/core';
import { IconColor, IconPosition } from './custom-button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('iconPosition') iconPosition: IconPosition = IconPosition.none;
  @Input('color') color: IconColor = IconColor.primary;
  @Input('text') text: string = 'hello';
  @Input('height') height: string = '40px';
  @Input('icon') icon: string = 'favorite';

  isRightIcon() {
    return this.iconPosition === IconPosition.right;
  }

  isLeftIcon() {
    return this.iconPosition === IconPosition.left;
  }

  setColor() {
    if (this.color === IconColor.primary) {
      return '';
    }
    return 'button__secondary';
  }

  setHeight() {
    return `height: ${this.height};`;
  }
}
