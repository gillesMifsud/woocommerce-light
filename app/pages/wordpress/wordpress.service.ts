import {Page, NavController} from 'ionic-angular';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


export class WordpressService {

private _http;

    constructor(@Inject(Http) http: Http) {
        this._http = http;
    }

    getPosts() {
        var url = 'https://dev.luence.fr/wp-json/wp/v2/posts';
        return this._http.get(url).map(res => res.json());
    }
}
