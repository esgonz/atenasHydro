import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



/*Import pages*/
import { SplashScreen } from '@ionic-native/splash-screen';
import { InputDataTable } from '../pages/input-data-table/input-data-table';
import { AddWaterAnalysis } from '../pages/add-water-analysis/add-water-analysis';
import { AddNewRecommendation } from '../pages/add-new-recommendation/add-new-recommendation';
import { SelectCropGrowth } from '../pages/select-crop-growth/select-crop-growth';

/*imports providers y usefuls classs*/
import { Settings } from '../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { Crops } from '../providers/crops';

@Component({
  templateUrl:'app.html'
})
export class MyApp {
  rootPage = AddNewRecommendation;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Add new recommendation', component: AddNewRecommendation, iconClass: 'icongrower' },
    { title: 'Select crop and growth stage', component: SelectCropGrowth, iconClass: 'icongrow'  },
    { title: 'Input Data Table', component: InputDataTable,  iconClass: 'iconinput'  },
    { title: 'Add Water Analysis', component: AddWaterAnalysis, iconClass: 'iconwatter'   }  

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
      this.nav.setRoot(this.rootPage);
    });
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
