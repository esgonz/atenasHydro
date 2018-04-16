import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { TempProgramProvider } from '../../providers/temp-program';


@Component({
  selector: 'tab-result-solution',
  templateUrl: 'result-solution.html'
})
export class ResultSolution {
  constructor( 
    public navCtrl: NavController, 
    public tempProgramProvider : TempProgramProvider) { 
    
  }

  ngOnInit(){
  }


}
