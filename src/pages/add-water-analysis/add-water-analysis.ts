import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InputDataTable } from '../input-data-table/input-data-table';


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
 		text:    "mmol/l",
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
 		hco3: 		0.00,
 		ph: 		0.00,
 		ec: 		0.00
 	}

 	inputsEquivalUnits = {

 		nnh4: 		{id: "mmoll", text: "mmol/l"},
 		nno3: 		{id: "mmoll", text: "mmol/l"},
 		p: 			{id: "mmoll", text: "mmol/l"},
 		k: 			{id: "mmoll", text: "mmol/l"},
 		ca: 		{id: "mmoll", text: "mmol/l"},
 		mg: 		{id: "mmoll", text: "mmol/l"},
 		na: 		{id: "mmoll", text: "mmol/l"},
 		cl: 		{id: "mmoll", text: "mmol/l"},
 		sso4: 		{id: "mmoll", text: "mmol/l"},
 		fe: 		{id: "umoll", text: "µmol/l"},
 		mn: 		{id: "umoll", text: "µmol/l"},
 		zn: 		{id: "umoll", text: "µmol/l"},
 		cu: 		{id: "umoll", text: "µmol/l"},
 		b: 			{id: "umoll", text: "µmol/l"},
 		mo: 		{id: "umoll", text: "µmol/l"},
 		hco3: 		{id: "mmoll", text: "mmol/l"},
 	}

 	inputsAlerts = {

 		nnh4: 		"",
 		nno3: 		"",
 		p: 			"",
 		k: 			"",
 		ca: 		"",
 		mg: 		"",
 		na: 		"",
 		cl: 		"",
 		sso4: 		"",
 		fe: 		"",
 		mn: 		"",
 		zn: 		"",
 		cu: 		"",
 		b: 			"",
 		mo: 		"",
 		hco3: 		"",
 		ph: 		"",
 		ec: 		""
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
 			umoll: 0.00
 		},
 		mn: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		zn: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		cu: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		b: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		mo: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		hco3: {
 			mgl: 	0.00,
 			mmoll: 	0.00

 		},
 		ph: 0.00,
 		ec: 0.00
 	}
 	constructor(public navCtrl: NavController) { }


 	goToInputData() {
 		this.navCtrl.push(InputDataTable);
 	}
 	goToWaterAnalysis() {
 		this.navCtrl.push(AddWaterAnalysis);
 	}



 	changeEquivalents(){
 		console.log("changeEquivalents");
 		/*if (this.data.unit == "mgl") {
 			console.log("true mgl");
 			this.equivalents.text = 	"mmol/l";
 			this.equivalents.id 	 = 	"mmoll";
 		}else{
 			console.log("true mmoll");
 			this.equivalents.text = 	"mg/l";
 			this.equivalents.id 	 = 	"mgl";
 		}*/

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

 	changeNnh4(){
 		console.log("changeNnh4");
 		if (this.inputs.nnh4 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.nnh4.mgl 		= this.inputs.nnh4 ;
 				this.data.nnh4.mmoll 	= Number(((this.inputs.nnh4 )/14).toFixed(6));
 			}else{
 				this.data.nnh4.mgl 		= Number(((this.inputs.nnh4 )*14).toFixed(6)); 
 				this.data.nnh4.mmoll 	= this.inputs.nnh4 ;
 			}
 			this.checkBalance();
 		}
 	};
 	changeNno3(){
 		console.log("changeNno3");
 		if (this.inputs.nno3 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.nno3.mgl 		= this.inputs.nno3 ;
 				this.data.nno3.mmoll 	= Number(((this.inputs.nno3 )/14).toFixed(6));
 			}else{
 				this.data.nno3.mgl 		= Number(((this.inputs.nno3 )*14).toFixed(6)); 
 				this.data.nno3.mmoll 	= this.inputs.nno3 ;
 			}
 			this.checkBalance();
 		}
 	};
 	changeP(){
 		console.log("changeP");
 		if (this.inputs.p != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.p.mgl 		= this.inputs.p ;
 				this.data.p.mmoll 	= Number(((this.inputs.p )/30.97).toFixed(6));
 			}else{
 				this.data.p.mgl 		= Number(((this.inputs.p )*30.97).toFixed(6)); 
 				this.data.p.mmoll 	= this.inputs.p ;
 			}
 			this.checkBalance();
 		}
 	};
 	changeK(){
 		console.log("changeK");
 		if (this.inputs.k != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.k.mgl 		= this.inputs.k ;
 				this.data.k.mmoll 	= Number(((this.inputs.k )/39.098).toFixed(6));
 			}else{
 				this.data.k.mgl 		= Number(((this.inputs.k )*39.098).toFixed(6)); 
 				this.data.k.mmoll 	= this.inputs.k ;
 			}
 			this.checkBalance();
 		}
 	};
 	changeCa(){
 		console.log("changeCa");
 		if (this.inputs.ca != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.ca.mgl 		= this.inputs.ca ;
 				this.data.ca.mmoll 	= Number(((this.inputs.ca )/40.08).toFixed(6));
 			}else{
 				this.data.ca.mgl 		= Number(((this.inputs.ca )*40.08).toFixed(6)); 
 				this.data.ca.mmoll 	= this.inputs.ca ;
 			}
 			this.checkBalance();
 		}
 	};
 	changeMg(){
 		console.log("changeMg");
 		if (this.inputs.mg != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.mg.mgl 		= this.inputs.mg ;
 				this.data.mg.mmoll 	= Number(((this.inputs.mg )/24.305).toFixed(6));
 			}else{
 				this.data.mg.mgl 		= Number(((this.inputs.mg )*24.305).toFixed(6)); 
 				this.data.mg.mmoll 	= this.inputs.mg ;
 			}
 			this.checkBalance();
 		}
 	};
 	changeNa(){
 		console.log("changeNa");
 		if (this.inputs.na != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.na.mgl 		= this.inputs.na ;
 				this.data.na.mmoll 	= Number(((this.inputs.na )/22.99).toFixed(6));
 			}else{
 				this.data.na.mgl 		= Number(((this.inputs.na )*22.99).toFixed(6)); 
 				this.data.na.mmoll 	= this.inputs.na ;
 			}

 			if (this.data.na.mmoll > 4.5) {
 			this.inputsAlerts.na = "Too High";
 			}

 			if (this.data.na.mmoll > 3) {
 			this.inputsAlerts.na = "Very High";
 			}
 			if (this.data.na.mmoll > 1.5) {
 			this.inputsAlerts.na = " High";
 			}

 			this.checkBalance();
 		}
 	};
 	changeCl(){
 		console.log("changeCl");
 		if (this.inputs.cl != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.cl.mgl 		= this.inputs.cl ;
 				this.data.cl.mmoll 	= Number(((this.inputs.cl )/35.453).toFixed(6));
 			}else{
 				this.data.cl.mgl 		= Number(((this.inputs.cl )*35.453).toFixed(6)); 
 				this.data.cl.mmoll 	= this.inputs.cl ;
 			}

 			if (this.data.cl.mmoll > 4.5) {
 			this.inputsAlerts.cl = "Too High";
 			}
 			if (this.data.cl.mmoll > 3) {
 			this.inputsAlerts.cl = "Very High";
 			}
 			if (this.data.cl.mmoll > 1.5) {
 			this.inputsAlerts.cl = " High";
 			}

 			this.checkBalance();
 		}
 	};
 	changeSso4(){
 		console.log("changeSso4");
 		if (this.inputs.sso4 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.sso4.mgl 		= this.inputs.sso4 ;
 				this.data.sso4.mmoll 	= Number(((this.inputs.sso4 )/ 32.06).toFixed(6));
 			}else{
 				this.data.sso4.mgl 		= Number(((this.inputs.sso4 )* 32.06).toFixed(6)); 
 				this.data.sso4.mmoll 	= this.inputs.sso4 ;
 			}
 			if (this.data.sso4.mmoll < 2) {
 			this.inputsAlerts.sso4 = "Too High";
 			}

 			this.checkBalance();
 		}
 	};
 	changeFe(){
 		console.log("changeFe");
 		if (this.inputs.fe != 0) {
 			var dataWithumoll = {
 				mgl: 	0,
 				mmoll: 	0,
 				umoll: 	0
 			};

 			if (this.data.unit == "mgl") {
 				dataWithumoll.mgl 		= this.inputs.fe;
 				dataWithumoll.umoll 	= Number(((dataWithumoll.mgl *1000)/55.85).toFixed(6));
 				dataWithumoll.mmoll 	= Number(((dataWithumoll.mgl *1000)/55.85).toFixed(6));
 			}else{
 				dataWithumoll.mmoll 	= this.inputs.fe;
 				dataWithumoll.umoll 	= dataWithumoll.mmoll;
 			}
 			this.data.fe = dataWithumoll;

 			if (this.data.fe.mmoll > 25) {
 			this.inputsAlerts.fe = "Too High";
 			}

 			this.checkBalance();

 		}
 	};
 	changeMn(){
 		console.log("changeMn");
 		if (this.inputs.mn != 0) {
 			var dataWithumoll = {
 				mgl: 	0,
 				mmoll: 	0,
 				umoll: 	0
 			};

 			if (this.data.unit == "mgl") {
 				dataWithumoll.mgl 		= this.inputs.mn;
 				dataWithumoll.umoll 	= Number(((dataWithumoll.mgl *1000)/54.94).toFixed(6));
 				dataWithumoll.mmoll 	= Number(((dataWithumoll.mgl *1000)/54.94).toFixed(6));
 			}else{
 				dataWithumoll.mmoll 	= this.inputs.mn;
 				dataWithumoll.umoll 	= dataWithumoll.mmoll;
 			}
 			this.data.mn = dataWithumoll;

 			if (this.data.mn.mmoll > 10) {
 			this.inputsAlerts.mn = "Too High";
 			}

 			this.checkBalance();

 		}
 	};
 	changeZn(){
 		console.log("changeZn");
 		if (this.inputs.zn != 0) {
 			var dataWithumoll = {
 				mgl: 	0,
 				mmoll: 	0,
 				umoll: 	0
 			};
 			if (this.data.unit == "mgl") {
 				dataWithumoll.mgl 		= this.inputs.zn;
 				dataWithumoll.umoll 	= Number(((dataWithumoll.mgl *1000)/65.39).toFixed(6));
 				dataWithumoll.mmoll 	= Number(((dataWithumoll.mgl *1000)/65.39).toFixed(6));
 			}else{
 				dataWithumoll.mmoll 	= this.inputs.zn;
 				dataWithumoll.umoll 	= dataWithumoll.mmoll;
 			}
 			this.data.zn = dataWithumoll;

 			if (this.data.zn.mmoll > 10) {
 			this.inputsAlerts.zn = "Too High";
 			}

 			this.checkBalance();

 		}
 	};
 	changeCu(){
 		console.log("changeCu");
 		if (this.inputs.cu != 0) {
 			var dataWithumoll = {
 				mgl: 	0,
 				mmoll: 	0,
 				umoll: 	0
 			};

 			if (this.data.unit == "mgl") {
 				dataWithumoll.mgl 		= this.inputs.cu;
 				dataWithumoll.umoll 	= Number(((dataWithumoll.mgl *1000)/63.55).toFixed(6));
 				dataWithumoll.mmoll 	= Number(((dataWithumoll.mgl *1000)/63.55).toFixed(6));
 			}else{
 				dataWithumoll.mmoll 	= this.inputs.cu;
 				dataWithumoll.umoll 	= dataWithumoll.mmoll;
 			}
 			this.data.cu = dataWithumoll;
 			
 			if (this.data.cu.mmoll > 3) {
 			this.inputsAlerts.cu = "Too High";
 			}

 			this.checkBalance();

 		}
 	};
 	changeB(){
 		console.log("changeB");
 		if (this.inputs.b != 0) {
 			var dataWithumoll = {
 				mgl: 	0,
 				mmoll: 	0,
 				umoll: 	0
 			};

 			if (this.data.unit == "mgl") {
 				dataWithumoll.mgl 		= this.inputs.b;
 				dataWithumoll.umoll 	= Number(((dataWithumoll.mgl *1000)/10.81).toFixed(6));
 				dataWithumoll.mmoll 	= Number(((dataWithumoll.mgl *1000)/10.81).toFixed(6));
 			}else{
 				dataWithumoll.mmoll 	= this.inputs.b;
 				dataWithumoll.umoll 	= dataWithumoll.mmoll;
 			}
 			this.data.b = dataWithumoll;

 			if (this.data.b.mmoll > 50) {
 			this.inputsAlerts.b = "Too High";
 			}

 			this.checkBalance();

 		}
 	};
 	changeMo(){
 		console.log("changeMo");
 		if (this.inputs.mo != 0) {
 			var dataWithumoll = {
 				mgl: 	0,
 				mmoll: 	0,
 				umoll: 	0
 			};
 			if (this.data.unit == "mgl") {
 				dataWithumoll.mgl 		= this.inputs.mo;
 				dataWithumoll.umoll 	= Number(((dataWithumoll.mgl *1000)/95.94).toFixed(6));
 				dataWithumoll.mmoll 	= Number(((dataWithumoll.mgl *1000)/95.94).toFixed(6));
 			}else{
 				dataWithumoll.mmoll 	= this.inputs.mo;
 				dataWithumoll.umoll 	= dataWithumoll.mmoll;
 			}
 			this.data.mo = dataWithumoll;
 			this.checkBalance();

 		}
 	};
 	changeHco3(){
 		console.log("changeHco3");
 		if (this.inputs.hco3 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.hco3.mgl 		= this.inputs.hco3 ;
 				this.data.hco3.mmoll 	= Number(((this.inputs.hco3 )/ 61.02).toFixed(6));
 			}else{
 				this.data.hco3.mgl 		= Number(((this.inputs.hco3 )* 61.02).toFixed(6)); 
 				this.data.hco3.mmoll 	= this.inputs.hco3 ;
 			}
 		}
 		this.checkBalance();
 	

 	};

 	changePh(){
 		if (this.inputs.ph!= 0) {
 			this.data.ph = this.inputs.ph;
 			if (this.data.ph < 5.5) {
 			this.inputsAlerts.ph = "Too Low";
 			}
 		}
 	}

 	changeEc(){
 		if (this.inputs.ec!= 0) {
 			this.data.ec = this.inputs.ec;
 			
 			if (this.data.ec > 1.5) {
 			this.inputsAlerts.ec = "Too High";
 			}

 			if (this.data.ec > 1) {
 			this.inputsAlerts.ec = "Very High";
 			}
 			if (this.data.ec > 0.5) {
 			this.inputsAlerts.ec = "High";
 			}

 		}
 	}

 	checkBalance(){
 		var balance =
 		this.data.nnh4.mmoll 		-
		this.data.nno3.mmoll 		-
		this.data.p.mmoll 			+
		this.data.k.mmoll 			+
		(this.data.ca.mmoll * 2)	+
		(this.data.mg.mmoll * 2)	+
		this.data.na.mmoll 			-
		this.data.cl.mmoll 			-
		(this.data.sso4.mmoll * 2) 	-
		this.data.hco3.mmoll;
		console.log("data: ");
		console.log(this.data);
		console.log("BALANCE: " + balance);
		this.data.balance = balance;
 	}

 	getEquivalent(elementId){
 		var equiVal = Number(this.data[elementId][this.inputsEquivalUnits[elementId].id]).toFixed(2);
 		console.log(elementId+ "  equiVal: "+ equiVal);
 		return equiVal;
 	}
 }
