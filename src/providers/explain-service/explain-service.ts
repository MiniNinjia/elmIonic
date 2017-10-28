import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';
import {GlobleServiceProvider} from '../globle-service/globle-service'
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ExplainServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExplainServiceProvider {
  _url = this.glo.serverUrl;

  constructor(  private http:HttpClient,
                public glo: GlobleServiceProvider) {
    console.log('Hello ExplainServiceProvider Provider');
  }
  getAllExplain():Promise<any>{
    return this.http.get(this._url+'/V3/profile/explain').toPromise().then((data)=> data)

  }
}
