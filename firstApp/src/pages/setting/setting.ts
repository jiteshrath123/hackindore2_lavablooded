import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  constructor() {}
  onToggle(toggle: Toggle) {
    console.log(toggle);
  }
}
