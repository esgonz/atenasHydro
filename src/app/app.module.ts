import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage, IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioWelcome } from '../pages/inicio-welcome/inicio-welcome';
import { Disclaimer } from '../pages/disclaimer/disclaimer';
import { FertigationprogrameGrowerinfo } from '../pages/fertigationprograme-growerinfo/fertigationprograme-growerinfo';
import { PreviousRecommendation } from '../pages/previous-recommendation/previous-recommendation';
import { AddNewRecommendation } from '../pages/add-new-recommendation/add-new-recommendation';
import { SelectCropGrowth } from '../pages/select-crop-growth/select-crop-growth';
import { InputDataTable } from '../pages/input-data-table/input-data-table';
import { AddWaterAnalysis } from '../pages/add-water-analysis/add-water-analysis';

import {ResultOfFertigationScheme} from '../pages/result-of-fertigation-scheme/result-of-fertigation-scheme';
import {ResultOfFertigationSolution} from '../pages/result-of-fertigation-solution/result-of-fertigation-solution';
import {ResultOfWaterAnalysis} from '../pages/result-of-water-analysis/result-of-water-analysis';

import {TabsPage} from '../pages/tabs/tabs';

import {TabsPrev} from '../pages/tabsprev/tabsprev';

import {PrevResultOfFertigationScheme} from '../pages/prev-result-of-fertigation-scheme/prev-result-of-fertigation-scheme';
import {PrevResultOfFertigationSolution} from '../pages/prev-result-of-fertigation-solution/prev-result-of-fertigation-solution';
import {PrevResultOfWaterAnalysis} from '../pages/prev-result-of-water-analysis/prev-result-of-water-analysis';
import { PrevFertigationprogrameGrowerinfo } from '../pages/prev-fertigationprograme-growerinfo/prev-fertigationprograme-growerinfo';


import { Api } from '../providers/api';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/settings';
import { User } from '../providers/user';



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
    InputDataTable,
    InicioWelcome,
    Disclaimer,
    PreviousRecommendation,
    AddNewRecommendation,
    SelectCropGrowth,
    AddWaterAnalysis,
    FertigationprogrameGrowerinfo,
    ResultOfFertigationScheme,
    ResultOfFertigationSolution,
    ResultOfWaterAnalysis,
    TabsPage,
    TabsPrev,
    PrevFertigationprogrameGrowerinfo,
    PrevResultOfFertigationScheme,
    PrevResultOfFertigationSolution,
    PrevResultOfWaterAnalysis
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
    InputDataTable,
    InicioWelcome,
    Disclaimer,
    PreviousRecommendation,
    AddNewRecommendation,
    SelectCropGrowth,
    AddWaterAnalysis,
    FertigationprogrameGrowerinfo,    
    ResultOfFertigationScheme,
    ResultOfFertigationSolution,
    ResultOfWaterAnalysis,
    TabsPage,
    TabsPrev,
    PrevFertigationprogrameGrowerinfo,
    PrevResultOfFertigationScheme,
    PrevResultOfFertigationSolution,
    PrevResultOfWaterAnalysis
  ],
  providers: [
    Api,
    Items,
    User,
    SplashScreen,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
