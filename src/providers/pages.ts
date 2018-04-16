import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';


@Injectable()
export class PagesProvider {

  pages: any [] = [];
  
  activePage : any;

  rootPage : any;
  loginPage : any;
  constructor() {
  }

  add(page: any) {
    console.log("PagesProvider- add")
  	var exists = false;

    // si existen + paginas
  	if (this.pages.length > 0 ) {
  		console.log("pages.length > 0: "+ this.pages.length)
      //verificar que la pagina no exista
      for (var i = this.pages.length - 1; i >= 0; i--) {
  			if (this.pages[i].title == page.title) {
          console.log("pages exits: ", this.pages[i])
  				exists = true;
  			}
  		}
      //si no existe
  		if (!exists) {
        console.log("new page: ", page)
  			this.pages.push(page);
  		}

  	}else{
      //si no existe
      console.log("pages.length < 0")
      console.log("new page: ", page)
  		this.pages.push(page);
  	}
    
  }

  setRootPage(page : any){
    console.log("PagesProvider- setRootPage")
    console.log("root page: ", page)
    this.rootPage = page;
  }


  delete(page: any) {
    this.pages.reduce(page);
  }

  clearList(){
    console.log("PagesProvider- clearList")
    
    //this.pages.length = 0;
    this.pages = [];
    this.add(this.rootPage);
  }
  
  getInstance(){
  	return this.pages;
  }

  setActivePage(page){
  	this.activePage = page;
  };

  setLoginPage(page){
    console.log("PagesProvider- setLoginPage")
    this.loginPage = page;
  };

  clearAll(){
    console.log("PagesProvider- clearList")
    
    //this.pages.length = 0;
    this.pages = [];
  }


  checkActivePage(page){
  	return page == this.activePage;
  }
}
