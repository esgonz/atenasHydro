import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddWaterAnalysis } from '../add-water-analysis/add-water-analysis';


/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-input-data-table',
  templateUrl: 'input-data-table.html'
})
export class InputDataTable {

  constructor(public navCtrl: NavController) { }

  addWaterAnalysis() {
    this.navCtrl.push(AddWaterAnalysis);
  }


}
