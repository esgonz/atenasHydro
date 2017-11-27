import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsResultPage } from '../../pages/tabs-results/tabs-results';
import { NewAnalysisInformation } from '../new-analysis-information/new-analysis-information';
import { TempProgramProvider } from '../../providers/temp-program';
import { PagesProvider } from '../../providers/pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
 @Component({
 	selector: 'page-new-water-analysis',
 	templateUrl: 'new-water-analysis.html'
 })
 export class NewWaterAnalysis {
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
 		ec: 		"",
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
            mgl:     0.00,
            mmoll:     0.00
        },
        nno3: {
            mgl:     0.00,
            mmoll:     0.00
        },
        p: {
            mgl:     0.00,
            mmoll:     0.00
        },
        k: {
            mgl:     0.00,
            mmoll:     0.00
        },
        ca: {
            mgl:     0.00,
            mmoll:     0.00
        },
        mg: {
            mgl:     0.00,
            mmoll:     0.00
        },
        na: {
            mgl:     0.00,
            mmoll:     0.00,
            status: "normal",
            alert: ""
        },
        cl: {
            mgl:     0.00,
            mmoll:     0.00,
            status: "normal",
            alert: ""
        },
        sso4: {
            mgl:     0.00,
            mmoll:     0.00,
            status: "normal",
            alert: ""
        },
        fe: {
            mgl:     0.00,
            mmoll:     0.00,
            umoll: 0.00,
            status: "normal",
            alert: ""
        },
        mn: {
            mgl:     0.00,
            mmoll:     0.00,
            umoll: 0.00,
            status: "normal",
            alert: ""
        },
        zn: {
            mgl:     0.00,
            mmoll:     0.00,
            umoll: 0.00,
            status: "normal",
            alert: ""
        },
        cu: {
            mgl:     0.00,
            mmoll:     0.00,
            umoll: 0.00,
            status: "normal",
            alert: ""
        },
        b: {
            mgl:     0.00,
            mmoll:     0.00,
            umoll: 0.00,
            status: "normal",
            alert: ""
        },
        mo: {
            mgl:     0.00,
            mmoll:     0.00,
            umoll: 0.00
        },
        hco3: {
            mgl:     0.00,
            mmoll:     0.00

        },
        ph: {
            value: 0.00,
            status: "normal",
            alert: ""
        },
        ec: {
            value: 0.00,
            status: "normal",
            alert: ""
        }
 	}
 	constructor(public navCtrl: NavController, 
                public tempProgramProvider : TempProgramProvider,
                private pagesProvider: PagesProvider) { 
         this.data = tempProgramProvider.getInstance().waterAnalysisInformation;
         for (let f in this.data) {
         	for (let j in this.inputs) {
         		if (f == j) {
         			if (this.data.unit =="mgl") {
         				this.inputs[j]= this.avoidZeroValues(this.data[f].mgl);
         			}else{
         				this.inputs[j]= this.avoidZeroValues(this.data[f].mmoll);
         			}
         			
         		}
         	}
	     }
     }





    avoidZeroValues( value){
        if(value == 0) {
            return "";
        }
        else{
            return value;
        }
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
        let nnh4 ;
        if(this.inputs.nnh4 != "") {
            nnh4 = parseFloat(this.inputs.nnh4);
        }else{
            nnh4 = 0.00;
        }
 		
 		if (nnh4 != 0 ) {
 			if (this.data.unit == "mgl") {
 				this.data.nnh4.mgl 		= Number( nnh4 );
 				this.data.nnh4.mmoll 	= Number(((nnh4 )/14).toFixed(10));
 			}else{
 				this.data.nnh4.mgl 		= Number(((nnh4 )*14).toFixed(10)); 
 				this.data.nnh4.mmoll 	= Number(nnh4 );
 			}
 			
 			
 		}else{
 			this.data.nnh4.mgl 		= 0.000;
 			this.data.nnh4.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeNno3(){
 		console.log("changeNno3");
 		
        let nno3 ;
        if(this.inputs.nno3 != "") {
            nno3 = parseFloat(this.inputs.nno3);
        }else{
            nno3 = 0.00;
        }

 		if (nno3 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.nno3.mgl 		= Number(nno3 );
 				this.data.nno3.mmoll 	= Number(((nno3 )/14).toFixed(10));
 			}else{
 				this.data.nno3.mgl 		= Number(((nno3 )*14).toFixed(10)); 
 				this.data.nno3.mmoll 	= Number(this.inputs.nno3 );
 			}
 		}else{
 			this.data.nno3.mgl 		= 0.000;
 			this.data.nno3.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeP(){
 		console.log("changeP");
 		let p ;
        if(this.inputs.p != "") {
            p = parseFloat(this.inputs.p);
        }else{
            p = 0.00;
        }

 		if (p != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.p.mgl 	= Number(p );
 				this.data.p.mmoll 	= Number(((p )/30.97).toFixed(10));
 			}else{
 				this.data.p.mgl 	= Number(((p )*30.97).toFixed(10)); 
 				this.data.p.mmoll 	= Number(p );
 			}
 		}else{
 			this.data.p.mgl 		= 0.000;
 			this.data.p.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeK(){
 		console.log("changeK");
        let k ;
        if(this.inputs.k != "") {
            k = parseFloat(this.inputs.k);
        }else{
            k = 0.00;
        }
 		if (k != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.k.mgl 	= Number(k );
 				this.data.k.mmoll 	= Number(((k )/39.098).toFixed(10));
 			}else{
 				this.data.k.mgl 	= Number(((k )*39.098).toFixed(10)); 
 				this.data.k.mmoll 	= Number(k) ;
 			}
 		}else{
 			this.data.k.mgl 	= 0.000;
 			this.data.k.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeCa(){
 		console.log("changeCa");
 		let ca ;
        if(this.inputs.ca != "") {
            ca = parseFloat(this.inputs.ca);
        }else{
            ca = 0.00;
        }
 		if (ca != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.ca.mgl 	= Number(ca );
 				this.data.ca.mmoll 	= Number(((ca )/40.08).toFixed(10));
 			}else{
 				this.data.ca.mgl 	= Number(((ca )*40.08).toFixed(10)); 
 				this.data.ca.mmoll 	= Number(ca );
 			}
 		}else{
 			this.data.ca.mgl 		= 0.000;
 			this.data.ca.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeMg(){
 		console.log("changeMg");
 		let mg ;
        if(this.inputs.mg != "") {
            mg = parseFloat(this.inputs.mg);
        }else{
            mg = 0.00;
        }
 		if (mg != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.mg.mgl 	= Number(mg );
 				this.data.mg.mmoll 	= Number(((mg )/24.305).toFixed(10));
 			}else{
 				this.data.mg.mgl 	= Number(((mg )*24.305).toFixed(10)); 
 				this.data.mg.mmoll 	= Number(mg );
 			}
 		}else{
 			this.data.mg.mgl 		= 0.000;
 			this.data.mg.mmoll 	    = 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeNa(){
 		console.log("changeNa");

        let na ;
        if(this.inputs.na != "") {
            na = parseFloat(this.inputs.na);
        }else{
            na = 0.00;
        }
 		if (na != 0) {
 			
 			if (this.data.unit == "mgl") {
 				this.data.na.mgl 	= Number(na );
 				this.data.na.mmoll 	= Number(((na )/22.99).toFixed(10));
 			}else{
 				this.data.na.mgl 	= Number(((na )*22.99).toFixed(10)); 
 				this.data.na.mmoll 	= Number(na );
 			}

             this.updateProgramInformation();
             this.tempProgramProvider.getInstance().verifyNaValue();
             this.inputsAlerts.na = this.tempProgramProvider.getInstance().waterAnalysisInformation.na.alert;

 		}else{
 			this.data.na.mgl 	= 0.000;
 			this.data.na.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeCl(){
 		console.log("changeCl");

         let cl ;
        if(this.inputs.cl != "") {
            cl = parseFloat(this.inputs.cl);
        }else{
            cl = 0.00;
        }

 		if (cl != 0) {
 			
 			if (this.data.unit == "mgl") {
 				this.data.cl.mgl 	= Number(cl );
 				this.data.cl.mmoll 	= Number(((cl )/35.453).toFixed(10));
 			}else{
 				this.data.cl.mgl 	= Number(((cl )*35.453).toFixed(10)); 
 				this.data.cl.mmoll 	= Number(cl );
 			}

 			this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifyClValue();
           
            this.inputsAlerts.cl = this.tempProgramProvider.getInstance().waterAnalysisInformation.cl.alert;

 		}else{
 			this.data.cl.mgl 	= 0.000;
 			this.data.cl.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeSso4(){
 		console.log("changeSso4");

        let sso4 ;
        if(this.inputs.sso4 != "") {
            sso4 = parseFloat(this.inputs.sso4);
        }else{
            sso4 = 0.00;
        }


 		if (sso4 != 0) {
 			if (this.data.unit == "mgl") {

 				this.data.sso4.mgl 		= Number(sso4 );
 				this.data.sso4.mmoll 	= Number(((sso4 )/ 32.06).toFixed(10));

 			}else{

 				this.data.sso4.mgl 		= Number(((sso4 )* 32.06).toFixed(10)); 
 				this.data.sso4.mmoll 	= Number(sso4 );
 			}
 			
 			this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifySso4Value();
            this.inputsAlerts.sso4 = this.tempProgramProvider.getInstance().waterAnalysisInformation.sso4.alert;

 		}else{
 			this.data.sso4.mgl 		= 0.000;
 			this.data.sso4.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeFe(){
 		console.log("changeFe");


        let fe ;
        if(this.inputs.fe != "") {
            fe = parseFloat(this.inputs.fe);
        }else{
            fe = 0.00;
        }


 		if (fe != 0) {


 			if (this.data.unit == "mgl") {
 				this.data.fe.mgl 		= fe;
 				this.data.fe.umoll 	= Number(((this.data.fe.mgl *1000)/55.85).toFixed(10));
 				this.data.fe.mmoll 	= Number(((this.data.fe.mgl *1000)/55.85).toFixed(10));
 			}else{
 				this.data.fe.mmoll 	= Number(fe);
 				this.data.fe.umoll 	= Number(this.data.fe.mmoll);
 			}

 			this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifyFeValue();
            this.inputsAlerts.fe = this.tempProgramProvider.getInstance().waterAnalysisInformation.fe.alert;

 		}else{
 			this.data.fe.mgl 	= 0.000;
 			this.data.fe.mmoll 	= 0.000;
 			this.data.fe.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeMn(){
 		console.log("changeMn");

        let mn ;
        if(this.inputs.mn != "") {
            mn = parseFloat(this.inputs.mn);
        }else{
            mn = 0.00;
        }


 		if (mn != 0) {


 			if (this.data.unit == "mgl") {
 				this.data.mn.mgl 		= mn;
 				this.data.mn.umoll 	= Number(((this.data.mn.mgl *1000)/54.94).toFixed(10));
 				this.data.mn.mmoll 	= Number(((this.data.mn.mgl *1000)/54.94).toFixed(10));
 			}else{
 				this.data.mn.mmoll 	= Number(mn);
 				this.data.mn.umoll 	= Number(this.data.mn.mmoll);
 			}

 			this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifyMnValue();
            this.inputsAlerts.mn = this.tempProgramProvider.getInstance().waterAnalysisInformation.mn.alert;

 		}else{
 			this.data.mn.mgl 	= 0.000;
 			this.data.mn.mmoll 	= 0.000;
 			this.data.mn.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeZn(){
 		console.log("changeZn");


        let zn ;
        if(this.inputs.zn != "") {
            zn = parseFloat(this.inputs.zn);
        }else{
            zn = 0.00;
        }


 		if (zn != 0) {

 			if (this.data.unit == "mgl") {
 				this.data.zn.mgl 		= Number(zn);
 				this.data.zn.umoll 	= Number(((this.data.zn.mgl *1000)/65.39).toFixed(10));
 				this.data.zn.mmoll 	= Number(((this.data.zn.mgl *1000)/65.39).toFixed(10));
 			}else{
 				this.data.zn.mmoll 	= Number(zn);
 				this.data.zn.umoll 	= Number(this.data.zn.mmoll);
 			}


 			this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifyZnValue();
            this.inputsAlerts.zn = this.tempProgramProvider.getInstance().waterAnalysisInformation.zn.alert;

 		}else{
 			this.data.zn.mgl 	= 0.000;
 			this.data.zn.mmoll 	= 0.000;
 			this.data.zn.umoll 	= 0.000;
 		}

 		this.checkBalance();
 		
 	};
 	changeCu(){
 		console.log("changeCu");

        let cu ;
        if(this.inputs.cu != "") {
            cu = parseFloat(this.inputs.cu);
        }else{
            cu = 0.00;
        }
 		if (cu != 0) {

 			if (this.data.unit == "mgl") {
 				this.data.cu.mgl 		= Number(cu);
 				this.data.cu.umoll 	= Number(((this.data.cu.mgl *1000)/63.55).toFixed(10));
 				this.data.cu.mmoll 	= Number(((this.data.cu.mgl *1000)/63.55).toFixed(10));
 			}else{
 				this.data.cu.mmoll 	= Number(cu);
 				this.data.cu.umoll 	= Number(this.data.cu.mmoll);
 			}

 			
 			this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifyCuValue();
            this.inputsAlerts.cu = this.tempProgramProvider.getInstance().waterAnalysisInformation.cu.alert;

 		}else{
 			this.data.cu.mgl 	= 0.000;
 			this.data.cu.mmoll 	= 0.000;
 			this.data.cu.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeB(){
 		console.log("changeB");


        let b ;
        if(this.inputs.nno3 != "") {
            b = parseFloat(this.inputs.b);
        }else{
            b = 0.00;
        }
 		if (b != 0) {


 			if (this.data.unit == "mgl") {
 				this.data.b.mgl 		= Number(b);
 				this.data.b.umoll 	= Number(((this.data.b.mgl *1000)/10.81).toFixed(10));
 				this.data.b.mmoll 	= Number(((this.data.b.mgl *1000)/10.81).toFixed(10));
 			}else{
 				this.data.b.mmoll 	= Number(b);
 				this.data.b.umoll 	= Number(this.data.b.mmoll);
 			}


 			this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifyBValue();
            this.inputsAlerts.b = this.tempProgramProvider.getInstance().waterAnalysisInformation.b.alert;

 		}else{
 			this.data.b.mgl 	= 0.000;
 			this.data.b.mmoll 	= 0.000;
 			this.data.b.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeMo(){
 		console.log("changeMo");

        let mo ;
        if(this.inputs.mo != "") {
            mo = parseFloat(this.inputs.mo);
        }else{
            mo = 0.00;
        }
 		if (mo != 0) {

 			if (this.data.unit == "mgl") {
 				this.data.mo.mgl 		= Number(mo);
 				this.data.mo.umoll 	= Number(((this.data.mo.mgl *1000)/95.94).toFixed(10));
 				this.data.mo.mmoll 	= Number(((this.data.mo.mgl *1000)/95.94).toFixed(10));
 			}else{
 				this.data.mo.mmoll 	= Number(mo);
 				this.data.mo.umoll 	= Number(this.data.mo.mmoll);
 			}

 		}else{
 			this.data.mo.mgl 	= 0.000;
 			this.data.mo.mmoll 	= 0.000;
 			this.data.mo.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeHco3(){
 		console.log("changeHco3");


         let hco3 ;
        if(this.inputs.hco3 != "") {
            hco3 = parseFloat(this.inputs.hco3);
        }else{
            hco3 = 0.00;
        }
 		if (hco3 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.hco3.mgl 		= Number(this.inputs.hco3 );
 				this.data.hco3.mmoll 	= Number(((hco3 )/ 61.02).toFixed(10));
 			}else{
 				this.data.hco3.mgl 		= Number(((hco3 )* 61.02).toFixed(10)); 
 				this.data.hco3.mmoll 	= Number(this.inputs.hco3 );
 			}
 		}else{
 			this.data.hco3.mgl 		= 0.000;
 			this.data.hco3.mmoll 	= 0.000;
 		}
 		this.checkBalance();



 	};

 	changePh(){


        let ph ;
        if(this.inputs.ph != "") {
            ph = parseFloat(this.inputs.ph);
        }else{
            ph = 0.00;
        }


 		if (ph!= 0) {
 			this.data.ph.value = Number(ph);
 			
            this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifyPhValue();
            this.inputsAlerts.ph = this.tempProgramProvider.getInstance().waterAnalysisInformation.ph.alert;
 			
 			
 		}
 	}

 	changeEc(){

        let ec ;
        if(this.inputs.ec != "") {
            ec = parseFloat(this.inputs.ec);
        }else{
            ec = 0.00;
        }


 		if (ec!= 0) {
 			this.data.ec.value = Number(this.inputs.ec);
 			
 			this.updateProgramInformation();
            this.tempProgramProvider.getInstance().verifyECValue();
            this.inputsAlerts.ec = this.tempProgramProvider.getInstance().waterAnalysisInformation.ec.alert;

 		}
 	}

 	checkBalance(){
 		this.data.balance = 0.0000;
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
 		//console.log(elementId+ "  equiVal: "+ equiVal);
 		return equiVal;
 	}

 	updateProgramInformation (){
        console.log("updateProgramInformation");
        this.tempProgramProvider.getInstance().waterAnalysisInformation = this.data;
    }

    goToFertigationProgram(){
    	console.log("goToFertigationProgram");
    	this.updateProgramInformation();
        var resultPage = { title: 'Fertigation Programe.', component: TabsResultPage, iconClass: 'iconprogramme'   };
        this.pagesProvider.add(resultPage);
        this.pagesProvider.setActivePage(resultPage); 
        this.navCtrl.push(TabsResultPage);
    }    

    goToInputData() {
        console.log("goToFertigationProgram");
        //this.navCtrl.pop(NewAnalysisInformation);
    }

 }
