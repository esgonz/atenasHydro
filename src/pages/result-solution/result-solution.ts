import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { ProgramProvider } from '../../providers/programs';

@Component({
  selector: 'tab-result-solution',
  templateUrl: 'result-solution.html'
})
export class ResultSolution {
  constructor( public navCtrl: NavController, 
    public programProvider : ProgramProvider) { 
    
  }

  ngOnInit(){
  }
}
