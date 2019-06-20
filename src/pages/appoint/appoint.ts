import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the AppointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appoint',
  templateUrl: 'appoint.html',
})
export class AppointPage {
  public item1 :any=[];
  buttonDisabled

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item1=this.navParams.get('ress');
    this.buttonDisabled=this.navParams.get('buttonDisabled')
  }
  info(){
    this.navCtrl.push(DetailPage);
    this.buttonDisabled;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointPage');
  }

}
