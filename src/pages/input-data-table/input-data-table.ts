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
  data = {
	  ECValue: 				0,
	  sizeTank: 			0,
	  dilutionFactor: 		0,
	  substrate: 			"",
	  acidChoise: 			"",
	  acidConcentration: 	0,
	  acidDensity: 		 	0,
	  calciumChlorideSource:    		"",
	  calciumChlorideConcentration:   	0,
	  calciumChlorideDensity:   		0,
	  calciumNitrateSource:     		0,
	  calciumNitrateConcentration: 		0,
	  calciumNitrateDensity: 			0,
	  ironChelateSource:    			"",
	  ironChelateConcentration:    		0
	};

  constructor(public navCtrl: NavController) {
  	

  }

  addWaterAnalysis() {
    this.navCtrl.push(AddWaterAnalysis);
  }

  logForm() {
    console.log(this.data);
  }

}
