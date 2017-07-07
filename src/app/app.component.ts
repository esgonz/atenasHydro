import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { FirstRunPage } from '../pages/pages';
import { ListMasterPage } from '../pages/list-master/list-master';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { MenuPage } from '../pages/menu/menu';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { InputData } from '../pages/input-data/input-data';
import { InputDataTable } from '../pages/input-data-table/input-data-table';
import { InicioWelcome } from '../pages/inicio-welcome/inicio-welcome';
import { Disclaimer } from '../pages/disclaimer/disclaimer';
import { PreviousRecommendation } from '../pages/previous-recommendation/previous-recommendation';
import { AddNewRecommendation } from '../pages/add-new-recommendation/add-new-recommendation';
import { SelectCropGrowth } from '../pages/select-crop-growth/select-crop-growth';
import { AddWaterAnalysis } from '../pages/add-water-analysis/add-water-analysis';
import { FertigationprogrameGrowerinfo } from '../pages/fertigationprograme-growerinfo/fertigationprograme-growerinfo';
import { ResultOfWaterAnalysis } from '../pages/result-of-water-analysis/result-of-water-analysis';
import { ResultOfFertigationSolution } from '../pages/result-of-fertigation-solution/result-of-fertigation-solution';
import { ResultOfFertigationScheme } from '../pages/result-of-fertigation-scheme/result-of-fertigation-scheme';

import { Settings } from '../providers/providers';

import { TranslateService } from '@ngx-translate/core'

@Component({
  templateUrl:'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Input Data Table', component: InputDataTable },
    { title: 'Add Water Analysis', component: AddWaterAnalysis }

  ]

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initTranslate();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
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
