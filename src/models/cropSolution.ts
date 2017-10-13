/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class CropSolution {
  
  id             = "";
  formulaId      = "";
  substrateId    = "";
  macroElements = {
    no3: {
        value: 0,
        max: 0
    },
    h2po4: {
        value: 0,
        max: 0
    },
    so4: {
        value: 0,
        max: 0
    },
    cl: {
        value: 0,
        max: 0
    },
    nh4: {
        value: 0,
        max: 0
    },
    k: {
        value: 0,
        max: 0
    },
    ca: {
        value: 0,
        max: 0
    },
    mg: {
        value: 0,
        max: 0
    },
    kca: {
        value: 0
    }
  };
  traceElements  = {
    fe: {
        min: {
            warking: 0,
            ok: 0
        },
        normal: {
            value: 0
        },
        max: {
            ok: 0,
            warking: 0
        }
    },
    b: {
        min: {
            warking: 0,
            ok: 0
        },
        normal: {
            value: 0
        },
        max: {
            ok: 0,
            warking: 0
        }
    },
    mn: {
        min: {
            warking: 0,
            ok: 0
        },
        normal: {
            value: 0
        },
        max: {
            ok: 0,
            warking: 0
        }
    },
    zn: {
        min: {
            warking: 0,
            ok: 0
        },
        normal: {
            value: 0
        },
        max: {
            ok: 0,
            warking: 0
        }
    },
    cu: {
        min: {
            warking: 0,
            ok: 0
        },
        normal: {
            value: 0
        },
        max: {
            ok: 0,
            warking: 0
        }
    },
    mo: {
        min: {
            warking: 0,
            ok: 0
        },
        normal: {
            value: 0
        },
        max: {
            ok: 0,
            warking: 0
        }
    }
  };

  

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }

    this.macroElements.no3.value = this.calculateNo3Value(
                                        this.macroElements.nh4.value,
                                        this.macroElements.k.value , 
                                        this.macroElements.ca.value,
                                        this.macroElements.mg.value ,
                                        this.macroElements.so4.value,
                                        this.macroElements.h2po4.value,
                                        this.macroElements.cl.value
                                    );


  }

  calculateNo3Value(nh4, k, ca, mg, so4, h2po4, cl){

      return nh4             +
                k            +
                ( ca * 2 )   +
                ( mg * 2 )   -
                ( so4 *2 )   -
                h2po4        -
                cl;
  }

  calculateFeValue(FeCorrectionVal){

  }

  createTable(){
  }

  poblateTable(){
  }






}
