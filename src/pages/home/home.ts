import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition) {

  }

  flipCoin() {
    function flip() {
      return Math.floor((Math.random() * 2) + 1);
    }

    document.getElementById("croce").style.display = "inline";
    document.getElementById("testa").style.display = "inline";
    document.getElementById("testa").className = "coin-heads";
    document.getElementById("croce").className = "coin-tails";
    document.getElementById("coin").setAttribute("style", "animation: fly 1.5s ease-in-out 0s infinite alternate");

    var result = flip();
    if(result === 1){
      console.log("TESTA");

      setTimeout(function () 
      {
        document.getElementById("croce").style.display = "none";
        document.getElementById("testa").className = "";
        document.getElementById("croce").className = "";
        document.getElementById("coin").setAttribute("style", "animation: none");
      }, 2900)
    }
    else if(result === 2){
      console.log("CROCE");
      setTimeout(function () 
      {
        document.getElementById("testa").style.display = "none";
        document.getElementById("testa").className = "";
        document.getElementById("croce").className = "";
        document.getElementById("coin").setAttribute("style", "animation: none");
      }, 2900)
    }
  }

}
