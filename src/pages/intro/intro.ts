import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides = [
    {
      title: "Welcome to Head or Tails!",
      image: "imgs/icon.png",
    },
    {
      title: "How to flip?",
      description: "You can simply tap or swipe up the coin :)",
      image: "imgs/icon.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

}
