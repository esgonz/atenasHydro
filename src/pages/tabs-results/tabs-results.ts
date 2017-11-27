import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { TabResultBasic } from '../pages';
import { TabResultWater } from '../pages';
import { TabResultSolution } from '../pages';
import { TabResultScheme } from '../pages';

import { TempProgramProvider } from '../../providers/temp-program';
import { ProgramsProvider } from '../../providers/programs/programs';
import { PagesProvider } from '../../providers/pages';
import { FormulasProvider } from '../../providers/formulas';
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

  constructor(public navCtrl: NavController,
    public tempProgramProvider  : TempProgramProvider, 
    public programsProvider    : ProgramsProvider,
    public pagesProvider: PagesProvider, 
    public formulasProvider   : FormulasProvider
    ) {

	  this.tabResultBasicTitle = "Grower Info";
    this.tabResultWaterTitle = "Water analysis";
    this.tabResultSolutionTitle = "Fertigation solution";
    this.tabResultSchemeTitle = "Fertigation scheme";
    /*this.tab5Title = "Send recommendation";*/

    tempProgramProvider.setCalculationsValues(formulasProvider);
  }


  saveProgram(){
    console.log("saveProgram");
    this.tempProgramProvider.saveInDB(this.programsProvider);
    for (var i = 0; i < 100; ++i) {
      //dummy wait
    }
    console.log("end wait");
    this.pagesProvider.clearList();
    this.pagesProvider.setActivePage(this.pagesProvider.rootPage.component);    
    this.navCtrl.push(this.pagesProvider.rootPage.component);
  }

}
