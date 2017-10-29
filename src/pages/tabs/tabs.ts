import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {PersonalPage} from '../personal/personal';

import {LoginPage} from '../login/login';
import {SearchPage} from '../search/search';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab5Root = SearchPage;
  tab3Root = ContactPage;
  tab4Root = PersonalPage;
  local: any;
  @ViewChild('rootTabs') tabRef: any;

  constructor(private navParma: NavParams) {


  }

  ionViewDidEnter() {
    let tabsId =this.navParma.get('tabsId');
    console.log(tabsId)
    tabsId || (tabsId =0);
    console.log(tabsId)
    this.tabRef.select(tabsId);
  }

}
