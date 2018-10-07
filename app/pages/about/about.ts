import {Page, NavController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/about/about.html',
})
export class AboutPage {

  static get parameters(){
    return [[NavController]];
  }

  constructor(public nav: NavController) {
    this.nav = nav;
  }
}
