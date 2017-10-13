import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsResultPage } from '../../pages/tabs-results/tabs-results';
import { NewAnalysisInformation } from '../new-analysis-information/new-analysis-information';
import { ProgramProvider } from '../../providers/programs';
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
                public programProvider : ProgramProvider,
                private pagesProvider: PagesProvider) { 
         this.data = programProvider.getInstance().waterAnalysisInformation;
         for (let f in this.data) {
         	for (let j in this.inputs) {
         		if (f == j) {
         			if (this.data.unit =="mgl") {
         				this.inputs[j]= this.data[f].mgl;
         			}else{
         				this.inputs[j]= this.data[f].mmoll;
         			}
         			
         		}
         	}
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
 		
 		if (this.inputs.nnh4 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.nnh4.mgl 		= Number(this.inputs.nnh4 );
 				this.data.nnh4.mmoll 	= Number(((this.inputs.nnh4 )/14).toFixed(6));
 			}else{
 				this.data.nnh4.mgl 		= Number(((this.inputs.nnh4 )*14).toFixed(6)); 
 				this.data.nnh4.mmoll 	= Number(this.inputs.nnh4 );
 			}
 			
 			
 		}else{
 			this.data.nnh4.mgl 		= 0.000;
 			this.data.nnh4.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeNno3(){
 		console.log("changeNno3");
 		
 		if (this.inputs.nno3 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.nno3.mgl 		= Number(this.inputs.nno3 );
 				this.data.nno3.mmoll 	= Number(((this.inputs.nno3 )/14).toFixed(6));
 			}else{
 				this.data.nno3.mgl 		= Number(((this.inputs.nno3 )*14).toFixed(6)); 
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
 		
 		if (this.inputs.p != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.p.mgl 	= Number(this.inputs.p );
 				this.data.p.mmoll 	= Number(((this.inputs.p )/30.97).toFixed(6));
 			}else{
 				this.data.p.mgl 	= Number(((this.inputs.p )*30.97).toFixed(6)); 
 				this.data.p.mmoll 	= Number(this.inputs.p );
 			}
 		}else{
 			this.data.p.mgl 		= 0.000;
 			this.data.p.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeK(){
 		console.log("changeK");
 		if (this.inputs.k != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.k.mgl 	= Number(this.inputs.k );
 				this.data.k.mmoll 	= Number(((this.inputs.k )/39.098).toFixed(6));
 			}else{
 				this.data.k.mgl 	= Number(((this.inputs.k )*39.098).toFixed(6)); 
 				this.data.k.mmoll 	= Number(this.inputs.k) ;
 			}
 		}else{
 			this.data.k.mgl 	= 0.000;
 			this.data.k.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeCa(){
 		console.log("changeCa");
 		
 		if (this.inputs.ca != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.ca.mgl 	= Number(this.inputs.ca );
 				this.data.ca.mmoll 	= Number(((this.inputs.ca )/40.08).toFixed(6));
 			}else{
 				this.data.ca.mgl 	= Number(((this.inputs.ca )*40.08).toFixed(6)); 
 				this.data.ca.mmoll 	= Number(this.inputs.ca );
 			}
 		}else{
 			this.data.ca.mgl 		= 0.000;
 			this.data.ca.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeMg(){
 		console.log("changeMg");
 		
 		if (this.inputs.mg != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.mg.mgl 	= Number(this.inputs.mg );
 				this.data.mg.mmoll 	= Number(((this.inputs.mg )/24.305).toFixed(6));
 			}else{
 				this.data.mg.mgl 	= Number(((this.inputs.mg )*24.305).toFixed(6)); 
 				this.data.mg.mmoll 	= Number(this.inputs.mg );
 			}
 		}else{
 			this.data.mg.mgl 		= 0.000;
 			this.data.mg.mmoll 	    = 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeNa(){
 		console.log("changeNa");
 		if (this.inputs.na != 0) {
 			
 			if (this.data.unit == "mgl") {
 				this.data.na.mgl 	= Number(this.inputs.na );
 				this.data.na.mmoll 	= Number(((this.inputs.na )/22.99).toFixed(6));
 			}else{
 				this.data.na.mgl 	= Number(((this.inputs.na )*22.99).toFixed(6)); 
 				this.data.na.mmoll 	= Number(this.inputs.na );
 			}

             this.updateProgramInformation();
             this.programProvider.getInstance().verifyNaValue();
             this.inputsAlerts.na = this.programProvider.getInstance().waterAnalysisInformation.na.alert;

 		}else{
 			this.data.na.mgl 	= 0.000;
 			this.data.na.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeCl(){
 		console.log("changeCl");
 		if (this.inputs.cl != 0) {
 			
 			if (this.data.unit == "mgl") {
 				this.data.cl.mgl 	= Number(this.inputs.cl );
 				this.data.cl.mmoll 	= Number(((this.inputs.cl )/35.453).toFixed(6));
 			}else{
 				this.data.cl.mgl 	= Number(((this.inputs.cl )*35.453).toFixed(6)); 
 				this.data.cl.mmoll 	= Number(this.inputs.cl );
 			}

 			this.updateProgramInformation();
            this.programProvider.getInstance().verifyClValue();
           
            this.inputsAlerts.cl = this.programProvider.getInstance().waterAnalysisInformation.cl.alert;

 		}else{
 			this.data.cl.mgl 	= 0.000;
 			this.data.cl.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeSso4(){
 		console.log("changeSso4");
 		if (this.inputs.sso4 != 0) {
 			if (this.data.unit == "mgl") {

 				this.data.sso4.mgl 		= Number(this.inputs.sso4 );
 				this.data.sso4.mmoll 	= Number(((this.inputs.sso4 )/ 32.06).toFixed(6));

 			}else{

 				this.data.sso4.mgl 		= Number(((this.inputs.sso4 )* 32.06).toFixed(6)); 
 				this.data.sso4.mmoll 	= Number(this.inputs.sso4 );
 			}
 			
 			this.updateProgramInformation();
            this.programProvider.getInstance().verifySso4Value();
            this.inputsAlerts.sso4 = this.programProvider.getInstance().waterAnalysisInformation.sso4.alert;

 		}else{
 			this.data.sso4.mgl 		= 0.000;
 			this.data.sso4.mmoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeFe(){
 		console.log("changeFe");
 		if (this.inputs.fe != 0) {


 			if (this.data.unit == "mgl") {
 				this.data.fe.mgl 		= this.inputs.fe;
 				this.data.fe.umoll 	= Number(((this.data.fe.mgl *1000)/55.85).toFixed(6));
 				this.data.fe.mmoll 	= Number(((this.data.fe.mgl *1000)/55.85).toFixed(6));
 			}else{
 				this.data.fe.mmoll 	= this.inputs.fe;
 				this.data.fe.umoll 	= this.data.fe.mmoll;
 			}

 			this.updateProgramInformation();
            this.programProvider.getInstance().verifyFeValue();
            this.inputsAlerts.fe = this.programProvider.getInstance().waterAnalysisInformation.fe.alert;

 		}else{
 			this.data.fe.mgl 	= 0.000;
 			this.data.fe.mmoll 	= 0.000;
 			this.data.fe.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeMn(){
 		console.log("changeMn");
 		if (this.inputs.mn != 0) {


 			if (this.data.unit == "mgl") {
 				this.data.mn.mgl 		= this.inputs.mn;
 				this.data.mn.umoll 	= Number(((this.data.mn.mgl *1000)/54.94).toFixed(6));
 				this.data.mn.mmoll 	= Number(((this.data.mn.mgl *1000)/54.94).toFixed(6));
 			}else{
 				this.data.mn.mmoll 	= this.inputs.mn;
 				this.data.mn.umoll 	= this.data.mn.mmoll;
 			}

 			this.updateProgramInformation();
            this.programProvider.getInstance().verifyMnValue();
            this.inputsAlerts.mn = this.programProvider.getInstance().waterAnalysisInformation.mn.alert;

 		}else{
 			this.data.mn.mgl 	= 0.000;
 			this.data.mn.mmoll 	= 0.000;
 			this.data.mn.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeZn(){
 		console.log("changeZn");
 		if (this.inputs.zn != 0) {

 			if (this.data.unit == "mgl") {
 				this.data.zn.mgl 		= Number(this.inputs.zn);
 				this.data.zn.umoll 	= Number(((this.data.zn.mgl *1000)/65.39).toFixed(6));
 				this.data.zn.mmoll 	= Number(((this.data.zn.mgl *1000)/65.39).toFixed(6));
 			}else{
 				this.data.zn.mmoll 	= Number(this.inputs.zn);
 				this.data.zn.umoll 	= this.data.zn.mmoll;
 			}


 			this.updateProgramInformation();
            this.programProvider.getInstance().verifyZnValue();
            this.inputsAlerts.zn = this.programProvider.getInstance().waterAnalysisInformation.zn.alert;

 		}else{
 			this.data.zn.mgl 	= 0.000;
 			this.data.zn.mmoll 	= 0.000;
 			this.data.zn.umoll 	= 0.000;
 		}

 		this.checkBalance();
 		
 	};
 	changeCu(){
 		console.log("changeCu");
 		if (this.inputs.cu != 0) {

 			if (this.data.unit == "mgl") {
 				this.data.cu.mgl 		= Number(this.inputs.cu);
 				this.data.cu.umoll 	= Number(((this.data.cu.mgl *1000)/63.55).toFixed(6));
 				this.data.cu.mmoll 	= Number(((this.data.cu.mgl *1000)/63.55).toFixed(6));
 			}else{
 				this.data.cu.mmoll 	= Number(this.inputs.cu);
 				this.data.cu.umoll 	= this.data.cu.mmoll;
 			}

 			
 			this.updateProgramInformation();
            this.programProvider.getInstance().verifyCuValue();
            this.inputsAlerts.cu = this.programProvider.getInstance().waterAnalysisInformation.cu.alert;

 		}else{
 			this.data.cu.mgl 	= 0.000;
 			this.data.cu.mmoll 	= 0.000;
 			this.data.cu.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeB(){
 		console.log("changeB");
 		if (this.inputs.b != 0) {


 			if (this.data.unit == "mgl") {
 				this.data.b.mgl 		= Number(this.inputs.b);
 				this.data.b.umoll 	= Number(((this.data.b.mgl *1000)/10.81).toFixed(6));
 				this.data.b.mmoll 	= Number(((this.data.b.mgl *1000)/10.81).toFixed(6));
 			}else{
 				this.data.b.mmoll 	= Number(this.inputs.b);
 				this.data.b.umoll 	= this.data.b.mmoll;
 			}


 			this.updateProgramInformation();
            this.programProvider.getInstance().verifyBValue();
            this.inputsAlerts.b = this.programProvider.getInstance().waterAnalysisInformation.b.alert;

 		}else{
 			this.data.b.mgl 	= 0.000;
 			this.data.b.mmoll 	= 0.000;
 			this.data.b.umoll 	= 0.000;
 		}
 		this.checkBalance();
 		
 	};
 	changeMo(){
 		console.log("changeMo");
 		if (this.inputs.mo != 0) {

 			if (this.data.unit == "mgl") {
 				this.data.mo.mgl 		= Number(this.inputs.mo);
 				this.data.mo.umoll 	= Number(((this.data.mo.mgl *1000)/95.94).toFixed(6));
 				this.data.mo.mmoll 	= Number(((this.data.mo.mgl *1000)/95.94).toFixed(6));
 			}else{
 				this.data.mo.mmoll 	= Number(this.inputs.mo);
 				this.data.mo.umoll 	= this.data.mo.mmoll;
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
 		if (this.inputs.hco3 != 0) {
 			if (this.data.unit == "mgl") {
 				this.data.hco3.mgl 		= Number(this.inputs.hco3 );
 				this.data.hco3.mmoll 	= Number(((this.inputs.hco3 )/ 61.02).toFixed(6));
 			}else{
 				this.data.hco3.mgl 		= Number(((this.inputs.hco3 )* 61.02).toFixed(6)); 
 				this.data.hco3.mmoll 	= Number(this.inputs.hco3 );
 			}
 		}else{
 			this.data.hco3.mgl 		= 0.000;
 			this.data.hco3.mmoll 	= 0.000;
 		}
 		this.checkBalance();



 	};

 	changePh(){
 		if (this.inputs.ph!= 0) {
 			this.data.ph.value = this.inputs.ph;
 			
            this.updateProgramInformation();
            this.programProvider.getInstance().verifyPhValue();
            this.inputsAlerts.ph = this.programProvider.getInstance().waterAnalysisInformation.ph.alert;
 			
 			
 		}
 	}

 	changeEc(){
 		if (this.inputs.ec!= 0) {
 			this.data.ec.value = this.inputs.ec;
 			
 			this.updateProgramInformation();
            this.programProvider.getInstance().verifyECValue();
            this.inputsAlerts.ec = this.programProvider.getInstance().waterAnalysisInformation.ec.alert;

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
        this.programProvider.getInstance().waterAnalysisInformation = this.data;
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
        this.navCtrl.pop(NewAnalysisInformation);
    }

 }
