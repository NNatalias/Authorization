import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './login';
@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    postData( user: User ) {

        const body = {login: user.login, password: user.password};
        return this.http.post('http://phpservice/loginusers.php', body);
    }
}
