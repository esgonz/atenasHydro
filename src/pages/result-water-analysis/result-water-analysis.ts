import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ProgramProvider } from '../../providers/programs';
import { FormulasProvider } from '../../providers/formulas';
@Component({
  selector: 'tab-result-water-analysis',
  templateUrl: 'result-water-analysis.html'
})
export class ResultWaterAnalysis {


  constructor(public navCtrl: NavController, 
		public programProvider : ProgramProvider, public formulasProvider : FormulasProvider ){
   		
   		programProvider.setCalculationsValues(formulasProvider);
  }
}
