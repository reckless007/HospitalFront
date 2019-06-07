import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdvancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advance',
  templateUrl: 'advance.html',
})
export class AdvancePage {
 
  public ress :any=[];
  public item :any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.get('resk');

    for(let i=0;i<this.item.length;i++)
    {
  
      console.log(this.item[i]);
       this.ress.push({
          Name :this.item[i].Name,
          Yoe :this.item[i].Year,
          Spec :this.item[i].Spec,  
        })  
        
  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancePage');
  }

}
