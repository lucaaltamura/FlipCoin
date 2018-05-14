import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, public admob: AdMobFree) {

  }

  ionViewWillEnter() {
    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: false, // Remove in production
      autoShow: true,
      id: "ca-app-pub-2343597050706306/2593956753"
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
      // success
    }).catch(e => console.log(e));
  }

  flipCoin() {

    function AnimateRotate(angle, duration, easing?, complete?) {
      $({ deg: 0 }).animate({ deg: angle }, {
        duration: duration,
        easing: easing,
        step: function (now, fx) {
          $("#coin").css({
            transform: "rotateX(" + now + "deg)"
          });
        },
        complete: complete || $.noop
      });
    }


    //Funzione per generare un numero casuale tra 0 e 1
    function flip() {
      return Math.floor((Math.random() * 2) + 1);
    }

    //Recupero il numero randomico generato
    var result = flip();

    //Verifico il risultato
    if (result === 1) {
      setTimeout(() => {

        $("#coin").animate({ top: '60%' }, 0);
        AnimateRotate(0, 2000);


        $("#coin").animate({ top: '10%' }, 1000);
        $("#coin").animate({ top: '60%' }, 1000);
        AnimateRotate(180, 2000);
        AnimateRotate(360, 2000);
        AnimateRotate(540, 2000);
        AnimateRotate(720, 2000);
        AnimateRotate(900, 2000);
        AnimateRotate(1080, 2000);
      }, 0);
    }
    else if (result === 2) {
      setTimeout(() => {

        $("#coin").animate({ top: '60%' }, 0);
        AnimateRotate(0, 2000);

        $("#coin").animate({ top: '10%' }, 1000);
        $("#coin").animate({ top: '60%' }, 1000);

        AnimateRotate(180, 2000);
        AnimateRotate(360, 2000);
        AnimateRotate(540, 2000);
        AnimateRotate(720, 2000);
        AnimateRotate(900, 2000);
      }, 0);
    }
  }

  //Funzione per gestire lo swipe up
  swipeUp(event) {

    console.log(event);
    if (event.direction === 8) {
      this.flipCoin();
    }
  }
}
