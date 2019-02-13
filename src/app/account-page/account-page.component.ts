import { Component } from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpService} from '../account-page/HttpService';
import {Router} from '@angular/router';
@Component({
    selector: 'app-account-page',
    templateUrl: './account-page.component.html',
    styleUrls: ['./account-page.component.css'],
    providers: [HttpService]
})
export class AccountPageComponent {
  constructor(public globalService: GlobalService, public router: Router, private httpService: HttpService) {}
  userAcc = this.globalService.userAcc;
  errorConnection = false;
  delete(userAcc) {
    this.httpService.postData(userAcc)
        .subscribe(
            (data: any) => {
                this.router.navigate(['/login']);
                this.globalService.errorLogin = true;
            },
            error => {
              this.errorConnection = true;
              console.log(error);
            }
        );
  }
}
