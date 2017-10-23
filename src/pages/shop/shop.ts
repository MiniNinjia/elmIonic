import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, Content} from 'ionic-angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import {ShopService} from '../../service/shop.service';
import {MyConifg} from '../../service/MyConifg';
/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
  animations: [
    trigger('ballx', [
      transition('void => *', [
        animate('.55s', style({
          //transform: 'translateX(-100px)'
          left: 100 + 'px'
        }))
      ]),
    ]),
    trigger('bally', [
      transition('void => *', [
        animate('.55s cubic-bezier(0.3, -0.25, 0.7, -0.15)', style({
          // transform: 'translateY(100px)'
          // top:700+'px'
          bottom: 0
        }))
      ]),
    ])
  ]
})


export class ShopPage {
  @ViewChild(Content) content: Content;
  @ViewChild('cart_position') cart_position: any;
  @ViewChild('ball_el') el_ball: any;
  type: any;//商品。评价。店铺
  flag: boolean;//购物车的状态，true为有东西。false为空
  ballList = [];//小球的集合 。x:小球的X坐标;y:小球的Y坐标。左下角为起点
  screenH = screen.height;//
  foodData: any;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public ss: ShopService,
              public myconfig: MyConifg) {
  }

  ionViewDidLoad() {
    this.type = 1;
    console.log('1111')
    this.ss.getfood(1, function (result) {
      console.log(result);
    })
  }

  ngOnInit(){
    console.log('22222')
  }

  cart_add(e) {
    let ya = e.target.offsetTop;
    let yb = e.target.offsetParent.offsetTop;
    let yc = e.target.offsetParent.offsetParent.offsetTop;
    let yd = this.content.contentTop;
    let ye = e.target.offsetParent.offsetParent.offsetParent.scrollTop;
    let y = ya + yb + yc + yd + e.target.offsetHeight - ye;
    let xa = e.target.offsetLeft;
    let xb = e.target.offsetParent.offsetLeft;
    let xc = e.target.offsetParent.offsetParent.offsetLeft;
    let xd = e.target.offsetParent.offsetParent.offsetParent.offsetWidth;
    let x = screen.width - (xd - (xa + xb + xc));
    this.ballList.unshift({x: x + 'px', y: screen.height - y + 'px'});


  }


  //加到购物车特效
  cart_animation() {
    this.ballList.pop();
    if (this.flag == true) this.flag = false;
    this.flag = true;
    setTimeout(() => {
      this.flag = false;
    }, 500)
  }


  disMiss() {
    this.viewCtrl.dismiss();
  }
}
