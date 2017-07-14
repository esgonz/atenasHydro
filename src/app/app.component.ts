import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';


import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioWelcome } from '../pages/inicio-welcome/inicio-welcome';
import { Disclaimer } from '../pages/disclaimer/disclaimer';
import { FertigationprogrameGrowerinfo } from '../pages/fertigationprograme-growerinfo/fertigationprograme-growerinfo';
import { PreviousRecommendation } from '../pages/previous-recommendation/previous-recommendation';
import { AddNewRecommendation } from '../pages/add-new-recommendation/add-new-recommendation';
import { SelectCropGrowth } from '../pages/select-crop-growth/select-crop-growth';
import { InputDataTable } from '../pages/input-data-table/input-data-table';
import { AddWaterAnalysis } from '../pages/add-water-analysis/add-water-analysis';



import {PrevFertigationprogrameGrowerinfo} from '../pages/prev-fertigationprograme-growerinfo/prev-fertigationprograme-growerinfo';
import {ResultOfFertigationScheme} from '../pages/result-of-fertigation-scheme/result-of-fertigation-scheme';
import {ResultOfFertigationSolution} from '../pages/result-of-fertigation-solution/result-of-fertigation-solution';
import {ResultOfWaterAnalysis} from '../pages/result-of-water-analysis/result-of-water-analysis';

import {TabsPage} from '../pages/tabs/tabs';

import {TabsPrev} from '../pages/tabsprev/tabsprev';

import { Settings } from '../providers/providers';
import { TranslateService } from '@ngx-translate/core'

@Component({
  templateUrl:'app.html'
})
export class MyApp {
  rootPage = TabsPrev;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Input Data Table', component: InputDataTable },
    { title: 'Add Water Analysis', component: AddWaterAnalysis }
  ]

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, 
            private config: Config, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
