import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class SplitPaneProvider {

  public shouldShow = false;
  
  constructor( public platform : Platform) {
         
  }


  setShow(value : boolean){
  	if(!this.platform.is('tablet')) {
  		this.shouldShow = value;
  	}else{
  		this.shouldShow = false;
  	}
    
  }
}
