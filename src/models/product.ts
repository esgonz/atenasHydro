import { MacroElements } from '../models/macroelements';
import { TraceElements } from '../models/traceelements';
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Product {
	id 			= "";
	name 		= "";
	macroElements =  new MacroElements({});

	traceElements = new TraceElements({});
		


  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }


  }
  setNo3(){}
  setH2po4(){}
  setSo4(){}
  setCl(){}
  setNh4(){}
  setK(){}
  setCa(){}
  setMg(){}
  setH3o(){}
  setFe(){}
  setB(){}
  setMn(){}
  setZn(){}
  setCu(){}
  setMo(){}



  createTable(){
  	
  	var stringQuery = 
  	"CREATE TABLE IF NOT EXISTS formula (id INTEGER PRIMARY KEY AUTOINCREMENT , " +
  			"id TEXT, " 	+
  			"name TEXT, " 	+
  			"object TEXT" 	+
  	");"
  }

  poblateTable(){

  }



}
