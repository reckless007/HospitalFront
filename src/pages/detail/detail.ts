import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { Http } from '@angular/http';
import { AppointPage } from '../appoint/appoint';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  formgroup:FormGroup;
  cname:AbstractControl;
  mail:AbstractControl;
  num:AbstractControl;
  buttonDisabled

  public name1 :any;
  public email1 :any;
  public num2 :any;

  constructor(public navCtrl: NavController,public formbuilder :FormBuilder, public navParams: NavParams,private http: Http) {
    this.formgroup=this.formbuilder.group({
      cname:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
          mail:['',Validators.compose([Validators.required,Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],
      num:['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)])],
     
    });

    this.cname=this.formgroup.controls['cname'];
    this.mail=this.formgroup.controls['mail'];
    this.num=this.formgroup.controls['num'];

  }
  insertdata(){

    let Data = {
      email1:this.email1,
      name1:this.name1,
      num2:this.num2,
     }
     this.http.post('http://localhost:3000/adds', Data).subscribe(response => {
      console.log('POST Response:', response);
  
  });

    alert('Appointment Booked');
    this.buttonDisabled = true;
    this.navCtrl.push(AppointPage,{buttonDisabled:this.buttonDisabled})
     
   
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
