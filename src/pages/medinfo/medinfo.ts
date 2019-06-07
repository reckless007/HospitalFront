import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AdvancePage } from '../advance/advance';

/**
 * Generated class for the MedinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medinfo',
  templateUrl: 'medinfo.html',
})
export class MedinfoPage {

  public myInput :any;
  public item :any=[];
  public res :any=[];
  public resk :any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http) {
  }


  getdata(){  
    this.http.get('http://localhost:3000/getUsera').subscribe(data => {
      this.item=data.json();
      console.log(this.item);

      for(let i=0;i<this.item.length;i++)
      {
      if(this.item[i].SPEC == this.myInput)
      {
        console.log(this.item[i]);
          this.res.push({
            Name :this.item[i].DCONAME,
            Year :this.item[i].YOE,
            Spec :this.item[i].SPEC,
           

          })
        }  
    }
});
}

child(){
  this.http.get('http://localhost:3000/getchild').subscribe(data => {
    this.item=data.json();
   

    for(let i=0;i<this.item.length;i++)
    {
  
     
        this.resk.push({
          Name :this.item[i].NAME,
          Year :this.item[i].YOE,
          Spec :this.item[i].SPEC,  
        })  
       
  }
  this.navCtrl.push(AdvancePage,{resk:this.resk}) 
});

}
skin(){
  this.http.get('http://localhost:3000/getskin').subscribe(data => {
    this.item=data.json();
 

    for(let i=0;i<this.item.length;i++)
    {
  
     
        this.resk.push({
          Name :this.item[i].NAME,
          Year :this.item[i].YOE,
          Spec :this.item[i].SPEC,
         

        })
       
  }
  this.navCtrl.push(AdvancePage,{resk:this.resk})
});

}
eyes(){
  this.http.get('http://localhost:3000/geteyes').subscribe(data => {
    this.item=data.json();
    

    for(let i=0;i<this.item.length;i++)
    {

    
        this.resk.push({
          Name :this.item[i].NAME,
          Year :this.item[i].YOE,
          Spec :this.item[i].SPEC,
         

        })
       
  }
  this.navCtrl.push(AdvancePage,{resk:this.resk})
});

}
heart(){
  this.http.get('http://localhost:3000/getheart').subscribe(data => {
    this.item=data.json();
    

    for(let i=0;i<this.item.length;i++)
    {
 
      
        this.resk.push({
          Name :this.item[i].NAME,
          Year :this.item[i].YOE,
          Spec :this.item[i].SPEC,
         

        })
       
  }
  this.navCtrl.push(AdvancePage,{resk:this.resk})
});

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MedinfoPage');
  }

}
