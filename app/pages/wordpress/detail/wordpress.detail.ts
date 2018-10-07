import {Page, NavController, NavParams} from 'ionic-angular';
import {Inject, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {WordpressService} from './../wordpress.service';
import {DateString} from '../../../pipes/date.pipe';

@Page({
  templateUrl: 'build/pages/wordpress/detail/wordpress.detail.html',
  providers: [WordpressService],
  pipes: [DateString]
})

export class WordpressDetail{
  obj: any;
  constructor(private nav: NavController, navParams: NavParams) {
    this.obj = navParams.get('obj');
  }
}
