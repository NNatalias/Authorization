import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {User} from './login';
import {HttpServiceLogin} from './HttpServiceLogin';
import {GlobalService} from '../global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpServiceLogin]
})
export class LoginComponent  {
    constructor(private httpService: HttpServiceLogin, public globalService: GlobalService, public router: Router) {}
    errorData = false;
    errorConnection = false;
    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);
    user: User = new User();
  submit(user: User) {
      this.httpService.postData(user)
          .subscribe(
              (data: any) => {
                  this.globalService.userAcc = data;
                  if (this.globalService.userAcc.id > 0 ) {
                      this.globalService.errorLoginRouting = false;
                      this.router.navigate(['account']);
                  } else {
                      this.globalService.errorLoginRouting = true;
                      this.errorData = true;
                  }
              },
              error => {
                  this.globalService.errorLoginRouting = true;
                  this.errorConnection = true;
                  console.log(error);
              }
          );
  }
}
