import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators,AbstractControl} from '@angular/forms';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  formgroup:FormGroup;
  cname:AbstractControl;
  mail:AbstractControl;
  eage:AbstractControl;
  pass:AbstractControl;
  num:AbstractControl;
  bg:AbstractControl;
  add:AbstractControl;
  pm:AbstractControl;
  gen:AbstractControl;

  public name1 :any;
  public pass1 :any;
  public email1 :any;
  public age :any;
  public pm1 :any;
  public gen1 :any;
  public add1 :any;
  public bg1 :any;
  public num2 :any;



  constructor(public navCtrl: NavController,public formbuilder :FormBuilder, public navParams: NavParams,private http: Http) {
    this.formgroup=this.formbuilder.group({
      cname:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
      bg:['',Validators.compose([Validators.required])],
      add:['',Validators.compose([Validators.required])],
      pm:['',Validators.compose([Validators.required,])],
      gen:['',Validators.compose([Validators.required,])],
      eage:['',Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      mail:['',Validators.compose([Validators.required,Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')])],
      pass:['',Validators.compose([Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]*')])],
      num:['',Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)])],
     
    });
    this.cname=this.formgroup.controls['cname'];
    this.eage=this.formgroup.controls['eage'];
    this.mail=this.formgroup.controls['mail'];
    this.pass=this.formgroup.controls['pass'];
    this.num=this.formgroup.controls['num'];
    this.bg=this.formgroup.controls['bg'];
    this.add=this.formgroup.controls['add'];
    this.pm=this.formgroup.controls['pm'];
    this.gen=this.formgroup.controls['gen'];
  
  }

  insertdata(){

    let Data = {
      pass1:this.pass1,
      email1:this.email1,
      name1:this.name1,
      pm1:this.pm1,
      gen1:this.gen1,
      add1:this.add1,
      bg1:this.bg1,
      num2:this.num2,
      age:this.age,
     }
     this.http.post('http://localhost:3000/add', Data).subscribe(response => {
      console.log('POST Response:', response);
  
  });
    this.navCtrl.push(HomePage);
    alert('Registration Confirmed');
     
   
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
