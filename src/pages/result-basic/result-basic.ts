import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { ProgramProvider } from '../../providers/programs';
import { FormulasProvider } from '../../providers/formulas';

@Component({
	selector: 'tab-result-basic',
	templateUrl: 'result-basic.html'
})
export class ResultBasic implements OnInit{


	constructor( public navCtrl: NavController, 
		public programProvider : ProgramProvider, public formulasProvider : FormulasProvider) { 
		
		programProvider.setCalculationsValues(formulasProvider);
	}

	ngOnInit(){
    }
}
