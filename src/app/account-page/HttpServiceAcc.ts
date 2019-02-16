import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpServiceAcc {

    constructor(private http: HttpClient) { }

    deleteData( userAcc ) {
        const body = {email: userAcc.email};
        return this.http.post('http://1435247.mysitesi.web.hosting-test.net/phpservice/deleteuser.php', body);
    }
}
