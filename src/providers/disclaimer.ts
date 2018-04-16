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
export class DisclaimerProvider {

  constructor(public http: Http, public storage: Storage, public alertCtrl: AlertController) {
    console.log("DisclaimerProvider Constructor");
  }

  storageDisclaimer (val){
     this.storage.set('hydroponicDisclaimer', val);
  }

  getDisclaimer() {
    return this.storage.get('hydroponicDisclaimer').then((value) => {
      if (value) {        
        return value;

      } else {
        return false;
      }
    });
  }
}
