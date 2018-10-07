import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/ecommerce/woodetail/woodetail.html',
})
export class WoodetailPage {
  selectedItem: any;
  quantity: number = 1;

  constructor(public nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('obj');
  }

  addQuantity() {
    this.quantity++;
  }

  minusQuantity() {
    if(this.quantity > 1){
      this.quantity--;
    }
  }

}
