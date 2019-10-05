import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { ProfixPage } from '../profix/profix';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ProfixPage;
  tab3Root = AboutPage;
}
