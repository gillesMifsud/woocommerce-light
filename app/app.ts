import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {Home} from './pages/home/home';
import {Form} from './pages/form/form';
import {Gallery} from './pages/gallery/gallery';
import {ListPage} from './pages/list/list';
import {Wordpress} from './pages/wordpress/wordpress';
import {AboutPage} from "./pages/about/about";
import {WoocategoriesPage} from "./pages/ecommerce/woocategories/woocategories";
import {TopicsPage} from "./pages/quizz/topics";
import {RegisterPage} from './pages/ecommerce/register/register';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any, icon: string}>

  constructor(private platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Accueil', component: Home, icon: 'md-home' },
      { title: 'Compétences', component: ListPage, icon: 'md-list-box' },
      { title: 'Blog', component: Wordpress, icon: 'logo-wordpress' },
      { title: 'Store', component: WoocategoriesPage, icon: 'logo-euro' },
      { title: 'Register / Login', component: RegisterPage, icon: 'md-log-in' },
      { title: 'Quizz', component: TopicsPage, icon: 'md-help-circle' },
      { title: 'Galerie', component: Gallery, icon: 'md-image' },
      { title: 'Contact', component: Form, icon: 'md-mail' },
      { title: 'A Propos', component: AboutPage, icon: 'md-globe' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [], {backButtonText: 'Retour',backButtonIcon: 'ios-arrow-back', iconMode: 'md'});
