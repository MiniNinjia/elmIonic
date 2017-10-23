import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobleServiceProvider {
  serverUrl = 'http://cangdu.org:8001';
  uploadUrl = 'http://images.cangdu.org';
  constructor(public http: Http) {
  }

}
