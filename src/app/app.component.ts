import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { InputSelectPage } from '../pages/input-select/input-select'

@Component({
  templateUrl: 'app.html' 
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: InputSelectPage }
    ];
    
  }

  openPage(page) {
    this.nav.setRoot(page.component)
  }
  
}
