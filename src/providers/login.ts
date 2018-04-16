import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class LoginProvider {
  _user: any;
  isNotPanel =  true;
  login = {
             status : false,
             user : null
           };



  constructor(public http: Http, public storage: Storage, public alertCtrl: AlertController, public api: Api) {
    console.log("LoginProvider Constructor");

  }


  newLogin(_email, _password){
    console.log("newLogin");

      let url = this.api.BASE_URL + 'auth/'  + this.api.TOKEN;
      console.log("url: "+ url);
      //alert(url);
     return new Promise((resolve, reject) => {
      this.http.post(url, {email : _email, password : _password})
        .subscribe(res => {
          resolve(res);
          console.log("response: "+ res);
        }, (err) => {
          reject(err);
        });

    })
    
  }

  storageLogin (login){
     this.storage.set('hydroponicUser', login);
  }


  getLogin() {
    return this.storage.get('hydroponicUser').then((value) => {
      if (value) {        
        return value;

      } else {
        return {
                status : false,
                user : null
                };
      }
    });
  }

  logout() {
    this.login = {
             status : false,
             user : null
           };
    this.storageLogin(this.login);
  }

  showAlertLogin(msg) {
    let alert = this.alertCtrl.create({
      title: 'Not login!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

 
}
