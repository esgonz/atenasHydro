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
  acids =[
	  	{
	  		id: 			"x",
	  		name: 			"Nitric Acid - X%",
			concentration: 		0,
			density: 		 	0
	  	},
	  	{
	  		id: 			"38",
	  		name: 			"Nitric Acid - 38%",
			concentration: 		38,
			density: 		 	1.235
	  	},
	  	{
	  		id: 			"53",
	  		name: 			"Nitric Acid - 53%",
			concentration: 		53,
			density: 		 	1.33
	  	},
	  	{
	  		id: 			"60",
	  		name: 			"Nitric Acid - 60%",
			concentration: 		60,
			density: 		 	1.363
	  	}
	];
	acidChoise = "";

	calciumChlorides =[
	  	{
	  		id: 						"liquid",
	  		name: 					"liquid",
				concentration: 	35,
				density: 		 		1.33
	  	},
	  	{
	  		id: 						"anhydrous",
	  		name: 					"Calcium chloride anhydrous (solid)",
				concentration: 	63.9,
				density: 		 		"N.A."
	  	},
	  	{
	  		id: 						"dihydrate",
	  		name: 					"Calcium chloride dihydrate (solid)",
				concentration: 	48.3,
				density: 		 		"N.A."
	  	}
	];
	calciumChlorideChoise = "";

  data = {
	  ECValue: 					1.5,
	  sizeTank: 				1000,
	  dilutionFactor: 	100,
	  substrate: 				"",
		acidSource: 			{
												id: 						"",
												name: 					"",
												concentration: 	0.0,
												density: 		 		null
											},
		calciumChlorideSource:		{
													  		id: 						"",
													  		name: 					"",
																concentration: 	0.0,
																density: 		 		null
													  	},
	  calciumChlorideDensity:   0,
	  calciumNitrateSource:     0,
	  calciumNitrateConcentration: 	0,
	  calciumNitrateDensity: 				0,
	  ironChelateSource:    				"",
	  ironChelateConcentration:    	0
	};

  constructor(public navCtrl: NavController) {
  	

  }

  addWaterAnalysis() {
    this.navCtrl.push(AddWaterAnalysis);
  }

  logForm() {
    console.log(this.data);
  }


  changeAcid(){
  	console.log("acidChoise: " + this.acidChoise);
  	
  	for (var i = 0; i< this.acids.length; i++) {
  		console.log("acid ID: " + this.acids[i].id);
  		if (this.acids[i].id == this.acidChoise.toString()){
  			console.log("true");
  			this.data.acidSource = this.acids[i];
  			console.log(this.data.acidSource);
  		}
  	}
  }

  changeCalciumChloride(){
  	console.log("calciumChlorideChoise: " + this.calciumChlorideChoise);
  	
  	for (var i = 0; i< this.calciumChlorides.length; i++) {
  		console.log("acid ID: " + this.calciumChlorides[i].id);
  		if (this.calciumChlorides[i].id == this.calciumChlorideChoise.toString()){
  			console.log("true");
  			this.data.calciumChlorideSource = this.calciumChlorides[i];
  			console.log(this.data.calciumChlorideSource);
  		}
  	}
  }
  changeCalciumNitatre(CaNO32){

  }

  changeIronChelate(fed){

  }
  f(data){
  	alert(data);
  	this.data.ECValue =3.5;
  }
}
