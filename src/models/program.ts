/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Program {
	id 					= "";
	basicInformation 	= { 	
	 	name 		: "",
	 	company 	: "",
	 	sectorId 	: "",
	 	date 		: "",
	 	email 		: ""
 	};
 	cropInformation 	= {
 		cropObj: null,
 		stageId: null,
 	};
 	analysisInformation = {
 		ECValue: 				1.5,
 		sizeTank: 				1000,
 		dilutionFactor: 		100,
 		substrate: 				"",
 		acidSource: 			{
 			id: 			"",
 			name: 			"",
 			concentration: 	0.0,
 			density: 		null
 		},
 		calciumChlorideSource:	{
 			id: 			"",
 			name:			"",
 			concentration: 	0.0,
 			density: 		null
 		},
 		calciumNitrateSource: {
 			id: 			"",
 			name:			"",
 			concentration: 	null,
 			density: 		null
 		},
 		ironChelateSource:    {
 			id: 			"",
 			name:			"",
 			concentration: 	0.0
 		}
 	};
 	waterAnalysisInformation = {
 		unit: "mgl",
 		balance: 0.00,
 		nnh4: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		nno3: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		p: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		k: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		ca: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		mg: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		na: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		cl: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		sso4: {
 			mgl: 	0.00,
 			mmoll: 	0.00
 		},
 		fe: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		mn: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		zn: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		cu: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		b: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		mo: {
 			mgl: 	0.00,
 			mmoll: 	0.00,
 			umoll: 0.00
 		},
 		hco3: {
 			mgl: 	0.00,
 			mmoll: 	0.00

 		},
 		ph: 0.00,
 		ec: 0.00
 	}




  constructor(private fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }


  }

  


}
