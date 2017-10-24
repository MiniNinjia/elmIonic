import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, Content, PopoverController} from 'ionic-angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import {FoodServiceProvider} from '../../providers/food-service/food-service'
import{RestaurantProvider} from '../../providers/restaurant/restaurant'
import {GlobleServiceProvider} from '../../providers/globle-service/globle-service'
import {ToastController} from 'ionic-angular';

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
  @ViewChild('loading_img') loading_img: any;
  type: any;//商品。评价。店铺
  flag: boolean;//购物车的状态，true为有东西。false为空
  ballList = [];//小球的集合 。x:小球的X坐标;y:小球的Y坐标。左下角为起点
  screenH = screen.height;//
  foodData: any;
  img_url = this.glo.uploadUrl;
  cartData = [];//购物车的集合;
  left_item_active = 0;//左边选中的第几个元素;
  cart_Count = 0;
  showCartShow = false;
  madolData = {
    flag: false,
    j: 0,
    k: 0,
    data: [],
  };
  madolPrice = 0;
  specSelectIndex: 0;
  loading = true;
  sumPrice = 0;
  restaurantData: any;

  _img = 'http://cangdu.org:8001/img/';

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public fs: FoodServiceProvider,
              public rs: RestaurantProvider,
              public glo: GlobleServiceProvider,
              public toastCtrl: ToastController) {
  }
  ionViewDidLoad() {
    this.type = 1;
    let style = this.loading_img.nativeElement.style;
    setInterval(() => {
      style.backgroundPositionY = -new Date().valueOf() % 7 * 5 + 'rem';
    }, 500);
    this.rs.getRestaurant('1', (result) => {
      this.restaurantData = JSON.parse(result._body);
    });
    this.fs.getfood('1', (result) => {
      this.foodData = JSON.parse(result._body);
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      this.foodData[0].flag = true;
      this.rightList._scrollContent.nativeElement.addEventListener("scroll", () => {
        let top = this.rightList._scrollContent.nativeElement.scrollTop;
        let child = this.rightList._scrollContent.nativeElement.firstElementChild.firstElementChild;
        for (let i in this.foodData) {
          if (top < child.children[i].offsetTop + child.children[i].offsetHeight) {
            this.left_item_active = +i;
            break;
          }
        }
      });
    })
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'middle'
    });
    toast.present();
  }

  //点击左边菜单
  clickLeft(i, e) {
    this.left_item_active = i;
    let _scrollTop = this.rightList._scrollContent.nativeElement.firstElementChild.firstElementChild.children[i].offsetTop;
    this.rightList._scrollContent.nativeElement.scrollTop = _scrollTop;
    // console.log(e);
    // console.log(this.leftList._scrollContent.nativeElement.scrollTop);
  }

  //计算价格
  funSumPrice() {
    this.sumPrice = 0;
    this.cartData.forEach((a) => {
      this.sumPrice += (a.price ) * a.quantity;
    })
  }

  //购物车减少food
  cart_sub(data, j, k) {
    if (this.foodData[j].foods[k].specfoods.length > 1) {
      this.presentToast('多规格商品只能去购物车删除哦')
    } else {
      this.cart_Count -= 1;
      if (this.foodData[j].foods[k].selectCount - 1 > 0) {
        this.foodData[j].foods[k].selectCount = this.foodData[j].foods[k].selectCount - 1;
      } else {
        this.foodData[j].foods[k].selectCount = 0;
      }
      for (let a in this.cartData) {
        if (this.cartData[a].id == data.food_id) {
          this.cartData[a].quantity = this.foodData[j].foods[k].selectCount;
          if (this.cartData[a].quantity == 0) {
            this.cartData.splice(+a, 1);
            break;
          }
        }
      }
      if (this.cart_Count <= 0) this.showCartShow = false;
    }
    this.funSumPrice()
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
    let ppp = false;
    this.cartData.forEach((a) => {
      if (a.id == data.food_id) {
        a.quantity++;
        ppp = true;
      }
    });
    if (!ppp) {
      this.cartData.push({
        attrs: [],
        extra: {},
        id: data.food_id,
        name: data.name,
        packing_fee: data.packing_fee,
        price: data.price,
        quantity: 1,
        sku_id: data.specs_name,
        specs: data.specs,
        stock: data.stock,
        j: j,
        k: k
      });
    }
    this.funSumPrice()
  }

  //购物车减少food2
  cart_sub2(i, j, k) {
    this.cart_Count -= 1;
    if (this.foodData[j].foods[k].selectCount - 1 > 0) {
      this.foodData[j].foods[k].selectCount = this.foodData[j].foods[k].selectCount - 1;
    } else {
      this.foodData[j].foods[k].selectCount = 0;
    }
    this.cartData[i].quantity -= 1;
    if (this.cartData[i].quantity == 0) {
      this.cartData.splice(i, 1);
    }
    if (this.cart_Count <= 0) this.showCartShow = false;
    this.funSumPrice()

  }

  //购物车添加food2
  cart_add2(i, j, k) {
    this.cart_Count += 1;
    if (this.foodData[j].foods[k].selectCount) {
      this.foodData[j].foods[k].selectCount = this.foodData[j].foods[k].selectCount + 1;
    } else {
      this.foodData[j].foods[k].selectCount = 1;
    }
    this.cartData[i].quantity += 1;
    this.funSumPrice()

  }

  //添加有规格的商品
  specCaerAdd(data, j, k, specifications) {
    this.specSelectIndex = 0;
    this.madolPrice = data[0].price;
    this.madolData = {
      flag: true,
      j: j,
      k: k,
      data: data,
    };
    this.funSumPrice()

  }

  //修改选中的规格
  selectMadolCart(i) {
    this.specSelectIndex = i;
    this.madolPrice = this.madolData.data[i].price
  }

  //购物车添加food--有规格的商品
  spec_cart_add2() {
    this.cart_Count += 1;
    let j = this.madolData.j;
    let k = this.madolData.k;
    let data = this.madolData.data;
    if (this.foodData[j].foods[k].selectCount) {
      this.foodData[j].foods[k].selectCount = this.foodData[j].foods[k].selectCount + 1;
    } else {
      this.foodData[j].foods[k].selectCount = 1;
    }
    let ppp = false;
    this.cartData.forEach((a) => {
      if (a.id == data[this.specSelectIndex].food_id) {
        a.quantity++;
        ppp = true;
      }
    });
    if (!ppp) {
      this.cartData.push({
        attrs: [],
        extra: {},
        id: data[this.specSelectIndex].food_id,
        name: data[this.specSelectIndex].name,
        packing_fee: data[this.specSelectIndex].packing_fee,
        price: data[this.specSelectIndex].price,
        quantity: 1,
        sku_id: data[this.specSelectIndex].specs_name,
        specs: data[this.specSelectIndex].specs,
        stock: data[this.specSelectIndex].stock,
        j: j,
        k: k
      });
    }
    this.closeMadol();
    this.funSumPrice();
  }

  //关闭规格选择
  closeMadol() {
    this.madolData.flag = false;
    this.madolData.data = [];
  }

  //清空购物车
  clearCart() {
    this.cart_Count = 0;
    this.cartData = [];
    this.foodData.forEach((a) => {
      a.foods.forEach((b) => {
        b.selectCount = 0;
      })
    })
    this.showCartShow = false;
    this.funSumPrice();
  }

  //下面购物车的状态
  showCart() {
    if (this.showCartShow) {
      this.showCartShow = !this.showCartShow;
    } else {
      if (this.cart_Count > 0) this.showCartShow = !this.showCartShow
    }
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
