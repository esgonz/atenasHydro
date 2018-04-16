import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsResultPage } from '../../pages/tabs-results/tabs-results';
import { NewWaterAnalysis } from '../new-water-analysis/new-water-analysis';
import { TempProgramProvider } from '../../providers/temp-program';
import { PagesProvider } from '../../providers/pages';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
 @Component({
 	selector: 'page-new-analysis-information',
 	templateUrl: 'new-analysis-information.html'
 })
 export class NewAnalysisInformation {
    
     acids =[
 	{
 		id: 			"x",
 		name: 			"Nitric Acid - X",
 		concentration: 		0,
 		density: 		 	0
 	},
 	{
 		id: 			"38",
 		name: 			"Nitric Acid - 38",
 		concentration: 		38,
 		density: 		 	1.235
 	},
 	{
 		id: 			"53",
 		name: 			"Nitric Acid - 53",
 		concentration: 		53,
 		density: 		 	1.33
 	},
 	{
 		id: 			"60",
 		name: 			"Nitric Acid - 60",
 		concentration: 		60,
 		density: 		 	1.363
 	}
 	];
 	acidChoise = "";
 	acidSuggestion = {
 		concentration: 	"",
 		density: 		""
 	};

 	substrates = [
 		{
 			id : "inert",
 			label1: "Inert",
 			label2: "(Stone wool, perlite)"
 		},
 		{
 			id : "organic",
 			label1: "Organic",
 			label2: "(Coco peat)"
 		}
 	];
 	calciumChlorides =[
 	{
 		id: 					"liquid",
 		name: 					"liquid",
 		concentration: 	35,
 		density: 		 		1.33,
        label:                  "CaCl2"
 	},
 	{
 		id: 					"anhydrous",
 		name: 					"Calcium chloride anhydrous (solid)",
 		concentration: 	63.9,
 		density: 		 		"N.A.",
        label:                  "Cl"
 	},
 	{
 		id: 					"dihydrate",
 		name: 					"Calcium chloride dihydrate (solid)",
 		concentration: 	48.3,
 		density: 		 		"N.A.",
        label:                  "Cl"
 	}
 	];
 	calciumChlorideChoise = "";
 	calciumChlorideSuggestion = {
 		concentration: 	"",
 		density: 		"",
        label: "Cl"
 	};
    calciumChlorideDensityInput = true;
 	calciumNitrates =[
 	{
 		id: 				"ultrasolcalcium",
 		name: 				"Ultrasol Calcium (15.5% N-26% CaO)",
 		concentration: 		"N.A.",
 		density: 			"N.A."
 	},
 	{
 		id:					"liquidcalcium",
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
    calciumNitrateInputs = true;
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
 	},
     {
         id:                    "-1",
         name:                "Other",
         concentration:     0
     }
 	];
 	ironChelateChoise = "";
 	ironChelateSuggestion = {
 		concentration: 	"",
 		density: 		""
 	};

 	data = {
 		ECValue: 			1.5,
 		sizeTank: 			1000,
 		dilutionFactor: 	100,
 		substrate: 			"organic",
 		acidSource: 			{
 			id: 			"",
 			name: 			"",
 			concentration: 	0.0,
 			density: 		0.0
 		},
 		calciumChlorideSource:	{
 			id: 			"",
 			name:			"",
 			concentration: 	0.0,
 			density: 		0.0
 		},
 		calciumNitrateSource: {
 			id: 			"",
 			name:			"",
 			concentration: 	0,
 			density: 		0
 		},
 		ironChelateSource:    {
 			id: 			"",
 			name:			"",
 			concentration: 	0
 		}
 	};

    targetEC = 0;

 	constructor(public navCtrl: NavController, 
                public tempProgramProvider : TempProgramProvider,
                private pagesProvider: PagesProvider) { 
        this.data = tempProgramProvider.getInstance().analysisInformation;
        
        this.tempProgramProvider.getInstance().setBaseValues();
        this.targetEC = this.tempProgramProvider.getInstance().ECValues.standardEC;
        console.log("targetEC",this.targetEC);
        console.log("temp program",this.tempProgramProvider.getInstance());
        console.log(this.data.substrate);
        this.data.ECValue = this.targetEC;

        if (this.data.acidSource.id!="") {
            console.log("acidSource !=''");
            this.acidChoise = this.data.acidSource.id;
            console.log(">> acidChoise: " + this.acidChoise);            
        }
        if (this.data.calciumChlorideSource.id!="") {
            console.log("calciumChlorideSource !=''");
            this.calciumChlorideChoise = this.data.calciumChlorideSource.id;
             console.log(">> calciumChlorideChoise: " + this.calciumChlorideChoise);             
        }
        if (this.data.calciumNitrateSource.id!="") {
            console.log("calciumNitrateSource !=''");
            this.calciumNitrateChoise = this.data.calciumNitrateSource.id;
             console.log(">> calciumNitrateChoise: " + this.calciumNitrateChoise);             
        }
        if (this.data.ironChelateSource.id!="") {
            console.log("ironChelateSource !=''");
            this.ironChelateChoise = this.data.ironChelateSource.id;
             console.log(">> ironChelateChoise: " + this.ironChelateChoise);             
        }
         
         
 	}






 	changeSubstrate(){
 		console.log("changeSubstrate");
 		this.tempProgramProvider.getInstance().setBaseValues();
        this.targetEC = this.tempProgramProvider.getInstance().ECValues.standardEC;
        console.log("targetEC",this.targetEC);
        console.log("temp program",this.tempProgramProvider.getInstance());
        console.log(this.data.substrate);


 	}
 	changeAcid(){
 		console.log("acidChoise: " + this.acidChoise);

 		for (var i = 0; i< this.acids.length; i++) {
 			console.log("acid ID: " + this.acids[i].id);
 			if (this.acids[i].id == this.acidChoise.toString()){
 				console.log("true");
 				this.data.acidSource = this.acids[i];
 				console.log(this.data.acidSource);
 				if(this.acids[i].concentration != null ){
 					this.acidSuggestion.concentration = this.acids[i].concentration.toString();	
 				}
 				if(this.acids[i].density != null ){
 					this.acidSuggestion.density = this.acids[i].density.toString();	
 				} 				
				return;
 			}
 		}
 		this.updateProgramInformation();
 	}

 	changeCalciumChloride(){
 		console.log("calciumChlorideChoise: " + this.calciumChlorideChoise);
 		this.calciumChlorideSuggestion.concentration = "";
 		this.calciumChlorideSuggestion.density 	     = "";
        this.calciumChlorideSuggestion.label          = "";
 		for (var i = 0; i< this.calciumChlorides.length; i++) {
 			console.log("acid ID: " + this.calciumChlorides[i].id);
            //copy object calciumChloride compare with the id of calcium chloride selected
 			if (this.calciumChlorides[i].id == this.calciumChlorideChoise.toString()){
 				console.log("true");
 				
                 this.data.calciumChlorideSource.id = this.calciumChlorides[i].id;
                 this.data.calciumChlorideSource.name = this.calciumChlorides[i].name;
                 this.data.calciumChlorideSource.density = parseFloat(this.calciumChlorides[i].density.toString());
                 this.data.calciumChlorideSource.concentration = this.calciumChlorides[i].concentration;


 				console.log(this.data.calciumChlorideSource);
 				this.calciumChlorideSuggestion.concentration = this.calciumChlorides[i].concentration.toString();
 				this.calciumChlorideSuggestion.density 	     = this.calciumChlorides[i].density.toString();
                this.calciumChlorideSuggestion.label         = this.calciumChlorides[i].label;

                if(this.data.calciumChlorideSource.id !="liquid") {
                   this.calciumChlorideDensityInput = false;

                }
                else{
                    this.calciumChlorideDensityInput = true;
                }
 				return;
 			}
 		}
 		this.updateProgramInformation();
 	}
 	changeCalciumNitatre(){
 		console.log("calciumNitrateChoise: " + this.calciumNitrateChoise);

 		for (var i = 0; i< this.calciumNitrates.length; i++) {
 			console.log("calcium nitrate ID: " + this.calciumNitrates[i].id);
 			if (this.calciumNitrates[i].id == this.calciumNitrateChoise.toString()){
 				console.log("true");
 				this.data.calciumNitrateSource.id = this.calciumNitrates[i].id;
                this.data.calciumNitrateSource.name = this.calciumNitrates[i].name;
                this.data.calciumNitrateSource.density = parseFloat(this.calciumNitrates[i].density.toString());
                
                if(this.data.calciumNitrateSource.id !="ultrasolcalcium") {
                  this.calciumNitrateInputs = true;
                  this.data.calciumNitrateSource.concentration = parseFloat( this.calciumNitrates[i].concentration.toString());
                }else{
                  this.calciumNitrateInputs = false;
                  this.data.calciumNitrateSource.concentration = 0;
                  
                }              
 				

                console.log(this.data.calciumNitrateSource);
 				
                this.calciumNitrateSuggestion.concentration = this.calciumNitrates[i].concentration.toString();
 				this.calciumNitrateSuggestion.density       = this.calciumNitrates[i].density.toString();
 				return;
 			}
 		}
 		this.updateProgramInformation();
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
 		this.updateProgramInformation();//
 	}

 	updateProgramInformation (){
        console.log("updateProgramInformation");
        this.tempProgramProvider.getInstance().analysisInformation = this.data;
    }

     addWaterAnalysis() {
         this.updateProgramInformation();
         this.pagesProvider.setActivePage(NewWaterAnalysis); 
         this.navCtrl.push(NewWaterAnalysis);
     }

    goToFertigationProgram(){
    	this.updateProgramInformation();
        var resultPage = { title: 'Fertigation Programme', component: TabsResultPage, iconClass: 'iconprogramme'   };
        this.pagesProvider.add(resultPage);
        this.pagesProvider.setActivePage(resultPage); 
        this.navCtrl.push(resultPage.component);
    }

    


 }
