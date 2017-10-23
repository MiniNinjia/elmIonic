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

import {FoodServiceProvider} from '../../providers/food-service/food-service'
import {GlobleServiceProvider} from '../../providers/globle-service/globle-service'
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
  @ViewChild('rightList') rightList: any;
  @ViewChild('leftList') leftList: any;
  type: any;//商品。评价。店铺
  flag: boolean;//购物车的状态，true为有东西。false为空
  ballList = [];//小球的集合 。x:小球的X坐标;y:小球的Y坐标。左下角为起点
  screenH = screen.height;//
  foodData: any;
  img_url = this.glo.uploadUrl;
  cartData = [];//购物车的集合;
  left_item_active = 0;//左边选中的第几个元素;
  cart_Count = 0;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public fs: FoodServiceProvider,
              public glo: GlobleServiceProvider) {
  }

  ionViewDidLoad() {
    this.type = 1;
    this.fs.getfood('1', (result) => {
      this.foodData = JSON.parse(result._body);
      this.foodData[0].flag = true;

      this.rightList._scrollContent.nativeElement.addEventListener("scroll", () => {
        let top = this.rightList._scrollContent.nativeElement.scrollTop;
        let child = this.rightList._scrollContent.nativeElement.firstElementChild.firstElementChild;
        for (var i in this.foodData) {
          if (top < child.children[i].offsetTop + child.children[i].offsetHeight) {
            this.left_item_active = +i;
            break;
          }
        }
      });
    })
  }

  //点击左边菜单
  clickLeft(i, e) {
    this.left_item_active = i;
    let _scrollTop = this.rightList._scrollContent.nativeElement.firstElementChild.firstElementChild.children[i].offsetTop;
    this.rightList._scrollContent.nativeElement.scrollTop = _scrollTop;
    // console.log(e);
    // console.log(this.leftList._scrollContent.nativeElement.scrollTop);
  }

  //购物车减少food
  cart_sub(data, j, k) {
    this.cart_Count -= 1;
    if (this.foodData[j].foods[k].selectCount - 1 > 0) {
      this.foodData[j].foods[k].selectCount = this.foodData[j].foods[k].selectCount - 1;
    } else {
      this.foodData[j].foods[k].selectCount = 0;
    }
  }

  //购物车添加food
  cart_add(e, data, j, k) {
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

    if (this.foodData[j].foods[k].selectCount) {
      this.foodData[j].foods[k].selectCount = this.foodData[j].foods[k].selectCount + 1;
    } else {
      this.foodData[j].foods[k].selectCount = 1;
    }
    this.cart_Count += 1;
    console.log(data);
    this.cartData.forEach((a) => {

    });
    this.cartData.push({
      attrs: [],
      extra: {},
      id: 1992,
      name: "xcv",
      packing_fee: 0,
      price: 20,
      quantity: 1,
      sku_id: 1990,
      specs: ["默认"],
      stock: 1000,
    })
  }
  //show购物车里面的东西
  showCart(){

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
