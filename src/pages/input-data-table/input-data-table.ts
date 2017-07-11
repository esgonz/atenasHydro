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
 	acidSuggestion = {
 		concentration: 	"",
 		density: 		""
 	};
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
 	calciumChlorideSuggestion = {
 		concentration: 	"",
 		density: 		""
 	};
 	calciumNitrates =[
 	{
 		id: 				"ultrasol calcium",
 		name: 				"Ultrasol Calcium (15.5% N-26% CaO)",
 		concentration: 		"N.A.",
 		density: 			"N.A."
 	},
 	{
 		id:					"liquid calclium nitrate",
 		name:				"Liquid Calcium Nitrate",
 		concentration: 		9,
 		density:			1.465
 	}
 	];
 	calciumNitrateChoise = "";
 	calciumNitrateSuggestion = {
 		concentration: 	"",
 		density: 		""
 	};
 	ironChelates =[
 	{
 		id: 				"fee13",
 		name: 				"Ultrasol micro Rexene FeE13",
 		concentration: 	13
 	},
 	{
 		id:					"fed12",
 		name:				"Ultrasol micro Rexene FeD12",
 		concentration: 	12
 	},
 	{
 		id:					"feq48",
 		name:				"Ultrasol micro Rexene FeQ48",
 		concentration: 	6
 	}
 	];
 	ironChelateChoise = "";
 	ironChelateSuggestion = {
 		concentration: 	"",
 		density: 		""
 	};

 	data = {
 		ECValue: 				1.5,
 		sizeTank: 				1000,
 		dilutionFactor: 		100,
 		substrate: 				"",
 		acidSource: 			{
 			id: 			"",
 			name: 			"",
 			concentration: 	0.0,
 			density: 		null
 		},
 		calciumChlorideSource:	{
 			id: 			"",
 			name:			"",
 			concentration: 	0.0,
 			density: 		null
 		},
 		calciumNitrateSource: {
 			id: 			"",
 			name:			"",
 			concentration: 	null,
 			density: 		null
 		},
 		ironChelateSource:    {
 			id: 			"",
 			name:			"",
 			concentration: 	0.0
 		},
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
 				this.acidSuggestion.concentration = this.acids[i].concentration.toString();
 				this.acidSuggestion.density = this.acids[i].density.toString();
 				return;
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
 				this.calciumChlorideSuggestion.concentration = this.calciumChlorides[i].concentration.toString();
 				this.calciumChlorideSuggestion.density = this.calciumChlorides[i].density.toString();
 				return;
 			}
 		}
 	}
 	changeCalciumNitatre(){
 		console.log("calciumNitrateChoise: " + this.calciumNitrateChoise);

 		for (var i = 0; i< this.calciumNitrates.length; i++) {
 			console.log("calcium nitrate ID: " + this.calciumNitrates[i].id);
 			if (this.calciumNitrates[i].id == this.calciumNitrateChoise.toString()){
 				console.log("true");
 				this.data.calciumNitrateSource = this.calciumNitrates[i];
 				console.log(this.data.calciumChlorideSource);
 				this.calciumNitrateSuggestion.concentration = this.calciumNitrates[i].concentration.toString();
 				this.calciumNitrateSuggestion.density = this.calciumNitrates[i].density.toString();
 				return;
 			}
 		}
 	}

 	changeIronChelate(){
 		console.log("ironChelateChoise: " + this.ironChelateChoise);

 		for (var i = 0; i< this.ironChelates.length; i++) {
 			console.log("iron ID: " + this.ironChelates[i].id);
 			if (this.ironChelates[i].id == this.ironChelateChoise.toString()){
 				console.log("true");
 				this.data.ironChelateSource = this.ironChelates[i];
 				console.log(this.data.ironChelateSource);
 				this.ironChelateSuggestion.concentration = this.ironChelates[i].concentration.toString();
 				return;
 			}
 		}
 	}

 }
