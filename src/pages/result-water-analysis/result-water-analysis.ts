import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { TempProgramProvider } from '../../providers/temp-program';
import { FormulasProvider } from '../../providers/formulas';
@Component({
  selector: 'tab-result-water-analysis',
  templateUrl: 'result-water-analysis.html'
})
export class ResultWaterAnalysis {


  constructor(public navCtrl: NavController, 
		public tempProgramProvider : TempProgramProvider, public formulasProvider : FormulasProvider ){
   		
   		
   		
  }
}
