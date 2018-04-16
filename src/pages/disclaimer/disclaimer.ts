import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { DisclaimerProvider } from '../../providers/disclaimer';
import { SplitPaneProvider } from '../../providers/splitPane';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-disclaimer',
  templateUrl: 'disclaimer.html'
})
export class Disclaimer {
    constructor(public navCtrl: NavController, public discProvider : DisclaimerProvider,
    public splitPaneProvider: SplitPaneProvider) {


    splitPaneProvider.setShow(false);


  this.discProvider.getDisclaimer()
    .then((value : any) => {
      console.log("get Disclaimer return value");
      let discVal = value;
      if(discVal) {
         console.log("disc true");
         //alert("disc true");
      }else{
         console.log("disc false");
         //alert("disc false");
      }
    })
    .catch((error : any)=> {
      console.log("error constructor Disclaimer. not get Disclaimer");
    });

  }

  login() {

  	this.discProvider.storageDisclaimer(true);
    this.navCtrl.setRoot(LoginPage);
  }

  

}
