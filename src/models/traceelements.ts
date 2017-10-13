/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class TraceElements {
		public fe = null;
		public b = null;
		public mn = null;
		public zn = null;
		public cu = null;
		public mo = null;



  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }

  setFe(fe){
    this.fe = fe;
  }
  setB(b){
     this.b = b;
  }
  setMn(mn){
     this.mn = mn;
  }
  setZn(zn){
     this.zn = zn;
  }
  setCu(cu){
     this.cu = cu;
  }
  setMo(mo){
     this.mo = mo;
  }


}
