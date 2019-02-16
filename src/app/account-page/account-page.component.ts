import { Component } from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpServiceAcc} from './HttpServiceAcc';
import {Router} from '@angular/router';
@Component({
    selector: 'app-account-page',
    templateUrl: './account-page.component.html',
    styleUrls: ['./account-page.component.css'],
    providers: [HttpServiceAcc]
})
export class AccountPageComponent {
  constructor(public globalService: GlobalService, public router: Router, private httpService: HttpServiceAcc) {}
  userAcc = this.globalService.userAcc;
  errorConnection = false;
  delete(userAcc) {
    this.httpService.deleteData(userAcc)
        .subscribe(
            (data: any) => {
                this.router.navigate(['/login']);
                this.globalService.errorLoginRouting = true;
            },
            error => {
              this.errorConnection = true;
              console.log(error);
            }
        );
  }
}
