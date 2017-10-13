import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { TabResultBasic } from '../pages';
import { TabResultWater } from '../pages';
import { TabResultSolution } from '../pages';

@Component({
  selector: 'page-tabs-results',
  templateUrl: 'tabs-results.html'
})
export class TabsResultPage {
  tabResultBasic: any    = TabResultBasic;
  tabResultWater: any    = TabResultWater;
  tabResultSolution: any = TabResultSolution;
  tab4Root: any = null;
  tab5Root: any = null;

  tabResultBasicTitle = " ";
  tabResultWaterTitle = " ";
  tabResultSolutionTitle = " ";
  tab4Title = " ";
  tab5Title = " ";

  constructor(public navCtrl: NavController) {

	  this.tabResultBasicTitle = "Grower Info";
    this.tabResultWaterTitle = "Water analysis";
    /*this.tabResultSolutionTitle = "Fertigation solution";
    this.tab4Title = "Fertigation scheme";
    this.tab5Title = "Send recommendation";*/
  }
}
