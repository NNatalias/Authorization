import { Component } from '@angular/core';
import {GlobalService} from '../global.service';
@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent {
  constructor(public globalService: GlobalService ) {}
  userAcc = this.globalService.userAcc;
}
