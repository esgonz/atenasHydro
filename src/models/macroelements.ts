/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class MacroElements {
		public no3 = null;
		public h2po4 = null;
		public so4 = null;
		public cl = null;
		public nh4 = null;
		public k = null;
		public ca  = null;
		public mg = null;
    public h3o = null;



  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }

  setNo3(no3){
    this.no3 = no3;
  }
  setH2po4(h2po4){
     this.h2po4 = h2po4;
  }
  setSo4(so4){
     this.so4 = so4;
  }
  setCl(cl){
     this.cl = cl;
  }
  setNh4(nh4){
     this.nh4 = nh4;
  }
  setK(k){
     this.k = k;
  }
  setCa(ca){
     this.ca = ca;
  }
  setMg(mg){
     this.mg = mg;
  }
  setH3o(h3o){
     this.h3o = h3o;
  }  


}
