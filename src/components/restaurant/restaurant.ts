import {Component, Input, EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the RestaurantComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'restaurant',
  templateUrl: 'restaurant.html'
})
export class RestaurantComponent {
  @Input() restaurant:any;
  @Output() shopid = new EventEmitter<any>();
  text: string;

  constructor() {

  }

  ionViewDidLoad() {
    console.log(this.restaurant);
  }


  click(id) {
    this.shopid.emit(id);
  }
}
