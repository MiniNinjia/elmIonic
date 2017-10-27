import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ExplainServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExplainServiceProvider {
  url:string='http://cangdu.org:8001/v3/profile/explain';

  constructor(  private http:HttpClient) {
    console.log('Hello ExplainServiceProvider Provider');
  }



  getAllExplain():Promise<any>{
    return this.http.get(this.url).toPromise().then((data)=> data)

  }
}
