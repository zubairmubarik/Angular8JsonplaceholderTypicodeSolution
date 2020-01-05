import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interface/iuser';

/* @Component <>
*  selector <>
*  templateUrl <>
*  styleUrls <>
**/
@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

public users: IUser[] = [];
headers: any;
//public users: IUser[];
  constructor(private _userService : UserService) { }

  ngOnInit() {
    //this.getContacts();
    this.getUsers();
  }

  /*getContacts()
  {
    let that = this;

    that._userService.getContacts()
      .subscribe(result => { that.users = result as any;},        
      error => console.error(error));  
  }

getUsers(){
  this._userService.getUsers()
  .subscribe(data => {
    for (const d of (data as any)) {
      this.users.push({
     
        id: d.id,
        name: d.name,
        username: d.username,
        email: d.email,
      });
    }   
  });*/
  getUsers() {
    this._userService.getUsers()
    .subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
  
      for (const data of resp.body) {
        this.users.push(data);
      }
      console.log(this.users);
    });
  }
 
}
  


