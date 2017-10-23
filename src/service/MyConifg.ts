/**
 * Created by Administrator on 2017/10/23.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class MyConifg {
  serverUrl = 'http://cangdu.org:8001';
  uploadUrl = 'http://images.cangdu.org';
  constructor() {
  }
}
