import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    postData( userAcc ) {
        const body = {email: userAcc.email};
        return this.http.post('http://phpservice/deleteuser.php', body);
    }
}
