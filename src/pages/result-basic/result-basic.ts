import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Program } from '../../models/program';

import { TempProgramProvider } from '../../providers/temp-program';
import { FormulasProvider } from '../../providers/formulas';
import { ProgramsProvider } from '../../providers/programs/programs';
@Component({
	selector: 'tab-result-basic',
	templateUrl: 'result-basic.html'
})
export class ResultBasic implements OnInit{

  programs = Array();
  onlyReview = false;
  public firstParam;
  public secondParam;

	constructor( 
		public navCtrl: NavController, 
    public navParams: NavParams,
		public tempProgramProvider  : TempProgramProvider, 
		public formulasProvider 	: FormulasProvider,
		public programsProvider  	: ProgramsProvider
		) { 
		
		//tempProgramProvider.setCalculationsValues(formulasProvider);
    	//tempProgramProvider.saveInDB(programsProvider);
	}

	ngOnInit(){
    	console.log("ngOnInit")
    }



}
