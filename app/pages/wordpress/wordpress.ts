import {Page, NavController} from 'ionic-angular';
import {Inject, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {WordpressService} from './wordpress.service';
import {DateString} from '../../pipes/date.pipe';
import {WordpressDetail} from './detail/wordpress.detail';

@Page({
  templateUrl: 'build/pages/wordpress/wordpress.html',
  providers: [WordpressService],
  pipes: [DateString]
})

export class Wordpress implements OnInit{

  response: string;
  private _wordpressService;
  private _nav;
  isLoading = true;

  items: any;

  constructor(public nav: NavController, wordpressService:WordpressService) {
    this._nav = nav;
    this._wordpressService = wordpressService;
  }
  // Load Wordpress
  ngOnInit() {
    this._wordpressService.getPosts()
    .subscribe(
      response => this.response = response,
      error => console.log(error));
      this.isLoading = false;
    }

    toDetail(event, obj) {
      this.nav.push(WordpressDetail, {
        obj: obj
      });
    }
  }
