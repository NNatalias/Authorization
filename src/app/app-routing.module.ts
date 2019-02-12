import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AccountPageComponent} from './account-page/account-page.component';
import {AuthGuard} from './login/auth.guard';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountPageComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
