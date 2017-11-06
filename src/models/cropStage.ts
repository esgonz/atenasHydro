/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class CropStage {
	id 			    = "";
	name 		    = "";
	corrections     = {
        macroElements: {
            no3: 0,
            h2po4: 0,
            sso4: 0,
            nh4: 0,
            k: 0,
            ca: 0,
            mg: 0
        },
        traceElements: {
            fe: 0,
            b:  0,
            mn: 0,
            zn: 0,
            cu: 0,
            mo: 0
        }
  };

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }

  }

  createTable(){
  	
  	var stringQuery = "CREATE TABLE IF NOT EXISTS crop (id INTEGER PRIMARY KEY AUTOINCREMENT , " +
  			"formulaId TEXT, " +
  			"formulaName TEXT, " +
  			"formulaObject TEXT" +
  			");"
  }

  poblateTable(){
  }
}
