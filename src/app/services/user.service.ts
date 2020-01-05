import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {IUser} from '../interface/iuser';
import { Observable } from 'rxjs';

const _getUrl : string ='https://jsonplaceholder.typicode.com/users';
const _getUrl1 : string ='https://jsonplaceholder.typicode.com/users/1';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

 /*getUsers() {
    return this.http.get(_getUrl);
  }
  getContacts() :Observable<IUser[]> {
    
    return this.http.get<IUser[]>(_getUrl);   
  }*/

  getUsers():Observable<HttpResponse<IUser[]>>{
    return this.http.get<IUser[]>( _getUrl, { observe: 'response' });
  }
  getUser(id: number):Observable<HttpResponse<IUser>>{
    return this.http.get<IUser>( _getUrl +'/'+ id, { observe: 'response' });
  }
}
