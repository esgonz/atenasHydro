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
		public no3     = 0;
		public h2po4   = 0;
		public so4     = 0;
		public cl      = 0;
		public nh4     = 0;
		public k       = 0;
		public ca      = 0;
		public mg      = 0;
    public h3o     = 0;



  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }

  setNo3(no3){
    this.no3   = parseFloat(no3.toFixed(10));
  }
  setH2po4(h2po4){
    this.h2po4 = parseFloat(h2po4.toFixed(10));
  }
  setSo4(so4){
    this.so4   = parseFloat(so4.toFixed(10));
  }
  setCl(cl){
    this.cl    = parseFloat(cl.toFixed(10));
  }
  setNh4(nh4){
    this.nh4   = parseFloat(nh4.toFixed(10));
  }
  setK(k){
    this.k     = parseFloat(k.toFixed(10));
  }
  setCa(ca){
    this.ca    = parseFloat(ca.toFixed(10));
  }
  setMg(mg){
    this.mg    = parseFloat(mg.toFixed(10));
  }
  setH3o(h3o){
    this.h3o   = parseFloat(h3o.toFixed(10));
  }  

  setElement(element, value){
    this[element] = parseFloat(value.toFixed(10));
  }


  getNo3(){
    return parseFloat(this.no3.toFixed(2));
  }
  getH2po4(){
    return parseFloat(this.h2po4.toFixed(2));
  }
  getSo4(){
    return parseFloat(this.so4.toFixed(2));
  }
  getCl(){
    return parseFloat(this.cl.toFixed(2));
  }
  getNh4(){
    return parseFloat(this.nh4.toFixed(2));
  }
  getK(){
    return parseFloat(this.k.toFixed(2));
  }
  getCa(){
    return parseFloat(this.ca.toFixed(2));
  }
  getMg(){
    return parseFloat(this.mg.toFixed(2));
  }
  getH3o(){
    return parseFloat(this.h3o.toFixed(2));
  }  

  getElement(element){
    return parseFloat(this[element].toFixed(2));
  }

}
