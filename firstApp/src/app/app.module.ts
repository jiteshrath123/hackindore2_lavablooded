import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavouritePage } from '../pages/favourite/favourite';
import { LibraryPage } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from '../services/quotes.service';
import { ApiProvider } from '../providers/api/api';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePage } from '../pages/profile/profile';
import { IonicStorageModule } from '@ionic/storage';
import { CheckoutPage } from '../pages/checkout/checkout';
import { MenuPage } from '../pages/menu/menu';
import { AboutPage } from '../pages/about/about';
import { ProfixPage } from '../pages/profix/profix';

@NgModule({
  declarations: [
    MyApp,
    FavouritePage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingPage,
    TabsPage,
    HomePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    CheckoutPage,
    HomePage,
    MenuPage,
    AboutPage,
    ProfixPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavouritePage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingPage,
    TabsPage,
    HomePage,
    LoginPage,
    SignupPage,
    ProfilePage,
    CheckoutPage,
    HomePage,
    MenuPage,
    AboutPage,
    ProfixPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuotesService,
    ApiProvider
  ]
})
export class AppModule {}
