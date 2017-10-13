import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Tab6Root } from '../pages';
import { Tab7Root } from '../pages';
import { Tab8Root } from '../pages';
import { Tab9Root } from '../pages';
import { Tab10Root } from '../pages';

@Component({
  selector: 'page-tabsprev',
  templateUrl: 'tabsprev.html'
})
export class TabsPrev {
  tab6Root: any = Tab6Root;
  tab7Root: any = Tab7Root;
  tab8Root: any = Tab8Root;
  tab9Root: any = Tab9Root;
  tab10Root: any = Tab10Root;

  tab6Title = " ";
  tab7Title = " ";
  tab8Title = " ";
  tab9Title = " ";
  tab10Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    /* translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
    }); */
	
	this.tab6Title = "Grower Info";
    this.tab7Title = "Water analysis";
    this.tab8Title = "Fertigation solution";
    this.tab9Title = "Fertigation scheme";
    this.tab10Title = "Send recommendation";
  }
}
