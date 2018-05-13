import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeviceMotion } from '@ionic-native/device-motion';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AdMobFree } from '@ionic-native/admob-free';
import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { IntroPage } from '../pages/intro/intro';
import { IonicSwipeAllModule } from 'ionic-swipe-all';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicSwipeAllModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeechRecognition,
    DeviceMotion
  ]
})
export class AppModule {}
