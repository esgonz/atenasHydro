/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Formula {
	id 			= "";
	name 		= "";
	ultrasol 			= "";
	macroElementsMmoll 	= {
		no3 : 	0.00,
		h2po4 : 0.00,
		so4 : 	0.00,
		cl : 	0.00,
		nh4 : 	0.00,
		k : 	0.00,
		ca : 	0.00,
		mg : 	0.00
	};

	traceElementsMmoll = {
		fe : 	0.00,
		b : 	0.00,
		mn : 	0.00,
		zn : 	0.00,
		cu : 	0.00,
		mo : 	0.00
	};

	macroElementsConcentration = {
		no3n : 	0.00,
		p2o5 : 	0.00,
		s : 	0.00,
		nh4n : 	0.00,
		k2o : 	0.00,
		cao : 	0.00,
		mgo : 	0.00,

	};

	traceElementsContentration = {
		fe : 	0.00,
		b : 	0.00,
		mn : 	0.00,
		zn : 	0.00,
		cu : 	0.00,
		mo : 	0.00
	};

	molecularWeight = {
		n: {
			ion:		0,
			element: 	14.01,
			factor:		1
		},
		no3: {
			ion: 		62,
			element: 	14.01,
			factor:		1
		},
		nh4: {
			ion: 		18,
			element: 	14.01,
			factor:		1
		},
		urea: {
			ion: 		16,
			element: 	14.01,
			factor:		1
		},
		h2po4: {
			ion: 		96.97,
			element: 	30.97,
			factor:		2.29
		},
		k: {
			ion: 		39.1,
			element: 	39.1,
			factor:		1.2
		},
		ca: {
			ion: 		40.08,
			element: 	40.08,
			factor:		1.4
		},
		mg: {
			ion: 		24.31,
			element: 	24.31,
			factor:		1.66
		},
		so4: {
			ion: 		96.06,
			element: 	32.06,
			factor:		1
		},
		fe: {
			ion: 		55.85,
			element: 	55.85,
			factor:		1
		},
		mn: {
			ion: 		54.94,
			element: 	54.94,
			factor:		1
		},
		zn: {
			ion: 		65.39,
			element: 	65.39,
			factor:		1
		},
		b: {
			ion: 		10.8,
			element: 	10.8,
			factor:		1
		},
		cu: {
			ion: 		63.55,
			element: 	63.55,
			factor:		1
		},
		mo: {
			ion: 		95.94,
			element: 	95.94,
			factor:		1
		},
	}

	elementRelation = {
		no3: {
			concentration: 	"no3n",
			molecular: 		"no3"
		},
		h2po4: {
			concentration: 	"p2o5",
			molecular: 		"h2po4"
		},
		so4: {
			concentration: 	"s",
			molecular: 		"so4"
		},
		cl: {
			concentration: 	"cl",
			molecular: 		"cl"
		},
		nh4: {
			concentration: 	"nh4n",
			molecular: 		"nh4"
		},
		k: {
			concentration: 	"k2o",
			molecular: 		"k"
		},
		ca: {
			concentration: 	"cao",
			molecular: 		"ca"
		},
		mg: {
			concentration: 	"mgo",
			molecular: 		"mg"
		},
		fe: {
			concentration: 	"fe",
			molecular: 		"fe"
		},
		b: {
			concentration: 	"b",
			molecular: 		"b"
		},
		mn: {
			concentration: 	"mn",
			molecular: 		"mn"
		},
		zn: {
			concentration: 	"zn",
			molecular: 		"zn"
		},
		cu: {
			concentration: 	"cu",
			molecular: 		"cu"
		},
		mo: {
			concentration: 	"mo",
			molecular: 		"mo"
		}
	}

  constructor(private fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }


  }

  calculateNpkMacroElement(element){
  	var elementConcentration 	= this.macroElementsConcentration[this.elementRelation[element].concentration];
  	var molecularObj 			= this.molecularWeight[this.elementRelation[element].molecular];
  	
  	if (elementConcentration != 0 || elementConcentration != null) {

  		//Mol. Wt. Element (g/mol) * factor 
  		var molFactor 						= molecularObj.element * molecularObj.factor ;
  		this.macroElementsMmoll[element] 	= elementConcentration * 10 /(molFactor);
  	}else{

  		this.macroElementsMmoll[element] 	= 0 ;
  	}

  }

    calculateNpkTraceElement(element){
  	var elementConcentration 	= this.traceElementsContentration[this.elementRelation[element].concentration];
  	var molecularObj 			= this.molecularWeight[this.elementRelation[element].molecular];
  	
  	if (elementConcentration != 0 || elementConcentration != null) {

  		//Mol. Wt. Element (g/mol) * factor 
  		var molFactor 						= molecularObj.element * molecularObj.factor ;
  		this.traceElementsMmoll[element] 	= elementConcentration * 10 /(molFactor);
  	}else{

  		this.traceElementsMmoll[element] 	= 0 ;
  	}

  }

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
