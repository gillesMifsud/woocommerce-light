import {Page, NavController, Slides} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/gallery/gallery.html'
})
export class Gallery {

  constructor(public nav: NavController) {
    this.nav = nav;
  }

  mySlideOptions = {
      initialSlide: 0,
      loop: true
    };
}
