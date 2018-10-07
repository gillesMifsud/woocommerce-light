import {Page, NavController} from 'ionic-angular';
import {Form} from "../form/form";
import {AboutPage} from '../about/about';


@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class Home {

  private nav;

  constructor(nav: NavController) {
    this.nav = nav;
  }

// Link to page Form
  goToContactPage() {
    this.nav.push(Form);
  }

  goToAboutPage() {
    this.nav.push(AboutPage);
  }
}
