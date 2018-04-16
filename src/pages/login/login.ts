import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { PagesProvider } from '../../providers/pages';
import { LoginProvider } from '../../providers/login';
import { PreviousList} from '../../pages/previous-list/previous-list';
import { TranslateService } from '@ngx-translate/core';
import { SplitPaneProvider } from '../../providers/splitPane';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@sqm.com',
    password: '****'
  };
  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public loginProvider: LoginProvider,
    public toastCtrl: ToastController,
    private pagesProvider: PagesProvider,
    public splitPaneProvider: SplitPaneProvider) {


    splitPaneProvider.setShow(false);

    /*if(this.loginProvider.login.status) {
      console.log("LOGIN VER TRUE");
      this.setRootPage();
    }else{
      console.log("LOGIN VER false");
    }*/
  }

  // Attempt to login in through our User service
  doLogin() {
    console.log("do login Login Page")
    /*    
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    */
    this.loginProvider.newLogin(this.account.email, this.account.password)
    .then((response : any) => {
      console.log("login give a response");
      console.log(response);
      //if server ok
      if(response.status == 200) {
         console.log("api response");
         var objResponse = JSON.parse (response._body);
         console.log("objResponse", objResponse);

         
         if(objResponse.type === true) {
           console.log("login Ok");

           this.loginProvider.login.status = true,
           this.loginProvider.login.user = objResponse.data
           

           this.loginProvider.storageLogin(this.loginProvider.login);


           //change page
           
          let toast = this.toastCtrl.create({
            message: "Welcome " + this.loginProvider.login.user.name,
            duration: 2000,
            position: 'bottom'
          });
          toast.present();

          this.setRootPage();

         }else{
           console.log('not login : '+ objResponse.data);
           this.loginProvider.showAlertLogin(objResponse.data);
           this.loginProvider.login.status = false,
           this.loginProvider.login.user = {}           
           this.loginProvider.storageLogin(this.loginProvider.login);    
         }
        

      }else{
        console.log("api error. not login");
        this.loginProvider.showAlertLogin("You are not login. Please login with your email and password.");
      }
    })
    .catch(error =>{
      console.log("error login");
      this.loginProvider.showAlertLogin("Sorry, connection failed. Please try again soon.");
      console.error( error );
    })


  }


  setRootPage(){
    console.log("setRootPage");
    var initPage = { title: 'Previous Recommendations', component: PreviousList, iconClass: 'icongrower' };
      this.pagesProvider.add(initPage);
      this.pagesProvider.setActivePage(initPage);
      this.pagesProvider.setRootPage(initPage);
    this.navCtrl.setRoot(initPage.component);
  }
}
