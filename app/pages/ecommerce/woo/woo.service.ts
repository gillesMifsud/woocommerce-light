import {Page, NavController} from 'ionic-angular';
import { Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class WooService {

    private _url = 'https://dev.luence.fr/wc-api/v3/';
    private _ck = 'ck_f9b777ce7d2800b5a392d1823a6b8f6a1364a8bc';
    private _cs = 'cs_6db21e5a27d27a8044c6d932cd5cf220b34d36f4';

    urlBase= '?consumer_key='+this._ck+'&consumer_secret='+this._cs;
    products = 'products';

    constructor (private _http: Http) {}

    getProducts() : Observable<any> {
        let headers = new Headers();
        return this._http.get(this._url+this.products+this.urlBase, {
          headers : headers
        }).map(res => res.json().products);
    }

}
