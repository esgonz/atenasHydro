import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { TabResultBasic } from '../pages';
import { TabResultWater } from '../pages';
import { TabResultSolution } from '../pages';
import { TabResultScheme } from '../pages';
@Component({
  selector: 'page-tabs-results',
  templateUrl: 'tabs-results.html'
})
export class TabsResultPage {
  tabResultBasic: any    = TabResultBasic;
  tabResultWater: any    = TabResultWater;
  tabResultSolution: any = TabResultSolution;
  tabResultScheme: any   = TabResultScheme;
  tab5Root: any = null;

  tabResultBasicTitle = " ";
  tabResultWaterTitle = " ";
  tabResultSolutionTitle = " ";
  tabResultSchemeTitle = " ";
  tab5Title = " ";

  constructor(public navCtrl: NavController) {

	  this.tabResultBasicTitle = "Grower Info";
    this.tabResultWaterTitle = "Water analysis";
    this.tabResultSolutionTitle = "Fertigation solution";
    this.tabResultSchemeTitle = "Fertigation scheme";
    /*this.tab5Title = "Send recommendation";*/
  }
}
