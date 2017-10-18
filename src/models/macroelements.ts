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
		public no3 = 0;
		public h2po4 = 0;
		public so4 = 0;
		public cl = 0;
		public nh4 = 0;
		public k = 0;
		public ca  = 0;
		public mg = 0;
    public h3o = 0;



  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }

  setNo3(no3){
    this.no3   = parseFloat(no3.toFixed(2));
  }
  setH2po4(h2po4){
    this.h2po4 = parseFloat(h2po4.toFixed(2));
  }
  setSo4(so4){
    this.so4   = parseFloat(so4.toFixed(2));
  }
  setCl(cl){
    this.cl    = parseFloat(cl.toFixed(2));
  }
  setNh4(nh4){
    this.nh4   = parseFloat(nh4.toFixed(2));
  }
  setK(k){
    this.k     = parseFloat(k.toFixed(2));
  }
  setCa(ca){
    this.ca    = parseFloat(ca.toFixed(2));
  }
  setMg(mg){
    this.mg    = parseFloat(mg.toFixed(2));
  }
  setH3o(h3o){
    this.h3o   = parseFloat(h3o.toFixed(2));
  }  

  setElement(element, value){
    this[element] = parseFloat(value.toFixed(2));
  }

}
