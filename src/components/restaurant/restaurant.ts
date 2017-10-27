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
  // @Input() restaurant = [
  //   {
  //     "name": "效果演示",
  //     "address": "上海市静安区巨鹿路536-1",
  //     "id": 1,
  //     "latitude": 31.22166,
  //     "longitude": 121.45591,
  //     "location": [
  //       121.45591,
  //       31.22166
  //     ],
  //     "phone": "12356765432",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a80c0dff11582da6e2c697"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a80c0dff11582da6e2c696"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a80c0dff11582da6e2c695"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 612,
  //     "rating_count": 610,
  //     "rating": 4.4,
  //     "promotion_info": "好好吃好好吃",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e386eff0d5699.jpeg",
  //       "business_license_image": ""
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15e386ec1875697.jpeg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "2.5公里",
  //     "order_lead_time": "26分钟",
  //     "description": "好吃的",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a80c0dff11582da6e2c698"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "测试修",
  //     "address": "北京市海淀区岭南路36号广东大厦5层",
  //     "id": 1148,
  //     "latitude": 39.92775,
  //     "longitude": 116.30162,
  //     "location": [
  //       121.49424,
  //       31.30122
  //     ],
  //     "phone": "15761621234",
  //     "category": "甜品饮品/甜品",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a816cbebe2e53edc090e35"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a816cbebe2e53edc090e34"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a816cbebe2e53edc090e33"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 827,
  //     "rating_count": 485,
  //     "rating": 4.1,
  //     "promotion_info": "dghgfdgf",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e3898ec2b5718.jpeg",
  //       "business_license_image": "15e3898f5d05717.jpeg"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f2f95d9598663.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1183.8公里",
  //     "order_lead_time": "20小时44分钟",
  //     "description": "vbn",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a816cbebe2e53edc090e36"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "漓江人1",
  //     "address": "上海市徐汇区淮海西路241号",
  //     "id": 1149,
  //     "latitude": 31.19789,
  //     "longitude": 121.42656,
  //     "location": [
  //       121.42656,
  //       31.19789
  //     ],
  //     "phone": "12@qq.com",
  //     "category": "快餐便当/米粉面馆",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a8b92bebe2e53edc093071"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a8b92bebe2e53edc093070"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a8b92bebe2e53edc09306f"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 413,
  //     "rating_count": 236,
  //     "rating": 4.7,
  //     "promotion_info": "美味干净卫生安全",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "05:30/19:00"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e3b13583f5727.jpg",
  //       "business_license_image": "15e3b13386c5726.jpg"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15e55ea14306077.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "6.8公里",
  //     "order_lead_time": "34分钟",
  //     "description": "美味干净",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a8b92bebe2e53edc093072"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "陈晨商店21",
  //     "address": "浙江省杭州市江干区月雅路西区一层95号qq",
  //     "id": 1151,
  //     "latitude": 30.3084,
  //     "longitude": 120.30176,
  //     "location": [
  //       120.30176,
  //       30.3084
  //     ],
  //     "phone": "17701747753",
  //     "category": "异国料理/西餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a8be19ebe2e53edc093aca"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a8be19ebe2e53edc093ac9"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a8be19ebe2e53edc093ac8"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 986,
  //     "rating_count": 803,
  //     "rating": 4.7,
  //     "promotion_info": "陈晨商店",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "05:30/05:45"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e3b269c015733.png",
  //       "business_license_image": "15e3b268b625732.png"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15ea50899077107.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "163公里",
  //     "order_lead_time": "2小时34分钟",
  //     "description": "nvnvnvn",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a8be19ebe2e53edc093acb"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "披123122",
  //     "address": "浙江省杭州市江干区天城路1号",
  //     "id": 1152,
  //     "latitude": 30.29053,
  //     "longitude": 120.21302,
  //     "location": [
  //       120.21302,
  //       30.29053
  //     ],
  //     "phone": "13336015181",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a8dd51ebe2e53edc0972b3"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a8dd51ebe2e53edc0972b2"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a8dd51ebe2e53edc0972b1"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 739,
  //     "rating_count": 263,
  //     "rating": 4.7,
  //     "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "08:00/09:00"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e3ba08b3e5760.jpg",
  //       "business_license_image": "15e3ba08de15759.jpg"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15e7f67a96e6794.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "170.2公里",
  //     "order_lead_time": "2小时33分钟",
  //     "description": "88885",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a8dd51ebe2e53edc0972b4"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "所得税",
  //     "address": "浙江省温州市瓯海区温州大道瓯江大厦1层新南站商城附近",
  //     "id": 1153,
  //     "latitude": 27.98201,
  //     "longitude": 120.67931,
  //     "location": [
  //       120.67931,
  //       27.98201
  //     ],
  //     "phone": "15000000000",
  //     "category": "小吃夜宵/地方小吃",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a8ec56ebe2e53edc09791e"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a8ec56ebe2e53edc09791d"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a8ec56ebe2e53edc09791c"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 936,
  //     "rating_count": 759,
  //     "rating": 4.2,
  //     "promotion_info": "dd",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥7"
  //     },
  //     "opening_hours": [
  //       "05:45/06:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e3bdacfe05762.jpg",
  //       "business_license_image": "15e3bdb0b9a5763.jpg"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f046843988222.PNG",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 17,
  //     "float_delivery_fee": 7,
  //     "distance": "452.9公里",
  //     "order_lead_time": "6小时39分钟",
  //     "description": "ddqqq",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a8ec56ebe2e53edc09791f"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "豆芽快餐",
  //     "address": "北京市昌平区西三旗建材城中路住总·旗胜家园南区",
  //     "id": 1155,
  //     "latitude": 40.06693,
  //     "longitude": 116.35995,
  //     "location": [
  //       116.35995,
  //       40.06693
  //     ],
  //     "phone": "13381178613",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a8fed7ebe2e53edc099168"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a8fed7ebe2e53edc099167"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a8fed7ebe2e53edc099166"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 848,
  //     "rating_count": 788,
  //     "rating": 4.2,
  //     "promotion_info": "1111",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e3c238c6b5777.png",
  //       "business_license_image": "15e3c237dc95776.png"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15e9918c6546999.png",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1192.8公里",
  //     "order_lead_time": "20小时38分钟",
  //     "description": "只卖豆芽，没有其他菜",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a8fed7ebe2e53edc099169"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "阿泰包子",
  //     "address": "广东省广州市天河区中山大道棠下儒林大街西1号之1",
  //     "id": 1157,
  //     "latitude": 23.12544,
  //     "longitude": 113.37996,
  //     "location": [
  //       116.79813,
  //       39.80224
  //     ],
  //     "phone": "13381178613",
  //     "category": "快餐便当/煲仔饭",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a8ff61ebe2e53edc0992b7"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a8ff61ebe2e53edc0992b6"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a8ff61ebe2e53edc0992b5"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 557,
  //     "rating_count": 656,
  //     "rating": 4.9,
  //     "promotion_info": "3额423",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "05:30/06:15"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e3c2562565782.png",
  //       "business_license_image": "15e3c255a8b5781.png"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15e4d650fd15909.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1384.4公里",
  //     "order_lead_time": "20小时7分钟",
  //     "description": "1121",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a8ff61ebe2e53edc0992b8"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "大脸超市",
  //     "address": "北京市朝阳区东三环中路65号",
  //     "id": 1159,
  //     "latitude": 39.89548,
  //     "longitude": 116.46069,
  //     "location": [
  //       116.41837,
  //       40.03077
  //     ],
  //     "phone": "13520975457",
  //     "category": "甜品饮品/咖啡",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59a90f6debe2e53edc09b27c"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59a90f6debe2e53edc09b27b"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59a90f6debe2e53edc09b27a"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 590,
  //     "rating_count": 887,
  //     "rating": 4.3,
  //     "promotion_info": "好吃为主",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥0"
  //     },
  //     "opening_hours": [
  //       "05:30/23:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15e3c644e4a5792.png",
  //       "business_license_image": "15e3c643f225791.png"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15e3c641b2c5790.png",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 0,
  //     "distance": "1166.2公里",
  //     "order_lead_time": "20小时25分钟",
  //     "description": "好吃的都在这里",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59a90f6debe2e53edc09b27d"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "1222",
  //     "address": "APM线,地铁3号线",
  //     "id": 1656,
  //     "latitude": 23.105911,
  //     "longitude": 113.323302,
  //     "location": [
  //       113.323302,
  //       23.105911
  //     ],
  //     "phone": "123",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59e83d008b0b3516d584e2d4"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59e83d008b0b3516d584e2d3"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59e83d008b0b3516d584e2d2"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 787,
  //     "rating_count": 371,
  //     "rating": 4.7,
  //     "promotion_info": "2",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "05:30/23:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "",
  //       "business_license_image": ""
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f332e466d8688.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1388.1公里",
  //     "order_lead_time": "20小时31分钟",
  //     "description": "1",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [],
  //     "__v": 0
  //   },
  //   {
  //     "name": "面点王",
  //     "address": "广东省广州市天河区天河北路163号(体育学院南门西侧时代广场斜对面)",
  //     "id": 1659,
  //     "latitude": 23.14204,
  //     "longitude": 113.32006,
  //     "location": [
  //       113.32006,
  //       23.14204
  //     ],
  //     "phone": "85612825",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59e8627f8b0b3516d5855d55"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59e8627f8b0b3516d5855d54"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59e8627f8b0b3516d5855d53"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 529,
  //     "rating_count": 353,
  //     "rating": 4.7,
  //     "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "",
  //       "business_license_image": ""
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f33c0c2178706.png",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1427.4公里",
  //     "order_lead_time": "17小时19分钟",
  //     "description": "面 粥 饺子",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59e8627f8b0b3516d5855d56"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "567u56",
  //     "address": "江苏省南京市江宁区 ",
  //     "id": 1663,
  //     "latitude": 31.79068,
  //     "longitude": 118.64298,
  //     "location": [
  //       118.64298,
  //       31.79068
  //     ],
  //     "phone": "5657",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59e8bad48b0b3516d585f922"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59e8bad48b0b3516d585f921"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59e8bad48b0b3516d585f920"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 457,
  //     "rating_count": 396,
  //     "rating": 4.5,
  //     "promotion_info": "rutyuy",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15f351922a48743.jpg",
  //       "business_license_image": "15f3519da138745.jpg"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f3519c3e78744.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "304公里",
  //     "order_lead_time": "5小时48分钟",
  //     "description": "5uyru",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59e8bad48b0b3516d585f926"
  //       },
  //       {
  //         "icon_name": "特",
  //         "name": "优惠大酬宾",
  //         "description": "tyuy",
  //         "icon_color": "EDC123",
  //         "id": 2,
  //         "_id": "59e8bad48b0b3516d585f925"
  //       },
  //       {
  //         "icon_name": "新",
  //         "name": "新用户立减",
  //         "description": "yuyiyuiui",
  //         "icon_color": "70bc46",
  //         "id": 3,
  //         "_id": "59e8bad48b0b3516d585f924"
  //       },
  //       {
  //         "icon_name": "领",
  //         "name": "进店领券",
  //         "description": "57556756",
  //         "icon_color": "E3EE0D",
  //         "id": 4,
  //         "_id": "59e8bad48b0b3516d585f923"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "fa",
  //     "address": "福建省泉州市石狮市石狮服装城百灵街百宏写字楼25FA",
  //     "id": 1667,
  //     "latitude": 24.71783,
  //     "longitude": 118.61893,
  //     "location": [
  //       118.61893,
  //       24.71783
  //     ],
  //     "phone": "13442",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59e9680f8b0b3516d58654a5"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59e9680f8b0b3516d58654a4"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59e9680f8b0b3516d58654a3"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 286,
  //     "rating_count": 858,
  //     "rating": 4.8,
  //     "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15f37be9d7c8758.png",
  //       "business_license_image": "15f37be72e18757.png"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f37be6e6e8756.png",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "930.5公里",
  //     "order_lead_time": "14小时51分钟",
  //     "description": "",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59e9680f8b0b3516d58654a6"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "商铺001",
  //     "address": "广东省深圳市福田区笋岗西路2006号",
  //     "id": 1670,
  //     "latitude": 22.55957,
  //     "longitude": 114.09201,
  //     "location": [
  //       114.09201,
  //       22.55957
  //     ],
  //     "phone": "10086",
  //     "category": "商店超市/超市",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59e981768b0b3516d5867c5b"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59e981768b0b3516d5867c5a"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59e981768b0b3516d5867c59"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 31,
  //     "rating_count": 869,
  //     "rating": 4.1,
  //     "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "05:30/23:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15f3821729e8773.png",
  //       "business_license_image": "15f38217e368772.png"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f382151f88771.png",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1383.5公里",
  //     "order_lead_time": "20小时47分钟",
  //     "description": "",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59e981768b0b3516d5867c5d"
  //       },
  //       {
  //         "icon_name": "特",
  //         "name": "优惠大酬宾",
  //         "description": "大酬宾001",
  //         "icon_color": "EDC123",
  //         "id": 2,
  //         "_id": "59e981768b0b3516d5867c5c"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "测试商铺001",
  //     "address": "广东省深圳市龙华区致远中路",
  //     "id": 1672,
  //     "latitude": 22.60974,
  //     "longitude": 114.02961,
  //     "location": [
  //       114.02961,
  //       22.60974
  //     ],
  //     "phone": "10086",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59e981ee8b0b3516d5867cfb"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59e981ee8b0b3516d5867cfa"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59e981ee8b0b3516d5867cf9"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 407,
  //     "rating_count": 293,
  //     "rating": 4.2,
  //     "promotion_info": "欢迎光临，用餐高峰请提前下单，谢谢",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "",
  //       "business_license_image": ""
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f38238f248774.png",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1385.7公里",
  //     "order_lead_time": "20小时50分钟",
  //     "description": "",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59e981ee8b0b3516d5867cfc"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "111111",
  //     "address": "浙江省杭州市余杭区五常大道168",
  //     "id": 1678,
  //     "latitude": 30.24471,
  //     "longitude": 120.03091,
  //     "location": [
  //       120.03091,
  //       30.24471
  //     ],
  //     "phone": "111111",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59e9b3d68b0b3516d586e951"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59e9b3d68b0b3516d586e950"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59e9b3d68b0b3516d586e94f"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 270,
  //     "rating_count": 376,
  //     "rating": 4.1,
  //     "promotion_info": "111111",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥20"
  //     },
  //     "opening_hours": [
  //       "05:30/23:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "",
  //       "business_license_image": ""
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f38e54bf78796.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 100,
  //     "float_delivery_fee": 20,
  //     "distance": "186.4公里",
  //     "order_lead_time": "2小时58分钟",
  //     "description": "111111",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59e9b3d68b0b3516d586e952"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "小唐餐饮",
  //     "address": "浙江省杭州市西湖区文一西路65号",
  //     "id": 1680,
  //     "latitude": 30.28622,
  //     "longitude": 120.10034,
  //     "location": [
  //       120.10034,
  //       30.28622
  //     ],
  //     "phone": "13325914123",
  //     "category": "特色菜系/川湘菜",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59eb69f68b0b3516d587db83"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59eb69f68b0b3516d587db82"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59eb69f68b0b3516d587db81"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 65,
  //     "rating_count": 325,
  //     "rating": 4.4,
  //     "promotion_info": "小唐餐饮",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "10:00/23:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15f3f9600078828.jpg",
  //       "business_license_image": "15f3f95e6438827.jpg"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f3f95d5328826.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "177.9公里",
  //     "order_lead_time": "2小时40分钟",
  //     "description": "小唐餐饮",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59eb69f68b0b3516d587db85"
  //       },
  //       {
  //         "icon_name": "特",
  //         "name": "优惠大酬宾",
  //         "description": "小唐餐饮",
  //         "icon_color": "EDC123",
  //         "id": 2,
  //         "_id": "59eb69f68b0b3516d587db84"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "德阳奶茶",
  //     "address": "上海市青浦区明珠路838",
  //     "id": 1683,
  //     "latitude": 31.18289,
  //     "longitude": 121.26469,
  //     "location": [
  //       121.26469,
  //       31.18289
  //     ],
  //     "phone": "158955454",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59ed6fdf8b0b3516d588c5ce"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59ed6fdf8b0b3516d588c5cd"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59ed6fdf8b0b3516d588c5cc"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 498,
  //     "rating_count": 497,
  //     "rating": 4.4,
  //     "promotion_info": "大家圣诞节",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "05:45/06:00"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15f477cfaa88921.JPG",
  //       "business_license_image": "15f477d08938920.JPG"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f477ce2888919.JPG",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "23.9公里",
  //     "order_lead_time": "1小时5分钟",
  //     "description": "倒计时家电家具",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59ed6fdf8b0b3516d588c5cf"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "111111111",
  //     "address": "广东省深圳市南山区 ",
  //     "id": 1686,
  //     "latitude": 22.49763,
  //     "longitude": 113.906,
  //     "location": [
  //       113.906,
  //       22.49763
  //     ],
  //     "phone": "11111111111",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59ed707d8b0b3516d588c89c"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59ed707d8b0b3516d588c89b"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59ed707d8b0b3516d588c89a"
  //       }
  //     ],
  //     "status": 0,
  //     "recent_order_num": 98,
  //     "rating_count": 153,
  //     "rating": 4.5,
  //     "promotion_info": "1111111111",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15f477f5d778924.jpg",
  //       "business_license_image": "15f477f5a188923.jpg"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f477f56de8922.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1407.7公里",
  //     "order_lead_time": "21小时18分钟",
  //     "description": "111111111111",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59ed707d8b0b3516d588c89d"
  //       }
  //     ],
  //     "__v": 0
  //   },
  //   {
  //     "name": "1111",
  //     "address": "广东省深圳市南山区 ",
  //     "id": 1687,
  //     "latitude": 22.49763,
  //     "longitude": 113.906,
  //     "location": [
  //       113.906,
  //       22.49763
  //     ],
  //     "phone": "11111",
  //     "category": "快餐便当/简餐",
  //     "supports": [
  //       {
  //         "description": "已加入“外卖保”计划，食品安全有保障",
  //         "icon_color": "999999",
  //         "icon_name": "保",
  //         "id": 7,
  //         "name": "外卖保",
  //         "_id": "59ed87998b0b3516d588f2f7"
  //       },
  //       {
  //         "description": "准时必达，超时秒赔",
  //         "icon_color": "57A9FF",
  //         "icon_name": "准",
  //         "id": 9,
  //         "name": "准时达",
  //         "_id": "59ed87998b0b3516d588f2f6"
  //       },
  //       {
  //         "description": "该商家支持开发票，请在下单时填写好发票抬头",
  //         "icon_color": "999999",
  //         "icon_name": "票",
  //         "id": 4,
  //         "name": "开发票",
  //         "_id": "59ed87998b0b3516d588f2f5"
  //       }
  //     ],
  //     "status": 1,
  //     "recent_order_num": 821,
  //     "rating_count": 837,
  //     "rating": 4.4,
  //     "promotion_info": "1111",
  //     "piecewise_agent_fee": {
  //       "tips": "配送费约¥5"
  //     },
  //     "opening_hours": [
  //       "8:30/20:30"
  //     ],
  //     "license": {
  //       "catering_service_license_image": "15f47d9ba588932.jpg",
  //       "business_license_image": "15f47d9ad998931.jpg"
  //     },
  //     "is_new": true,
  //     "is_premium": true,
  //     "image_path": "15f47d996a38930.jpg",
  //     "identification": {
  //       "registered_number": "",
  //       "registered_address": "",
  //       "operation_period": "",
  //       "licenses_scope": "",
  //       "licenses_number": "",
  //       "licenses_date": "",
  //       "legal_person": "",
  //       "identificate_date": null,
  //       "identificate_agency": "",
  //       "company_name": ""
  //     },
  //     "float_minimum_order_amount": 20,
  //     "float_delivery_fee": 5,
  //     "distance": "1407.7公里",
  //     "order_lead_time": "21小时18分钟",
  //     "description": "111111111",
  //     "delivery_mode": {
  //       "color": "57A9FF",
  //       "id": 1,
  //       "is_solid": true,
  //       "text": "蜂鸟专送"
  //     },
  //     "activities": [
  //       {
  //         "icon_name": "减",
  //         "name": "满减优惠",
  //         "description": "满30减5，满60减8",
  //         "icon_color": "f07373",
  //         "id": 1,
  //         "_id": "59ed87998b0b3516d588f2f8"
  //       }
  //     ],
  //     "__v": 0
  //   }
  // ];
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
