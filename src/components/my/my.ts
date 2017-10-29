import { Component,Input,ViewChild } from '@angular/core';

/**
 * Generated class for the MyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my',
  templateUrl: 'my.html'
})
export class MyComponent {
  @ViewChild('loading_img') loading_img: any;
  text: string;
  Y:any;
  @Input() loading:any;
  constructor() {
    setInterval(() => {
      this.Y= -new Date().valueOf() % 7 * 5 + 'rem';
    }, 500);
  }

}
