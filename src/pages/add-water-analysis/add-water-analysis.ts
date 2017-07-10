import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
 @Component({
 	selector: 'page-add-water-analysis',
 	templateUrl: 'add-water-analysis.html'
 })
 export class AddWaterAnalysis {
 	units = [
 	{
 		id: "mgl",
 		name: "mg/l"
 	},
 	{
 		id:"mmoll",
 		name:"mmol/l"
 	}
 	];
 	equivalents = {
 		verbose:    "mmol/l",
 		id:			"mmoll"
 	};
 	inputs = {
 		nnh4: 		0.00,
 		nno3: 		0.00,
 		p: 			0.00,
 		k: 			0.00,
 		ca: 		0.00,
 		mg: 		0.00,
 		na: 		0.00,
 		cl: 		0.00,
 		sso4: 		0.00,
 		fe: 		0.00,
 		mn: 		0.00,
 		zn: 		0.00,
 		cu: 		0.00,
 		b: 			0.00,
 		mo: 		0.00,
 		hco3: 		0.00
 	}
 	data = {
 		unit: "mgl",
 		balance: 0.00,
 		nnh4: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		nno3: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		p: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		k: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		ca: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		mg: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		na: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		cl: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		sso4: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		fe: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umol: 0.00
 		},
 		mn: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umol: 0.00
 		},
 		zn: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umol: 0.00
 		},
 		cu: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umol: 0.00
 		},
 		b: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umol: 0.00
 		},
 		mo: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umol: 0.00
 		},
 		hco3: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		ph: 0.00,
 		ec: 0.00
 	}
 	constructor(public navCtrl: NavController) { }

 	login() {
 		this.navCtrl.push(LoginPage);
 	}

 	signup() {
 		this.navCtrl.push(SignupPage);
 	}

 	changeEquivalents(){
 		console.log("changeEquivalents");
 		if (this.data.unit == "mgl") {
 			console.log("true mgl");
 			this.equivalents.verbose = 	"mmol/l";
 			this.equivalents.id 	 = 	"mmoll";
 		}else{
 			console.log("true mmoll");
 			this.equivalents.verbose = 	"mg/l";
 			this.equivalents.id 	 = 	"mgl";
 		}

 		this.changeB();
 		this.changeCa();
 		this.changeCl();
 		this.changeCu();
 		this.changeFe();
 		this.changeHco3();
 		this.changeK();
 		this.changeMg();
 		this.changeMn();
 		this.changeMo();
 		this.changeNa();
 		this.changeNnh4();
 		this.changeNno3();
 		this.changeP();
 		this.changeSso4();
 		this.changeZn();
 	}
 	convertToUnit(value){
 		console.log("convertToUnit");
 		var valueObj ={
 			mgl: 	0.00,
 			mmoll: 	0.00
 		};

 		if (this.data.unit == "mgl") {
 			console.log("true mgl");
 			valueObj.mmoll 	= value / 50;
 			valueObj.mgl 	= value;
 		}else{
 			console.log("true mmoll");
 			valueObj.mmoll 	= value;
 			valueObj.mgl 	= value * 50;	
 		}
 		return valueObj;
 	}
 	changeNnh4(){
 		console.log("changeNnh4");
 		if (this.inputs.nnh4 != 0) {
 			this.data.nnh4 = this.convertToUnit(this.inputs.nnh4);
 		}
 	};
 	changeNno3(){
 		console.log("changeNno3");
 		if (this.inputs.nno3 != 0) {
 			this.data.nno3 = this.convertToUnit(this.inputs.nno3);
 		}
 	};
 	changeP(){
 		console.log("changeP");
 		if (this.inputs.p != 0) {
 			this.data.p = this.convertToUnit(this.inputs.p);
 		}
 	};
 	changeK(){
 		console.log("changeK");
 		if (this.inputs.k != 0) {
 			this.data.k = this.convertToUnit(this.inputs.k);
 		}
 	};
 	changeCa(){
 		console.log("changeCa");
 		if (this.inputs.ca != 0) {
 			this.data.ca = this.convertToUnit(this.inputs.ca);
 		}
 	};
 	changeMg(){
 		console.log("changeMg");
 		if (this.inputs.mg != 0) {
 			this.data.mg = this.convertToUnit(this.inputs.mg);
 		}
 	};
 	changeNa(){
 		console.log("changeNa");
 		if (this.inputs.na != 0) {
 			this.data.na = this.convertToUnit(this.inputs.na);
 		}
 	};
 	changeCl(){
 		console.log("changeCl");
 		if (this.inputs.cl != 0) {
 			this.data.cl = this.convertToUnit(this.inputs.cl);
 		}
 	};
 	changeSso4(){
 		console.log("changeSso4");
 		if (this.inputs.sso4 != 0) {
 			this.data.sso4 = this.convertToUnit(this.inputs.sso4);
 		}
 	};
 	changeFe(){
 		console.log("changeFe");
 		if (this.inputs.fe != 0) {
 			var dataWithUmol = {
 				mgl: 	0,
 				mmoll: 	0,
 				umol: 	0
 			};
 			var auxConvert 		= this.convertToUnit(this.inputs.fe);
 			dataWithUmol.mgl 	= auxConvert.mgl;
 			dataWithUmol.mmoll 	= auxConvert.mmoll;
 			dataWithUmol.umol 	= 0;
 			this.data.fe = dataWithUmol;

 		}
 	};
 	changeMn(){
 		console.log("changeMn");
 		if (this.inputs.mn != 0) {
 			var dataWithUmol = {
 				mgl: 	0,
 				mmoll: 	0,
 				umol: 	0
 			};
 			var auxConvert 		= this.convertToUnit(this.inputs.mn);
 			dataWithUmol.mgl 	= auxConvert.mgl;
 			dataWithUmol.mmoll 	= auxConvert.mmoll;
 			dataWithUmol.umol 	= 0;
 			this.data.mn = dataWithUmol;

 		}
 	};
 	changeZn(){
 		console.log("changeZn");
 		if (this.inputs.zn != 0) {
 			var dataWithUmol = {
 				mgl: 	0,
 				mmoll: 	0,
 				umol: 	0
 			};
 			var auxConvert 		= this.convertToUnit(this.inputs.zn);
 			dataWithUmol.mgl 	= auxConvert.mgl;
 			dataWithUmol.mmoll 	= auxConvert.mmoll;
 			dataWithUmol.umol 	= 0;
 			this.data.zn = dataWithUmol;

 		}
 	};
 	changeCu(){
 		console.log("changeCu");
 		if (this.inputs.cu != 0) {
 			var dataWithUmol = {
 				mgl: 	0,
 				mmoll: 	0,
 				umol: 	0
 			};
 			var auxConvert 		= this.convertToUnit(this.inputs.cu);
 			dataWithUmol.mgl 	= auxConvert.mgl;
 			dataWithUmol.mmoll 	= auxConvert.mmoll;
 			dataWithUmol.umol 	= 0;
 			this.data.cu = dataWithUmol;

 		}
 	};
 	changeB(){
 		console.log("changeB");
 		if (this.inputs.b != 0) {
 			var dataWithUmol = {
 				mgl: 	0,
 				mmoll: 	0,
 				umol: 	0
 			};
 			var auxConvert 		= this.convertToUnit(this.inputs.b);
 			dataWithUmol.mgl 	= auxConvert.mgl;
 			dataWithUmol.mmoll 	= auxConvert.mmoll;
 			dataWithUmol.umol 	= 0;
 			this.data.b = dataWithUmol;

 		}
 	};
 	changeMo(){
 		console.log("changeMo");
 		if (this.inputs.mo != 0) {
 			var dataWithUmol = {
 				mgl: 	0,
 				mmoll: 	0,
 				umol: 	0
 			};
 			var auxConvert 		= this.convertToUnit(this.inputs.mo);
 			dataWithUmol.mgl 	= auxConvert.mgl;
 			dataWithUmol.mmoll 	= auxConvert.mmoll;
 			dataWithUmol.umol 	= 0;
 			this.data.mo = dataWithUmol;

 		}
 	};
 	changeHco3(){
 		console.log("changeNnh4");
 		if (this.inputs.nnh4 != 0) {
 			this.data.nnh4 = this.convertToUnit(this.inputs.nnh4);
 		}
 	};
 }
