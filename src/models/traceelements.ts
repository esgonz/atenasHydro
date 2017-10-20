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
    this.fe = parseFloat(fe.toFixed(10));
  }
  setB(b){
     this.b = parseFloat(b.toFixed(10));
  }
  setMn(mn){
     this.mn = parseFloat(mn.toFixed(10));
  }
  setZn(zn){
     this.zn = parseFloat(zn.toFixed(10));
  }
  setCu(cu){
     this.cu = parseFloat(cu.toFixed(10));
  }
  setMo(mo){
     this.mo = parseFloat(mo.toFixed(10));
  }
  setElement(element, value){
    this[element] = parseFloat(value.toFixed(10));
  }



  getFe(fe){
    return parseFloat(this.fe.toFixed(10));
  }
  getB(b){
     return parseFloat(this.b.toFixed(10));
  }
  getMn(mn){
     return parseFloat(this.mn.toFixed(10));
  }
  getZn(zn){
     return parseFloat(this.zn.toFixed(10));
  }
  getCu(cu){
     return parseFloat(this.cu.toFixed(10));
  }
  getMo(mo){
     return parseFloat(this.mo.toFixed(10));
  }
  getElement(element, value){
    return parseFloat(this[element].toFixed(10));
  }
}
