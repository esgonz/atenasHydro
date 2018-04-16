import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { TempProgramProvider } from '../../providers/temp-program';
import { LoginProvider } from '../../providers/login';
import { PagesProvider } from '../../providers/pages';  

@Component({
  selector: 'tab-result-scheme',
  templateUrl: 'result-scheme.html'
})
export class ResultScheme {
	bg = 0;
  constructor( 
    public navCtrl: NavController, 
    public tempProgramProvider : TempProgramProvider ) { 
    	
    	tempProgramProvider.getDataSchemeResult();
  }

  ngOnInit(){
  }

  getBgColor(){


  	return "backtable";
  	/*if(this.bg == 0) {
  		this.bg = 1;
  		return "backtable";
  	}else{
  		this.bg = 0;
  		return "backtablecolor";
  	}*/
  }


}
