import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';


@Injectable()
export class PagesProvider {

  pages: any [] = [];
  
  activePage : any;
  constructor() {
  }

  add(page: any) {
  	var exists = false;
  	if (this.pages.length >0 ) {
  		for (var i = this.pages.length - 1; i >= 0; i--) {
  			if (this.pages[i].title == page.title) {
  				exists = true;
  			}
  		}
  		if (!exists) {
  			this.pages.push(page);
  		}

  	}else{
  		this.pages.push(page);
  	}
    
  }

  delete(page: any) {
    this.pages.reduce(page);
  }

  getInstance(){
  	return this.pages;
  }

  setActivePage(page){
  	this.activePage = page;
  };

  checkActivePage(page){
  	return page == this.activePage;
  }
}
