import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController } from 'ionic-angular';
import { RestProvider } from '../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  payload={
    userName:"",
    password:""
    }
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public RePr:RestProvider,public toast:ToastController) { }

getuserdetails() {
  console.log(this.payload);
  var url="http://localhost:3000/itdept/api/login";
 this.RePr.Logindetails(url,this.payload)
      .subscribe(data => {
          console.log(data);

          if(data.Status==200)
          {
           this.navCtrl.setRoot('TabsPage');
          }
          else
          {
              this.toast.create({message:`opps! userName and password did not matched`,duration:3000}).present();
          }
         })
   
}

}
