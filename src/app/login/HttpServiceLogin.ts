import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './login';
@Injectable()
export class HttpServiceLogin {

    constructor(private http: HttpClient) { }

    postData( user: User ) {

        const body = {email: user.email, password: user.password};
        return this.http.post('http://1435247.mysitesi.web.hosting-test.net/phpservice/loginusers.php', body);
    }
}