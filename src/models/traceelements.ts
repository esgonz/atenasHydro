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
		public fe = 0;
		public b = 0;
		public mn = 0;
		public zn = 0;
		public cu = 0;
		public mo = 0;



  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }

  setFe(fe){
    this.fe = parseFloat(fe.toFixed(2));
  }
  setB(b){
     this.b = parseFloat(b.toFixed(2));
  }
  setMn(mn){
     this.mn = parseFloat(mn.toFixed(2));
  }
  setZn(zn){
     this.zn = parseFloat(zn.toFixed(2));
  }
  setCu(cu){
     this.cu = parseFloat(cu.toFixed(2));
  }
  setMo(mo){
     this.mo = parseFloat(mo.toFixed(2));
  }
  setElement(element, value){
    this[element] = parseFloat(value.toFixed(2));
  }

}
