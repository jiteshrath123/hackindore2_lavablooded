import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  settingsPage: any = SettingPage;
  loginPage: any = LoginPage;
  signupPage: any = SignupPage;
  isAuthenticate = false;
  profilePage = ProfilePage;
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private storage: Storage
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp({
      apiKey: 'AIzaSyCeIs86FdfMP1xMzxNer4HIZVPSQRO0pGs',
      authDomain: 'hackindore-7768e.firebaseapp.com',
      databaseURL: 'https://hackindore-7768e.firebaseio.com',
      projectId: 'hackindore-7768e',
      storageBucket: '',
      messagingSenderId: '92133335166',
      appId: '1:92133335166:web:152c3cff1517b48421f82f',
      measurementId: 'G-6Q4RNVLQ5N'
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticate = true;
        this.nav.setRoot(this.tabsPage);
      } else {
        this.isAuthenticate = false;
        this.nav.setRoot(this.loginPage);
      }
    });
  }
  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
  }
}
