import {Page, NavController, NavParams} from 'ionic-angular';
import {Inject, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {WooService} from './woo.service';
import {WoodetailPage} from '../woodetail/woodetail';

@Page({
  templateUrl: 'build/pages/ecommerce/woo/woo.html',
  providers: [WooService]
})

export class WooPage implements OnInit{
  selectedItem: any;
  response: string;
  isLoading = true;
  private _wooService;

  constructor(public nav:NavController, wooService:WooService, navParams: NavParams) {
    this.nav = nav;
    this._wooService = wooService;

  }

  ngOnInit() {
      this._wooService.getProducts()
      .subscribe(
          response => this.response = response,
          error => console.log(error));
          this.isLoading = false;
  }

  itemTapped(event, obj) {
    this.nav.push(WoodetailPage, {
      obj: obj
    });
  }
}
