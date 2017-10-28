import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {GlobleServiceProvider} from '../globle-service/globle-service'
import 'rxjs/add/operator/map';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  _url = this.glo.serverUrl;
  constructor(private http:HttpClient,
              public glo: GlobleServiceProvider) {
    console.log('Hello UserServiceProvider Provider');
  }
  getUsermessage(id){
    return this.http.get(this._url+'/v1/user/'+id).toPromise().then((data)=> data)
  }
  getUseraddress(id){
  return this.http.get(this._url+'v1/user/'+id+'/addresses').toPromise().then((data)=> data)
  }
}
