import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserNew} from './regform';
@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }
    postData(userNew: UserNew) {
        const body = {firstName: userNew.firstName, lastName: userNew.lastName, phone: userNew.phone, email: userNew.email, password: userNew.password, country: userNew.country, city: userNew.city};
        return this.http.post('http://phpservice/addusers.php', body);
    }
}
