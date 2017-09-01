import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



/*Import pages*/
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewAnalysisInformation } from '../pages/new-analysis-information/new-analysis-information';
import { NewWaterAnalysis } from '../pages/new-water-analysis/new-water-analysis';
import { NewBasicInformation } from '../pages/new-basic-information/new-basic-information';
import { NewCropSelect } from '../pages/new-crop-select/new-crop-select';

import { FertigationprogrameGrowerinfo } from '../pages/fertigationprograme-growerinfo/fertigationprograme-growerinfo';


/*imports providers y usefuls classs*/
import { Settings } from '../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { CropsStages } from '../providers/cropsStages';
import { ProgramProvider } from '../providers/programs';

@Component({
  templateUrl:'app.html'
})
export class MyApp {
  rootPage = NewBasicInformation;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Add new recommendation', component: NewBasicInformation, iconClass: 'icongrower' },
    { title: 'Select crop and growth stage', component: NewCropSelect, iconClass: 'icongrow'  },
    { title: 'Input Data Table', component: NewAnalysisInformation,  iconClass: 'iconinput'  },
    { title: 'Add Water Analysis', component: NewWaterAnalysis, iconClass: 'iconwatter'   }
  ]

  constructor(private translate: TranslateService, private platform: Platform, settings: Settings, 
            private config: Config, private splashScreen: SplashScreen, private programProvider: ProgramProvider) {
    this.initTranslate();
    this.initProgramProvider();
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.nav.setRoot(this.rootPage);
    });
  }


  initProgramProvider(){
    this.programProvider.init();
  }
  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('es'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);    
    this.nav.push(page.component);
  }
}
