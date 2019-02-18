import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class HttpServiceLogin {

    constructor(private http: HttpClient) { }

    postData( user) {

        const body = {email: user.email, password: user.password};
        return this.http.post('http://mysitesite.icu/phpservice/loginusers.php', body);
    }
}
