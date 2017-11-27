import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



/*Import pages*/
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewAnalysisInformation } from '../pages/new-analysis-information/new-analysis-information';
import { NewWaterAnalysis } from '../pages/new-water-analysis/new-water-analysis';
import { NewBasicInformation } from '../pages/new-basic-information/new-basic-information';
import { NewCropSelect } from '../pages/new-crop-select/new-crop-select';
import { PreviousList} from '../pages/previous-list/previous-list';
import { ResultWaterAnalysis } from '../pages/result-water-analysis/result-water-analysis';
import { ResultBasic } from '../pages/result-basic/result-basic';
import { ResultSolution } from '../pages/result-solution/result-solution';
import { TabsResultPage } from '../pages/tabs-results/tabs-results';

/*imports providersa y usefuls classs*/
import { Settings } from '../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { CropsProvider } from '../providers/crops';
import { TempProgramProvider } from '../providers/temp-program';
import { FormulasProvider } from '../providers/formulas';
import { PagesProvider } from '../providers/pages';
import { ProgramsProvider } from '../providers/programs/programs';
@Component({
  templateUrl:'app.html'
})
export class MyApp {
  rootPage = PreviousList;

  @ViewChild(Nav) nav: Nav;

  /*pages: any[] = [
    { title: 'Add new recommendation', component: NewBasicInformation, iconClass: 'icongrower' },
    { title: 'Select crop and growth stage', component: NewCropSelect, iconClass: 'icongrow'  },
    { title: 'Input Data Table', component: NewAnalysisInformation,  iconClass: 'iconinput'  },
    { title: 'Add Water Analysis', component: NewWaterAnalysis, iconClass: 'iconwatter'   },
    { title: 'Fertigation Programe.', component: TabsResultPage, iconClass: 'iconwatter'   }
  ]*/
  pages: any[] = [];

  constructor(
      private translate: TranslateService, 
      private platform: Platform, settings: Settings, 
      private config: Config, 
      private splashScreen: SplashScreen, 
      private tempProgramProvider: TempProgramProvider, 
      private pagesProvider: PagesProvider, 
      private cropsProvider: CropsProvider, 
      private formulasProvider: FormulasProvider,
      public sqlite: SQLite,
      public programsProvider: ProgramsProvider
  ) {
    this.initTranslate();
    this.initTempProgramProvider();
    this.initPagesProvider();
    this.initCropsProvider();
    this.initFormulasProvider();
    this.initApp();
  }

  initApp(){
    console.log("initApp");
    console.log("Create DB");
    
    this.sqlite.create({
      name: 'sqmhydrocalq.db',
      location: 'default' // the location field is required
    })
    .then((db: SQLiteObject) => {
      console.log("create db ok");
      this.programsProvider.setDatabase(db);
      return this.programsProvider.createTable().then(
        () => console.log('Executed createTable SQL')
      )
      .catch(e => console.log(e));
    })
    .then(() =>{
      console.log("create set nav root ok");
      this.splashScreen.hide();
      this.nav.setRoot(this.rootPage);
    })
    .catch(error =>{
      console.log("create db error");
      console.error(error);
    });
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("ionViewDidLoad platform ready");      
      this.splashScreen.hide();
      this.nav.setRoot(this.rootPage);
    });
  }

  initPagesProvider(){
    var initPage = { title: 'Previous Recommendations', component: this.rootPage, iconClass: 'icongrower' };
    this.pagesProvider.add(initPage);
    this.pagesProvider.setActivePage(initPage);
    this.pagesProvider.setRootPage(initPage);
    //this.pages = this.pagesProvider.getInstance();
  }
  initTempProgramProvider(){
    console.log("initTempProgramProvider");
    this.tempProgramProvider.init();
  }

  initCropsProvider(){
    this.cropsProvider.init().then(function (data){
            console.log("data crops loaded");
            
    });

  }

  initFormulasProvider(){
    this.formulasProvider.init().then(function (data){
            console.log("data formulas loaded");
            
    });
  }
  setCropsDictionary(){
    this.cropsProvider.setDictionary();
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
    this.pagesProvider.setActivePage(page);    
    this.nav.push(page.component);
  }


}
