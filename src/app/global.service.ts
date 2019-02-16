import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  userAcc: UserAcc;
public errorLoginRouting = true;
  constructor() { }
}
export class UserAcc {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  country: string;
  city: string;
  id: number;
}
