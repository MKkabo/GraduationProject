import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { NavController,AlertController,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:any;
  password:any;
  constructor(public navCtrl: NavController, public forgotCtrl: AlertController,public toastCtrl: ToastController) {

  }
  
  login()
  {
    if(this.username!="null" && this.password!="null")
    {
      window.localStorage.setItem("loggedIN","true");
      this.navCtrl.setRoot(TabsPage);
    }
    else{
      this.presentToast("Please enter username and password.");
    }

  }

   // go to register page
   register() {
    this.navCtrl.setRoot(RegisterPage);
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }
}
