import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition, public admob: AdMobFree) {

  }

  //Funzione per generare un numero casuale tra 0 e 1
  flipCoin() {
    function flip() {
      return Math.floor((Math.random() * 2) + 1);
    }

    //Applico l'animazione del fly
    document.getElementById("coin").setAttribute("style", "animation: fly 2s ease-in-out 0s 1");

    //Recupero il numero randomico generato
    var result = flip();

    //Applico l'animazione
    var coin = document.getElementById("coin");
    var coinAnimation = coin.animate([
      { transform: 'rotateX(0)' },
      { transform: 'rotateX(180deg)' },
      { transform: 'rotateX(360deg)' }
    ], {
        duration: 1000,
        iterations: Infinity
      });

    //Verifico il risultato
    if (result === 1) {
      console.log("TESTA");
      setTimeout(() => { coinAnimation.pause(); }, 2000)
    }
    else if (result === 2) {
	  document.getElementById("coin").setAttribute("style", "animation: fly 2.5s ease-in-out 0s 1");
      console.log("CROCE");
      setTimeout(() => { coinAnimation.pause(); }, 2500)
    }
  }
  
  
  
  
  
  
  

  showBanner() {

    let bannerConfig: AdMobFreeBannerConfig = {
      isTesting: true, // Remove in production
      autoShow: true,
      id: "ca-app-pub-2343597050706306/2593956753"
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare().then(() => {
      // success
    }).catch(e => console.log(e));

  }
}
