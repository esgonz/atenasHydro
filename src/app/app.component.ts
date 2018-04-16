import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Config} from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



/*Import pages*/
import { SplashScreen } from '@ionic-native/splash-screen';

import { NewWaterAnalysis } from '../pages/new-water-analysis/new-water-analysis';


import { PreviousList} from '../pages/previous-list/previous-list';


import { LoginPage } from '../pages/login/login';
import { Disclaimer } from '../pages/disclaimer/disclaimer'
/*imports providersa y usefuls classs*/
import { TranslateService } from '@ngx-translate/core';
import { CropsProvider } from '../providers/crops';
import { TempProgramProvider } from '../providers/temp-program';
import { FormulasProvider } from '../providers/formulas';
import { PagesProvider } from '../providers/pages';
import { ProgramsProvider } from '../providers/programs/programs';
import { LoginProvider } from '../providers/login';
import { DisclaimerProvider } from '../providers/disclaimer';
import { SplitPaneProvider } from '../providers/splitPane';
@Component({
  templateUrl:'app.html'
})
export class MyApp {
  rootPage = Disclaimer;

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
      private platform: Platform, 
      private config: Config, 
      private splashScreen: SplashScreen, 
      private tempProgramProvider: TempProgramProvider, 
      private pagesProvider: PagesProvider, 
      private cropsProvider: CropsProvider, 
      private formulasProvider: FormulasProvider,
      public sqlite: SQLite,
      public programsProvider: ProgramsProvider,
      public loginProvider: LoginProvider, 
      public discProvider : DisclaimerProvider,
      public splitPaneProvider : SplitPaneProvider
  ) {
    this.splashScreen.show();
    this.initApp()

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
        
      })
      .catch(error =>{
        console.log("create db error");
        console.error(error);
      });
      
      this.initDisclaimer()
          .then((value : any) => {
            console.log("get disclaimer return value");
            if(value) {
              console.log("initDisclaimer - disclaimer true");
              this.initLogin()
                .then((value : any) => {
                  console.log("get login return value");

                  this.loginProvider.login = value;

                  console.log("*login obj: ",this.loginProvider.login);   
                  if(this.loginProvider.login.status) {
                    console.log("initLogin - login true");
                    this.splashScreen.hide();
                    var initPage = { title: 'Previous Recommendations', component: PreviousList, iconClass: 'icongrower' };
                    this.setInitPageMenu(initPage);
                    this.nav.setRoot(initPage.component);


                  }else{
                    this.splashScreen.hide();
                     console.log("initLogin - login false");                      
                     this.nav.setRoot(LoginPage);
                  }
                })
                .catch((error : any)=> {
                  this.splashScreen.hide();
                  console.log("error constructor login. not get login");
                });         
            }else{
              this.splashScreen.hide();
               console.log("initLogin - disclaimer false");            
               this.nav.setRoot(Disclaimer); 
            }
          })
          .catch((error : any)=> {
            console.log("error constructor Disclaimer. not get disclaimer");
          });
      
          

          this.initTranslate();
          this.initTempProgramProvider();
          this.initPagesProvider();
          this.initCropsProvider();
          this.initFormulasProvider();
          
    
    
  }

  initApp(){
    console.log("initApp");
    console.log("Create DB");
    
    return this.sqlite.create({
      name: 'sqmhydrocalq.db',
      location: 'default' // the location field is required
    })
    
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("ionViewDidLoad platform ready");      
      //this.splashScreen.hide();
      //this.nav.setRoot(this.rootPage);
    });
  }

  initPagesProvider(){
    //var initPage = { title: 'Previous Recommendations', component: this.rootPage, iconClass: 'icongrower' };
    //this.pagesProvider.add(initPage);
    //this.pagesProvider.setActivePage(initPage);
    //this.pagesProvider.setRootPage(initPage);
    //this.pages = this.pagesProvider.getInstance();
    //
    //set login page
    var loginPage = { title: 'Login', component: LoginPage, iconClass: '' };
            this.pagesProvider.setLoginPage(loginPage);
  }

  initDisclaimer(){
    console.log("initDisclaimer");

    return this.discProvider.getDisclaimer()   


  }
  initLogin(){
    console.log("initLogin");

    return this.loginProvider.getLogin()   


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

  setInitPageMenu(initPage){
      console.log("setInitPageMenu")
           
            this.pagesProvider.add(initPage);
            this.pagesProvider.setActivePage(initPage);
            this.pagesProvider.setRootPage(initPage);

    this.nav.setRoot(initPage.component);
  }

}
