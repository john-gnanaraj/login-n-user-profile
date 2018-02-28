import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService, private _profileService: UserProfileService) { }

  items:any;

  ngOnInit() {
    let user = this.authService.userAccessToken();
    console.log(user);

    let param1 = localStorage.getItem('userToken');
    let param2 = localStorage.getItem('userId');
    console.log("param", param1 + param2);
    /*this._profileService.getUser(param1, param2).subscribe( data => {
        console.log(data);
    });*/
    this._profileService.getUser(param1, param2).subscribe(data => this.items = data);
  }

}
