import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interface/iuser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user: IUser;
  headers: any;
  userId: number;
 

  constructor(private _userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Called Constructor');
    this.userId = this.route.snapshot.params['id'];
    console.log(this.userId);
    this.getUser(this.userId);
  }


  getUser(id: number) {
    this._userService.getUser(id)
      .subscribe(resp => {
        console.log(resp);
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        this.user = resp.body;

        console.log(this.user);
      });
  }
}
