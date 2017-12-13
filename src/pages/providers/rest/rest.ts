import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  Logindetails(url, data): Observable<any> {
    return this.http.post(url, data)
        .map(res =>{
          return res;
        });
}

getBookedRooms(url,data):Observable<any>{
 return  this.http.post(url,data)
  .map(res=>{
    return res;
  });
}
}

