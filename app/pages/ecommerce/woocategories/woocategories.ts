import {Page, NavController, Toast} from 'ionic-angular';
import {OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import {WooCategoriesService} from './woocategories.service';
import {WooPage} from '../woo/woo';

@Page({
  templateUrl: 'build/pages/ecommerce/woocategories/woocategories.html',
  providers: [WooCategoriesService]
})

export class WoocategoriesPage implements OnInit{
  category: any;
  response: string;
  isLoading = true;
  totalItems: number = null;

  constructor(
    public nav: NavController,
    public woocategoriesService: WooCategoriesService)
    {
      this.nav = nav;
    }

  ngOnInit() {
    this.woocategoriesService.getCategories()
    .subscribe(
        response => this.response = response,
        error => console.log(error));
        this.isLoading = false;
  }

  viewProdutsFromCat($event, categoryId) {
    this.nav.push(WooPage,
      {
        categoryId: categoryId
      }
    );
  }

  goToWooPage() {
    this.nav.push(WooPage);
  }

}
