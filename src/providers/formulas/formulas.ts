import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Formula } from '../../models/formula';
import 'rxjs/add/operator/map';

/*
  Generated class for the FormulasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FormulasProvider {

	formulas = [
	]
  constructor(public http: Http, public sQLite : SQLite, public sqLiteObject : SQLiteObject) {
    console.log('Hello FormulasProvider Provider');
  }


  load(){
  	var url = 'assets/data/Items.json'; 
  };	
  addItem(){

  };
  getItem(id){

  };
  updateItem(id){

  };
  deleteItem(id){

  };







}
