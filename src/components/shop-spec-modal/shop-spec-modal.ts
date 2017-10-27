import { Component,Input,Output,EventEmitter  } from '@angular/core';

/**
 * Generated class for the ShopSpecModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'shop-spec-modal',
  templateUrl: 'shop-spec-modal.html'
})
export class ShopSpecModalComponent {
  @Input('madolData') madolData: any;
  text: string;

  constructor() {
  }

}
