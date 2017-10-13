import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { MyApp } from './app.component';

/*Import pages*/
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewAnalysisInformation } from '../pages/new-analysis-information/new-analysis-information';
import { NewWaterAnalysis } from '../pages/new-water-analysis/new-water-analysis';
import { NewBasicInformation } from '../pages/new-basic-information/new-basic-information';
import { NewCropSelect } from '../pages/new-crop-select/new-crop-select';

/*Import tab page*/
import { TabsResultPage } from '../pages/tabs-results/tabs-results';
import { ResultBasic } from '../pages/result-basic/result-basic';
import { ResultWaterAnalysis } from '../pages/result-water-analysis/result-water-analysis';

import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';
import { FormulasProvider } from '../providers/formulas';
import { CropsProvider} from '../providers/crops';
import { ProgramProvider } from '../providers/programs';
import { PagesProvider } from '../providers/pages';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    NewAnalysisInformation,
    NewBasicInformation,
    NewCropSelect,
    NewWaterAnalysis,    
    ResultBasic,
    ResultWaterAnalysis,
    TabsResultPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewAnalysisInformation,
    NewBasicInformation,
    NewCropSelect,
    NewWaterAnalysis,   
    ResultBasic,
    ResultWaterAnalysis,
    TabsResultPage
  
  ],
  providers: [
    Api,
    SplashScreen,
    SQLite,
    FormulasProvider,
    CropsProvider,
    ProgramProvider,
    PagesProvider,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
