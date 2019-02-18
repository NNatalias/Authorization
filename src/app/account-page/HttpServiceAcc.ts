import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpServiceAcc {

    constructor(private http: HttpClient) { }

    deleteData( userAcc ) {
        const body = {email: userAcc.email};
        return this.http.post('http://mysitesite.icu/phpservice/deleteuser.php', body);
    }
}
