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
   tracesConcentrationLimits = {
     fe: {
       min: {
         warning: 50,
         ok: 25
       },
       max: {
         ok: 25,
         warning: 50
       }
     },
     b: {
       min: {
         warning: 50,
         ok: 25
       },

       max: {
         ok: 25,
         warning: 50
       }
     },
     mn: {
       min: {
         warning: 50,
         ok: 25
       },
       max: {
         ok: 25,
         warning: 50
       }
     },
     zn: {
       min: {
         warning: 50,
         ok: 25
       },
       max: {
         ok: 25,
         warning: 50
       }
     },
     cu: {
       min: {
         warning: 50,
         ok: 25
       },
       max: {
         ok: 25,
         warning: 50
       }
     },
     mo: {
       min: {
         warning: 50,
         ok: 25
       },
       max: {
         ok: 25,
         warning: 50
       }
     }
   } 
   macroElements  = {
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
     }
   };
   traceElements  = {
     fe: {
       min: {
         warning: 0,
         ok: 0
       },
       normal: {
         value: 0
       },
       max: {
         ok: 0,
         warning: 0
       }
     },
     b: {
       min: {
         warning: 0,
         ok: 0
       },
       normal: {
         value: 0
       },
       max: {
         ok: 0,
         warning: 0
       }
     },
     mn: {
       min: {
         warning: 0,
         ok: 0
       },
       normal: {
         value: 0
       },
       max: {
         ok: 0,
         warning: 0
       }
     },
     zn: {
       min: {
         warning: 0,
         ok: 0
       },
       normal: {
         value: 0
       },
       max: {
         ok: 0,
         warning: 0
       }
     },
     cu: {
       min: {
         warning: 0,
         ok: 0
       },
       normal: {
         value: 0
       },
       max: {
         ok: 0,
         warning: 0
       }
     },
     mo: {
       min: {
         warning: 0,
         ok: 0
       },
       normal: {
         value: 0
       },
       max: {
         ok: 0,
         warning: 0
       }
     }
   };



   constructor(fields: any) {
     // Quick and dirty extend/assign fields to this model
     for (let f in fields) {
       this[f] = fields[f];
     }
     this.initValues();

   }



   initValues(){
     console.log("initValues") 
     this.calculateNo3Value(
                    this.macroElements.nh4.value, 
                    this.macroElements.k.value, 
                    this.macroElements.ca.value,
                    this.macroElements.mg.value, 
                    this.macroElements.so4.value, 
                    this.macroElements.h2po4.value, 
                    this.macroElements.cl.value);

     this.calculateMaxNo3(this.formulaId, this.macroElements.no3.value);
     this.calculateMaxH2po4(this.formulaId, this.macroElements.h2po4.value);
     this.calculateMaxSo4(this.formulaId, this.macroElements.so4.value);
     this.calculateMaxCl(this.formulaId, this.macroElements.cl.value);
     this.calculateMaxNh4(this.formulaId, this.macroElements.nh4.value);
     this.calculateMaxK(this.formulaId, this.macroElements.k.value);
     this.calculateMaxCa(this.formulaId, this.macroElements.ca.value);
     this.calculateMaxMg(this.formulaId, this.macroElements.mg.value);
   }


   calculateNo3Value(nh4, k, ca, mg, so4, h2po4, cl){
     console.log("calculateNo3Value") 

     console.log("nh4",nh4) 
     console.log("k",k) 
     console.log("ca",ca) 
     console.log("mg",mg) 
     console.log("so4",so4) 
     console.log("h2po4",h2po4)
     console.log("cl",cl)

     let valueNo3 =  (nh4             +
       k            +
       ( ca * 2 )   +
       ( mg * 2 )   -
       ( so4 *2 )   -
       h2po4        -
       cl).toFixed(10); 
     console.log("valueNo3",valueNo3)

     this.macroElements.no3.value = parseFloat(valueNo3);
   }


   calculateMaxNo3(formulaId, no3Value){
     console.log("calculateMaxNo3") 
     let value = 0;


     switch (formulaId) {
       case "1":
       //cucumber 
       value = no3Value * 24 / 18 ;
       break;

       case "2":
       //Eggplant 
       value = no3Value * 25 / 20 ;
       break;

       case "3":
       //Gerbera 
       value = 11.25 * 16 / 13;
       break;

       case "4":
       //Lettuce 
       value = 23;
       break;

       case "5":
       //Melon 
       value = no3Value * 24 / 18 ;
       break;

       case "6":
       //Rose 
       value = no3Value * 16 / 12.5 ;
       break;

       case "7":
       //Strawberry 
       value = 16.80 ;
       break;

       case "8":
       //Sweet Pepper 
       value = no3Value * 25 / 17 ;
       break;

       case "9":
       //Tomato 
       value = no3Value * 28 / 23 ;
       break;

       case "10":
       //Young Plants 
       value = 24 ;
       break;




       default:
       // code...
       break;
     }     
     this.macroElements.no3.max = value;
   }
   calculateMaxH2po4(formulaId, h2po4Value){
     console.log("calculateMaxH2po4")
     let value = 0;


     switch (formulaId) {
       case "1":
       //cucumber 
       value = h2po4Value * 1.2 / 0.9 ;
       break;

       case "2":
       //Eggplant 
       value = h2po4Value * 1.2 / 0.9 ;
       break;

       case "3":
       //Gerbera 
       value = h2po4Value* 1.3/ 1;
       break;

       case "4":
       //Lettuce 
       value = 3.5;
       break;

       case "5":
       //Melon 
       value = h2po4Value * 1.2 / 0.9 ;
       break;

       case "6":
       //Rose 
       value = h2po4Value * 1.2 / 0.9 ;
       break;

       case "7":
       //Strawberry 
       value = 1.50 ;
       break;

       case "8":
       //Sweet Pepper 
       value = h2po4Value * 1.5 / 1.2 ;
       break;

       case "9":
       //Tomato 
       value = h2po4Value * 2 / 1 ;
       break;

       case "10":
       //Young Plants 
       value = 1.25 ;
       break;




       default:
       // code...
       break;
     }     
     this.macroElements.h2po4.max = value;
   }
   calculateMaxSo4(formulaId, so4Value){
     console.log("calculateMaxSo4")
     let value = 0;


     switch (formulaId) {
       case "1":
       //cucumber 
       value = so4Value *4.5/3.5 ;
       break;

       case "2":
       //Eggplant 
       value = so4Value *4/3 ;
       break;

       case "3":
       //Gerbera 
       value = so4Value*3.5/2.5;
       break;

       case "4":
       //Lettuce 
       value = 1.5;
       break;

       case "5":
       //Melon 
       value = so4Value *4.5/3.5;
       break;

       case "6":
       //Rose 
       value = so4Value *4/2.5 ;
       break;

       case "7":
       //Strawberry 
       value = 2 ;
       break;

       case "8":
       //Sweet Pepper 
       value = so4Value *4.5/3;
       break;

       case "9":
       //Tomato 
       value = 4.4*9/6.8;
       break;

       case "10":
       //Young Plants 
       value = 4 ;
       break;




       default:
       // code...
       break;
     }     
     this.macroElements.so4.max = value;
   }
   calculateMaxCl(formulaId, clValue){
     console.log("calculateMaxCl")
     let value = 0;


     switch (formulaId) {

       case "3":
       //Gerbera 
       value = 1;
       break;

       case "9":
       //Tomato 
       value = clValue *15/9;
       break;




       default:
       // code...
       break;
     }     
     this.macroElements.cl.max = value;
   }
   calculateMaxNh4(formulaId, nh4Value){
     console.log("calculateMaxNh4")
     let value = 0;


     switch (formulaId) {
       case "1":
       //cucumber 
       value = 1.25 ;
       break;

       case "2":
       //Eggplant 
       value = 1.5;
       break;

       case "3":
       //Gerbera 
       value = 1.5;
       break;

       case "4":
       //Lettuce 
       value = 1.25;
       break;

       case "5":
       //Melon 
       value = 1.25;
       break;

       case "6":
       //Rose 
       value = 1.40 ;
       break;

       case "7":
       //Strawberry 
       value = 1.2 ;
       break;

       case "8":
       //Sweet Pepper 
       value = 1.5;
       break;

       case "9":
       //Tomato 
       value = nh4Value * 1.25;
       break;

       case "10":
       //Young Plants 
       value = 1.25 ;
       break;




       default:
       // code...
       break;
     }     
     this.macroElements.nh4.max = value;
   }

   calculateMaxK(formulaId, kValue){
     console.log("calculateMaxK")
     let value = 0;


     switch (formulaId) {
       case "1":
       //cucumber 
       value = kValue *10/8 ;
       break;

       case "2":
       //Eggplant 
       value = kValue*8/6.2;
       break;

       case "3":
       //Gerbera 
       value = kValue*9/6;
       break;

       case "4":
       //Lettuce 
       value = 14;
       break;

       case "5":
       //Melon 
       value = kValue*10/8;
       break;

       case "6":
       //Rose 
       value = kValue*7/5 ;
       break;

       case "7":
       //Strawberry 
       value = 8 ;
       break;

       case "8":
       //Sweet Pepper 
       value = kValue*8/5;
       break;

       case "9":
       //Tomato 
       value = kValue *10/8;
       break;

       case "10":
       //Young Plants 
       value = 9 ;
       break;




       default:
       // code...
       break;
     }     
     this.macroElements.k.max = value;
   }

   calculateMaxCa(formulaId, caValue){
     console.log("calculateMaxCa")
     let value = 0;


     switch (formulaId) {
       case "1":
       //cucumber 
       value = caValue *8/6.5 ;
       break;

       case "2":
       //Eggplant 
       value = caValue *7.5/6.2
       break;

       case "3":
       //Gerbera 
       value = caValue *7.5/5;
       break;

       case "4":
       //Lettuce 
       value = 5.5;
       break;

       case "5":
       //Melon 
       value = caValue *8/6.5;
       break;

       case "6":
       //Rose 
       value = caValue *7/5 ;
       break;

       case "7":
       //Strawberry 
       value = 4 ;
       break;

       case "8":
       //Sweet Pepper 
       value = caValue *10/8.5;
       break;

       case "9":
       //Tomato 
       value = caValue *12/10;
       break;

       case "10":
       //Young Plants 
       value = 5.50;
       break;




       default:
       // code...
       break;
     }     
     this.macroElements.ca.max = value;
   }
   calculateMaxMg(formulaId, mgValue){
     console.log("calculateMaxMg")
     let value = 0;


     switch (formulaId) {
       case "1":
       //cucumber 
       value = mgValue *4/3 ;
       break;

       case "2":
       //Eggplant 
       value = mgValue *5.5/4.5;
       break;

       case "3":
       //Gerbera 
       value = mgValue *3/2;
       break;

       case "4":
       //Lettuce 
       value = 1.5;
       break;

       case "5":
       //Melon 
       value = mgValue *4/3;
       break;

       case "6":
       //Rose 
       value = mgValue *4/2.5;
       break;

       case "7":
       //Strawberry 
       value = 1.6 ;
       break;

       case "8":
       //Sweet Pepper 
       value = mgValue *4/3;
       break;

       case "9":
       //Tomato 
       value = mgValue *6.5/4.5;
       break;

       case "10":
       //Young Plants 
       value = 5;
       break;

       default:
       // code...
       break;
     }     
     this.macroElements.mg.max = value;
   }

   calculateTracesLimitsValues(element, elementCropCorrection, ECFactor){
     console.log("calculateTracesLimitsValues")  
     console.log("element:",element) 
     console.log("elementCropCorrection",elementCropCorrection) 
     console.log("ECFactor",ECFactor) 
     
     let minWarning     = ( this.traceElements[element].normal.value + elementCropCorrection) * 
     ( 1 - this.tracesConcentrationLimits[element].min.warning / 100) * ECFactor;
     console.log("minWarning",minWarning) 
     
     let minOk          = ( this.traceElements[element].normal.value + elementCropCorrection) * 
     ( 1 - this.tracesConcentrationLimits[element].min.ok / 100)      * ECFactor;
     console.log("minOk",minOk) 
     
     let maxWarning     = ( this.traceElements[element].normal.value + elementCropCorrection) * 
     ( 1 + this.tracesConcentrationLimits[element].max.warning / 100) * ECFactor;
     console.log("maxWarning",maxWarning) 
     
     let maxOk          = ( this.traceElements[element].normal.value + elementCropCorrection) * 
     ( 1 + this.tracesConcentrationLimits[element].max.ok / 100)      * ECFactor;
     console.log("maxOk",maxOk) 
     

     this.traceElements[element].min.warning     = minWarning;
     this.traceElements[element].min.ok          = minOk;
     this.traceElements[element].max.warning    = maxWarning;
     this.traceElements[element].max.ok         = maxOk;

     console.log( element , this.traceElements[element]);
   }

   


   createTable(){
   }

   poblateTable(){
   }






 }
