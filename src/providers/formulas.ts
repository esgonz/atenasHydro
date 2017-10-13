import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Formula } from '../models/formula';

@Injectable()
export class FormulasProvider {
 
  //public data: Formula;
  public instance: Formula[] = [];
  public formulasDict = {};
  
  constructor(private http: Http) {
    this.instance = null;
  }
  /*
  Init Formula data from assets JSON with formulas

   */
  init() {
    console.log("FormulasProvider", "init provider");
    if (this.instance) {
      console.log("data exits, return promise");
      return Promise.resolve(this.instance);
    }
 
    return new Promise(resolve => {
      this.http.get('assets/data/formulas.json')
        .map(res => res.json())
        .subscribe(data => {
          console.log("data subscribe, resolve");
          
          
          //this.instance = data;
          var arrayNewFormulas = [];
          
          for (var i = data.length - 1; i >= 0; i--) {
            arrayNewFormulas.push(new Formula (data[i]));
          }
          this.instance = arrayNewFormulas;
          this.setDictionary();
          console.log("data PROMISE", this.instance);
          resolve(this.instance);
        });
    });
  }

  /*
  getInstance Get the instance with formulas data.
   */
  getInstance (){
    console.log("FormulasProvider", "getInstance");
    return this.instance;
  }


  /*
  setDictionary transform array with crops in a Dictionary 
  key->value object where the key it is the id
   */
  setDictionary (){
    console.log("FormulasProvider", "setDictionary");
    for (var i = this.instance.length - 1; i >= 0; i--) {
      this.formulasDict[this.instance[i].id] = new Formula (this.instance[i]);
    }
  }

  /*
  getAllFormulas return array with all Formulas
  return formula Array
   */
  getAllFormulas(){
    console.log("FormulasProvider", "getAllCrops");
    var arrayNewFormulas = [];
    for (var i = this.instance.length - 1; i >= 0; i--) {
      arrayNewFormulas.push(new Formula (this.instance[i]));
    }
    
    return arrayNewFormulas;
  }


  /* 
    getFormulaById get formula by id from the dictionary
    @param id target id for the search
    return formula Object 
  */
  getFormulaById(id){
    console.log("FormulasProvider", "getFormulaById: " + id);
    console.log("FormulasProvider", this.formulasDict[id]);
    return this.formulasDict[id];
  }
}
