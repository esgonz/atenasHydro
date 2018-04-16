import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Program } from '../../models/program';

import { TempProgramProvider } from '../../providers/temp-program';
import { FormulasProvider } from '../../providers/formulas';
import { ProgramsProvider } from '../../providers/programs/programs';
import { LoginProvider } from '../../providers/login';
import { PagesProvider } from '../../providers/pages';
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
		public programsProvider  	: ProgramsProvider,
		private pagesProvider: PagesProvider,
    	public loginProvider: LoginProvider
		) { 
		
		//tempProgramProvider.setCalculationsValues(formulasProvider);
    	//tempProgramProvider.saveInDB(programsProvider);
	}

	ngOnInit(){
    	console.log("ngOnInit")
    }


     logout(){
	  console.log("PList Page - logout");
	  this.pagesProvider.clearAll();
	  this.pagesProvider.setActivePage(this.pagesProvider.loginPage);
	  this.pagesProvider.setRootPage(this.pagesProvider.loginPage);
	  this.loginProvider.logout();  
	  this.navCtrl.setRoot(this.pagesProvider.loginPage.component);
	 }


}
