

import { Formula } from '../models/formula';
import { MacroElements } from '../models/macroelements';
import { TraceElements } from '../models/traceelements';
import { CropSolution } from '../models/cropsolution';
import { FormulasProvider } from '../providers/formulas';
import { ProgramsProvider } from '../providers/programs/programs';
/**
* A generic model that our Master-Detail pages list, create, and delete.
*
* Change "Item" to the noun your app will use. For example, a "Contact," or a
* "Customer," or a "Animal," or something like that.
*
* The Items service manages creating instances of Item, so go ahead and rename
* that something that fits your app as well.
*/

/*

POR MODIFICAR !!!!!!!!!

*/
export class Program {
  id = "";
  uuid = "";
  
  basicInformation = {
    name   : "",
    company  : "",
    sectorId  : "",
    date   : "",
    email   : ""
  };
  
  cropInformation = {
    cropObj: null,
    stageId: null,
  };
  
  analysisInformation = {
     ECValue:       1.5,
     sizeTank:       1000,
     dilutionFactor:   100,
     substrate:       "organic",
     acidSource:       {
       id:       "",
       name:       "",
       concentration:   0.0,
       density:     0.0
     },
     calciumChlorideSource:  {
       id:       "liquid",
       name:      "Calcium Chloride (35 % Liquid)",
       concentration:   35,
       density:     1.33
     },
     calciumNitrateSource: {
       id:       "",
       name:      "",
       concentration:   0,
       density:     0
     },
     ironChelateSource:    {
       id:       "",
       name:      "",
       concentration:   0
     }
  };
  
  waterAnalysisInformation = {
    unit: "mgl",
    balance: 0.00,
    nnh4: {
      mgl:  0.00,
      mmoll:  0.00
    },
    nno3: {
      mgl:  0.00,
      mmoll:  0.00
    },
    p: {
      mgl:  0.00,
      mmoll:  0.00
    },
    k: {
      mgl:  0.00,
      mmoll:  0.00
    },
    ca: {
      mgl:  0.00,
      mmoll:  0.00
    },
    mg: {
      mgl:  0.00,
      mmoll:  0.00
    },
    na: {
      mgl:  0.00,
      mmoll:  0.00,
      status: "normal",
      alert: ""
    },
    cl: {
      mgl:  0.00,
      mmoll:  0.00,
      status: "normal",
      alert: ""
    },
    sso4: {
      mgl:  0.00,
      mmoll:  0.00,
      status: "normal",
      alert: ""
    },
    fe: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 0.00,
      status: "normal",
      alert: ""
    },
    mn: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 0.00,
      status: "normal",
      alert: ""
    },
    zn: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 0.00,
      status: "normal",
      alert: ""
    },
    cu: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 0.00,
      status: "normal",
      alert: ""
    },
    b: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 0.00,
      status: "normal",
      alert: ""
    },
    mo: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 0.00
    },
    hco3: {
      mgl:  0.00,
      mmoll:  0.00

    },
    ph: {
      value: 0.00,
      status: "normal",
      alert: ""
    },
    ec: {
      value: 0.00,
      status: "normal",
      alert: ""
    }
  }

  ECValues = {
    wantedEC: 0,
    standardEC: 0,
    ECfactor: 0
  }

  formula : Formula = null;
  
  standardSolution: CropSolution = null;

  baseAdaptation =  {
    macroElements : new MacroElements({}),
    traceElements: new TraceElements({})
  }

  correctedSolution = {
    macroElements: {},
    traceElements: {}
  }

  NPKScheme = {
    formula : {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    required: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    calciumCholide35: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    ultrasolCalcium: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    ultrasolCalmag: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    ultrasolKPlus: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    ultrasolMagnit: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    ultrasolMagsul: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    npk: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    nitricAcid: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    controlTraceElements: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },
    control: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    }
  }

  controlSolution = {
    standardSolution: {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})
    },

    actualSolution : {
      macroElements : new MacroElements({}),
      traceElements: new TraceElements({})

    }
  }

  fertilizerSpecs = {
    macroElements : null,
    traceElements : null
  };

  tanks = {
    a: null,
    b: null
  }



  constructor( fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (let f in fields) {
      this[f] = fields[f];
    }
  }


  /*Verify levels of EC*/
  verifyECValue(){
    console.log("verifyECValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);

    if (this.waterAnalysisInformation.ec.value > 1.5) {
      console.log("Too high");
      this.waterAnalysisInformation.ec.status = "tooHigh";
      this.waterAnalysisInformation.ec.alert  = "Too High. " +
      thisStage.alerts.ec.tooHigh; ;
    }
    else if (this.waterAnalysisInformation.ec.value > 1) {
      console.log("very high");
      this.waterAnalysisInformation.ec.status = "VeryHigh";
      this.waterAnalysisInformation.ec.alert  = "Very High. " +
      thisStage.alerts.ec.veryHigh;
    }
    else if (this.waterAnalysisInformation.ec.value > 0.5) {
      console.log("high");
      this.waterAnalysisInformation.ec.alert = "High. " +
      thisStage.alerts.ec.veryHigh;
    }else{
      console.log("normal");
      this.waterAnalysisInformation.ec.status = "normal";
      this.waterAnalysisInformation.ec.alert  = "";
    }
  }

  /*Verify levels of Na*/
  verifyNaValue(){
    console.log("verifyNaValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.na.mmoll > 4.5) {
      console.log("Too high");
      this.waterAnalysisInformation.na.status = "tooHigh";
      this.waterAnalysisInformation.na.alert  = "Too High. " +
      thisStage.alerts.na.tooHigh;

    }else if (this.waterAnalysisInformation.na.mmoll > 3) {
      console.log("very high");
      this.waterAnalysisInformation.na.status = "veryHigh";
      this.waterAnalysisInformation.na.alert  = "Very High. " +
      thisStage.alerts.na.veryHigh;
    }
    else if (this.waterAnalysisInformation.na.mmoll > 1.5) {
      console.log("high");
      this.waterAnalysisInformation.na.status = "High";
      this.waterAnalysisInformation.na.alert  = "High alert. " +
      thisStage.alerts.na.high;
    }
    else{
      console.log("normal");
      this.waterAnalysisInformation.na.status = "Normal";
      this.waterAnalysisInformation.na.alert  = "";
    }
  }

  /*Verify levels of Cl*/
  verifyClValue(){
    console.log("verifyClValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.cl.mmoll > 4.5) {
      //to high
      console.log("Too high");
      this.waterAnalysisInformation.cl.status = "tooHigh";
      this.waterAnalysisInformation.cl.alert  = "Too High. " +
      thisStage.alerts.cl.tooHigh;
    }
    else if (this.waterAnalysisInformation.cl.mmoll > 3) {
      //very high
      console.log("very high");
      this.waterAnalysisInformation.cl.status = "veryHigh";
      this.waterAnalysisInformation.cl.alert  = "Very High. " +
      thisStage.alerts.cl.veryHigh;
    }
    else if (this.waterAnalysisInformation.cl.mmoll > 1.5) {

      //high
      console.log("high");
      this.waterAnalysisInformation.cl.status = "high";
      this.waterAnalysisInformation.cl.alert  = "High. " +
      thisStage.alerts.cl.high;
    }
    else{
      //normal
      console.log("normal");
      this.waterAnalysisInformation.cl.status = "normal";
      this.waterAnalysisInformation.cl.alert  = "";
    }
  }

  /*Verify levels of SSO4*/
  verifySso4Value(){
    console.log("verifySso4Value");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.sso4.mmoll > 2) {
      //too high
      console.log("Too high");
      this.waterAnalysisInformation.sso4.status = "tooHigh";
      this.waterAnalysisInformation.sso4.alert  = "Too High. " +
      thisStage.alerts.so4.tooHigh;
    }else{
      //normal
      console.log("normal");
      this.waterAnalysisInformation.sso4.status = "normal";
      this.waterAnalysisInformation.sso4.alert = "";
    }
  }

  /*Verify levels of Ph*/
  verifyPhValue(){
    console.log("verifyPhValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.ph.value < 5.5) {
      //to high
      console.log("Too high");
      this.waterAnalysisInformation.ph.status = "tooLow";
      this.waterAnalysisInformation.ph.alert  = "Too low. " +
      thisStage.alerts.ph.tooLow;
    }else {
      //normal
      console.log("normal");
      this.waterAnalysisInformation.ph.status = "normal";
      this.waterAnalysisInformation.ph.alert = "OK";
    }
  }

  /*Verify levels of Fe*/
  verifyFeValue(){
    console.log("verifyFeValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.fe.mmoll > 25) {
      //to high
      console.log("Too high");
      this.waterAnalysisInformation.fe.status = "tooHigh";
      this.waterAnalysisInformation.fe.alert  = "Too High. " +
      thisStage.alerts.fe.tooHigh;
    }else {
      //normal
      console.log("normal");
      this.waterAnalysisInformation.fe.status = "normal";
      this.waterAnalysisInformation.fe.alert  = "";
    }
  }

  /*Verify levels of B*/
  verifyBValue(){
    console.log("verifyBValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.b.mmoll > 50) {
      //to high
      console.log("Too high");
      this.waterAnalysisInformation.b.status = "tooHigh";
      this.waterAnalysisInformation.b.alert  = "Too High. " + thisStage.alerts.b.tooHigh;
    }else{
      //normal
      console.log("normal");
      this.waterAnalysisInformation.b.status = "normal";
      this.waterAnalysisInformation.b.alert = "";
    }
  }

  /*Verify levels of Zn*/
  verifyZnValue(){
    console.log("verifyZnValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.zn.mmoll > 10) {
      //too high
      console.log("Too high");
      this.waterAnalysisInformation.zn.status = "tooHigh";
      this.waterAnalysisInformation.zn.alert = "Too High. " + thisStage.alerts.zn.tooHigh;
    }else{
      //normal
      console.log("normal");
      this.waterAnalysisInformation.zn.status = "normal";
      this.waterAnalysisInformation.zn.alert = "";
    }
  }

  /*Verify levels of Mn*/
  verifyMnValue(){
    console.log("verifyMnValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.mn.mmoll > 10) {
      //too high
      console.log("Too high");
      this.waterAnalysisInformation.mn.status = "tooHigh";
      this.waterAnalysisInformation.mn.alert = "Too High. " + thisStage.alerts.mn.tooHigh;
    }else{
      //normal
      console.log("normal");
      this.waterAnalysisInformation.mn.status = "normal";
      this.waterAnalysisInformation.mn.alert = "";
    }
  }

  /*Verify levels of Cu*/
  verifyCuValue(){
    console.log("verifyCuValue");
    let thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.cu.mmoll > 3) {
      //too high
      console.log("Too high");
      this.waterAnalysisInformation.cu.status = "tooHigh";
      this.waterAnalysisInformation.cu.alert = "Too High. " + thisStage.alerts.cu.tooHigh;
    }else{
      //normal
      console.log("normal");
      this.waterAnalysisInformation.cu.status = "normal";
      this.waterAnalysisInformation.cu.alert = "";
    }
  }


  /*setBaseValues init the functions needed for begining the calcs*/
  setBaseValues (){
    console.log("setBaseValues");
    console.log("type substrate:" , this.analysisInformation.substrate);
    this.setAdaptedSolution();
    this.setStandardMacrosSolution();

    console.log("standard macro", this.standardSolution.macroElements);
    this.setECfactor(
      this.standardSolution.macroElements.no3.value,
      this.standardSolution.macroElements.h2po4.value,
      this.standardSolution.macroElements.so4.value,
      this.standardSolution.macroElements.cl.value
      );
    this.setStandardTracesSolution();
    //return this.ECValues.standardEC;
  }


  /*Set the base values nedeed for calculate the formula*/
  setCalculationsValues (formulasProvider: FormulasProvider){
    console.log("setCalculationsValues");
    /*TEST DATA**
      this.analysisInformation = {
      ECValue:     1.5,
      sizeTank:     1000,
      dilutionFactor:   100,
      substrate:     "organic",
      acidSource:    {
      id:    "60",
      name:    "",
      concentration:  60,
      density:   1.363
      },
      calciumChlorideSource: {
      id:    "anhydrous",
      name:   "",
      concentration:  63.9,
      density:   1.33
      },
      calciumNitrateSource: {
      id:    "ultrasolcalcium",
      name:   "",
      concentration:  0,
      density:   0
      },
      ironChelateSource:    {
      id:    "fee13",
      name:   "",
      concentration:  13
      }
      };

      this.waterAnalysisInformation = {
      unit: "mgl",
      balance: 0.00,
      nnh4: {
      mgl:  0.00,
      mmoll:  7.1429
      },
      nno3: {
      mgl:  0.00,
      mmoll:  6.4286
      },
      p: {
      mgl:  0.00,
      mmoll:  2.5831
      },
      k: {
      mgl:  0.00,
      mmoll:  1.7904
      },
      ca: {
      mgl:  0.00,
      mmoll:  1.4970
      },
      mg: {
      mgl:  0.00,
      mmoll:  2.0572
      },
      na: {
      mgl:  0.00,
      mmoll:  0.8699,
      status: "normal",
      alert: ""
      },
      cl: {
      mgl:  0.00,
      mmoll:  0.8462,
      status: "normal",
      alert: ""
      },
      sso4: {
      mgl:  0.00,
      mmoll:  0.6238,
      status: "normal",
      alert: ""
      },
      fe: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 8.9526,
      status: "normal",
      alert: ""
      },
      mn: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 9.1008,
      status: "normal",
      alert: ""
      },
      zn: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 7.6464,
      status: "normal",
      alert: ""
      },
      cu: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 1.5736,
      status: "normal",
      alert: ""
      },
      b: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 46.2535,
      status: "normal",
      alert: ""
      },
      mo: {
      mgl:  0.00,
      mmoll:  0.00,
      umoll: 5.2116
      },
      hco3: {
      mgl:  0.00,
      mmoll:  1.6388

      },
      ph: {
      value: 5,
      status: "normal",
      alert: ""
      },
      ec: {
      value: 0.5,
      status: "normal",
      alert: ""
      }
      }
    /*TEST DATA***/




    this.setAdaptedSolution();
    this.setStandardMacrosSolution();

    this.setECfactor(
      this.standardSolution.macroElements.no3.value,
      this.standardSolution.macroElements.h2po4.value,
      this.standardSolution.macroElements.so4.value,
      this.standardSolution.macroElements.cl.value
      );
    this.setStandardTracesSolution();
    this.setMacroElementsRequired();
    this.setTraceElementsRequired();
    let npk: Formula = formulasProvider.getFormulaById(this.standardSolution.formulaId);
    this.setNPKScheme(npk);
    this.setControlStandardMacroSolution();
    this.setControlStandardTraceSolution();
    this.setControlActualMacroSolution();
    this.setTraceFertilizerSpecifications();
    this.setControlActualTraceSolution();
    this.setControlAlertTraceElements()
    this.setMacroFertilizerSpecifications();
    this.setATank();
    this.setBTank();
  }

  /*
  Calculate the ECs values, ECfactor value needed for the corrected values of macroElements
  */
  setECfactor (no3, h2po4, so4, cl){
    console.log("setECfactor");
    console.log("no3",no3);
    console.log("h2po4", h2po4);
    console.log("so4", so4);
    console.log("cl", cl);
    let wantedEC  = this.analysisInformation.ECValue;
    let standardEC  = Math.round(    (    0.1 * (  no3 + h2po4 + ( so4 * 2 ) + cl  )   ) *10    ) / 10;
    console.log("standardEC", standardEC);
    let ECfactor  = wantedEC / standardEC;
    console.log("wantedEC "+ wantedEC + "/ standardEC "+ standardEC);
    console.log("this.standardEC", ECfactor);

    this.ECValues.wantedEC   = wantedEC;

    this.ECValues.standardEC =standardEC;
    console.log("this.standardEC", this.ECValues.standardEC);
    this.ECValues.ECfactor   = parseFloat(ECfactor.toFixed(5));
    console.log("this.ECfactor", this.ECValues.ECfactor);

    console.log("EC VALUES", this.ECValues);
  }

  /*
  Calculate the corrected macroElements values
  needed by the crop based on base solution and adapted values.
  */
  setAdaptedSolution(){
    console.log("setAdaptedSolution")
    let auxStage       = this.getStageByID(this.cropInformation.stageId);
    console.log("Stage base to adapted", auxStage)
    this.baseAdaptation.macroElements = auxStage.corrections.macroElements;
    this.baseAdaptation.macroElements.h3o     = 0;
    this.baseAdaptation.macroElements.cl      = 0;
    this.baseAdaptation.traceElements     = auxStage.corrections.traceElements;
    console.log("baseAdaptation", auxStage)
  }


  /*Set the macroelements values required for the calculations*/
  setMacroElementsRequired (){
    console.log("Program", "setMacroElementsrequired");

    //get standard values for macronuetrients
    let macroSolution = this.standardSolution.macroElements;
    console.log("standard macro", macroSolution);
    //get the correction value for macroElements from stage object.
    let baseAdaptation = this.baseAdaptation.macroElements;
    console.log("baseAdaptation", baseAdaptation);

    //correction water macroElements values
    let cWater = {
      no3 :   0,
      h2po4:   0,
      so4:   0,
      cl:   0,
      nh4:   0,
      k:    0,
      ca:   0,
      mg:   0,
      h3o:   0,
      polarity:  0
    };

    //the number to use in maath formula calculateFloorMath
    let cWaterF = {
      no3 :  0.5,
      so4:  0.25,
      cl:  0.25,
      k:   0.5,
      ca:  0.25,
      mg:  0.25
    };

    //calculate correctionWater with floormath formula
    for (let m in cWaterF){

      let keyInput = this.getRelationInputKeys(m);
      let inputValue = this.waterAnalysisInformation[keyInput].mmoll;
      cWater[m] = this.getFloorWithSignificance(inputValue, cWaterF[m]);

    }

    //calculate hco3 correctionWater
    let floorHco3 = Math.floor(this.waterAnalysisInformation.hco3.mmoll - 0.5);

    if(floorHco3 > 0) {
      if (this.waterAnalysisInformation.hco3.mmoll - floorHco3 > 0.8) {
        if (this.waterAnalysisInformation.hco3.mmoll - floorHco3 > 1.3) {
          cWater.h3o = floorHco3 + 1;
        }
        else{
          cWater.h3o = floorHco3 + 0.5;
        }
      }
      else{
        cWater.h3o = floorHco3;
      }
    }else{
      cWater.h3o = 0;
    }


    //calculate polarity
    cWater.polarity =  cWater.no3   +
    cWater.h2po4  +
    (2 * cWater.so4)-
    cWater.nh4   -
    cWater.k   -
    (2 * cWater.ca) -
    (2 * cWater.mg )-
    cWater.h3o;
    console.log("cWater", cWater);
    //calculate correction macro elements
    let cMacros = {
      k : macroSolution.k.value +
      (2 *(macroSolution.ca.value +
        macroSolution.mg.value)
      ) -
      baseAdaptation.nh4,

      mg: macroSolution.no3.value +
      (2 * macroSolution.so4.value) +
      macroSolution.cl.value -
      baseAdaptation.h2po4
    }
    console.log("cMacros", cMacros);
    let cMacros2 = {
      k : macroSolution.k.value +
      baseAdaptation.k +
      (2 *(macroSolution.ca.value +
        macroSolution.mg.value +
        baseAdaptation.ca +
        baseAdaptation.mg)
      ),
      mg: macroSolution.no3.value +
      baseAdaptation.no3 +
      (2 * ( macroSolution.so4.value + baseAdaptation.so4)) +
      macroSolution.cl.value
    }
    console.log("cMacros2", cMacros2);
    //calculated adapted values
    let adaptedMacros = {
      no3 :  (
        macroSolution.no3.value  +
        baseAdaptation.no3  +
        cWater.no3) *
      (cMacros.mg / cMacros2.mg),
      h2po4:  macroSolution.h2po4.value  +
      baseAdaptation.h2po4  +
      cWater.h2po4,
      so4:  (macroSolution.so4.value  +
        baseAdaptation.so4  +
        cWater.so4) *
      (cMacros.mg / cMacros2.mg),
      cl:  0,
      nh4:  macroSolution.nh4.value + baseAdaptation.nh4,
      k:   (
        macroSolution.k.value +
        baseAdaptation.k  +
        cWater.k) *
      (cMacros.k / cMacros2.k),
      ca:  (
        macroSolution.ca.value  +
        baseAdaptation.ca  +
        cWater.ca) *
      (cMacros.k / cMacros2.k),
      mg:  (
        macroSolution.mg.value  +
        baseAdaptation.mg  +
        cWater.mg) *
      (cMacros.k / cMacros2.k),
      h3o:  cWater.h3o,
      polarity: 0
    };

    if (macroSolution.cl.value + cWater.cl > 0) {
      adaptedMacros.cl = (
        macroSolution.cl.value  +
        baseAdaptation.cl  +
        cWater.cl) *
      (cMacros.mg / cMacros2.mg);
    }
    console.log("adaptedMacros", adaptedMacros);


    //corrected macroElements by the EC value
    let correctedEC = {
      no3 :  adaptedMacros.no3  * this.ECValues.ECfactor ,
      h2po4:  adaptedMacros.h2po4 * this.ECValues.ECfactor,
      so4:  adaptedMacros.so4  * this.ECValues.ECfactor,
      cl:  adaptedMacros.cl  * this.ECValues.ECfactor,
      nh4:  adaptedMacros.nh4  * this.ECValues.ECfactor,
      k:   adaptedMacros.k  * this.ECValues.ECfactor,
      ca:  adaptedMacros.ca  * this.ECValues.ECfactor,
      mg:  adaptedMacros.mg  * this.ECValues.ECfactor,
      h3o:  cWater.h3o,
      polarity: 0
    }


    console.log("correctedEC", correctedEC);
    correctedEC.polarity = correctedEC.no3 +
    correctedEC.h2po4 +
    (2 * correctedEC.so4)+
    correctedEC.cl -
    correctedEC.nh4 -
    correctedEC.k -
    (2 * correctedEC.ca)-
    (2 * correctedEC.mg)-
    correctedEC.h3o;

    //set the corrected solution
    this.correctedSolution.macroElements = correctedEC;

    console.log("CORRECTED MACROS: ", this.correctedSolution.macroElements);
  }


  /*Set the TraceElements values required for the calculations*/
  setTraceElementsRequired (){
    console.log("Program", "setTraceElementsRequired");


    let microSolution = new TraceElements({});
    for (let element in this.standardSolution.traceElements) {
      microSolution[element] = this.standardSolution.traceElements[element].normal.value;
    }
    console.log("standard trace", microSolution);

    //get the correction value for traceElements from stage object.
    let baseAdaptation = this.baseAdaptation.traceElements;
    console.log("baseAdaptation trace", baseAdaptation);

    //adapted
    let adaptedTraceElements = {
      fe: microSolution.fe  + baseAdaptation.fe ,
      b:  microSolution.b  + baseAdaptation.b ,
      mn: microSolution.mn  + baseAdaptation.mn ,
      zn: microSolution.zn + baseAdaptation.zn ,
      cu: microSolution.cu  + baseAdaptation.cu ,
      mo: microSolution.mo + baseAdaptation.mo
    }
    console.log("adaptedTraceElements", adaptedTraceElements);


    let correctedEC = {
      fe: adaptedTraceElements.fe * this.ECValues.ECfactor ,
      b:  adaptedTraceElements.b  * this.ECValues.ECfactor ,
      mn: adaptedTraceElements.mn * this.ECValues.ECfactor ,
      zn: adaptedTraceElements.zn * this.ECValues.ECfactor ,
      cu: adaptedTraceElements.cu * this.ECValues.ECfactor ,
      mo: adaptedTraceElements.mo * this.ECValues.ECfactor
    }
    console.log("correctedEC", correctedEC);
    this.correctedSolution.traceElements = correctedEC;
    console.log("CORRECTED TRACE", this.correctedSolution.traceElements);
  }


  /*Set the StandardMacro values required for the calculations*/
  setStandardMacrosSolution (){
    console.log("setStandardMacrosSolution");
    //search the solution standard indicate in the crop data
    let targetSolution = new CropSolution({})

    //if organic substrate it is selected, search organic solution,
    // else, search hydro solution.
    if (this.analysisInformation.substrate == "organic") {
      //get the solution from array Solution [hydro, organic];


      console.log("Program", "Organic solution");
      console.log("solution Organic", this.cropInformation.cropObj.solutions.organic);
      //targetSolution     = Object.assign(this.cropInformation.cropObj.solutions.organic);
      targetSolution.macroElements = this.cropInformation.cropObj.solutions.organic.macroElements;
      targetSolution.traceElements = this.cropInformation.cropObj.solutions.organic.traceElements;
      targetSolution.formulaId     = this.cropInformation.cropObj.solutions.organic.formulaId;
      targetSolution.id            = this.cropInformation.cropObj.solutions.organic.id;
      targetSolution.substrateId   = this.cropInformation.cropObj.solutions.organic.substrateId;
      targetSolution.initValues();


    }else{
      console.log("Program", "hydro solution");
      console.log("solution Hydro", this.cropInformation.cropObj.solutions.hydro);
      //targetSolution = Object.assign(this.cropInformation.cropObj.solutions.hydro);
      targetSolution.macroElements = this.cropInformation.cropObj.solutions.hydro.macroElements;
      targetSolution.traceElements = this.cropInformation.cropObj.solutions.hydro.traceElements;
      targetSolution.formulaId     = this.cropInformation.cropObj.solutions.hydro.formulaId;
      targetSolution.id            = this.cropInformation.cropObj.solutions.hydro.id;
      targetSolution.substrateId   = this.cropInformation.cropObj.solutions.hydro.substrateId;
      targetSolution.initValues();
    }


    this.standardSolution = targetSolution;

    console.log("this.standardSolution MACRO", this.standardSolution);
  }

  /*Set the StandardTraces values required for the calculations*/
  setStandardTracesSolution (){
    console.log("setStandardTracesSolution");
    //search the solution standard indicate in the crop data
    let targetSolution = new CropSolution({})

    //if organic substrate it is selected, search organic solution,
    // else, search hydro solution.
    if (this.analysisInformation.substrate == "organic") {
      //get the solution from array Solution [hydro, organic];


      console.log("Program", "Organic solution");
      console.log("solution Organic", this.cropInformation.cropObj.solutions.organic);
      //targetSolution  = Object.assign(this.cropInformation.cropObj.solutions.organic);
      targetSolution.macroElements = this.cropInformation.cropObj.solutions.organic.macroElements;
      targetSolution.traceElements = this.cropInformation.cropObj.solutions.organic.traceElements;
      targetSolution.formulaId     = this.cropInformation.cropObj.solutions.organic.formulaId;
      targetSolution.id            = this.cropInformation.cropObj.solutions.organic.id;
      targetSolution.substrateId   = this.cropInformation.cropObj.solutions.organic.substrateId;
      targetSolution.initValues();


    }else{
      console.log("Program", "hydro solution");
      console.log("solution Hydro", this.cropInformation.cropObj.solutions.hydro);
      //targetSolution = Object.assign(this.cropInformation.cropObj.solutions.hydro);
      targetSolution.macroElements = this.cropInformation.cropObj.solutions.hydro.macroElements;
      targetSolution.traceElements = this.cropInformation.cropObj.solutions.hydro.traceElements;
      targetSolution.formulaId     = this.cropInformation.cropObj.solutions.hydro.formulaId;
      targetSolution.id            = this.cropInformation.cropObj.solutions.hydro.id;
      targetSolution.substrateId   = this.cropInformation.cropObj.solutions.hydro.substrateId;
      targetSolution.initValues();
    }



    console.log("baseAdaptation traces", this.baseAdaptation.traceElements);
    console.log("TARGET SOLUTION", targetSolution);
    for ( let element in targetSolution.traceElements) {
      /*console.log("element", element);
      console.log("baseAdaptation", this.baseAdaptation.traceElements[element]);
      console.log("ECfactor", this.ECValues.ECfactor);
      console.log("targetSolution", targetSolution);*/
      targetSolution.calculateTracesLimitsValues(
          element,
          this.baseAdaptation.traceElements[element], 
          this.ECValues.ECfactor
        );
    }//
    this.standardSolution.traceElements = Object.assign(targetSolution.traceElements);
    console.log("this.standardSolution MICRO", this.standardSolution);
  }



  /*Set the solution for all products in the program*/
  setNPKScheme (npk : Formula){
    console.log("setNPKScheme");
    npk.setNpkInMmoll();
    this.formula =  npk;
    console.log("NPK Formula:" , npk);

    //set npk formula
    this.NPKScheme.formula = this.setSchemeEntry(npk.macroElementsMmoll, npk.traceElementsMmoll);



    //required
    let recomendedMacros = this.correctedSolution.macroElements;
    let recomendedTraces = this.correctedSolution.traceElements;

    this.NPKScheme.required = this.setSchemeEntry(recomendedMacros, recomendedTraces);


    let nitricAcid = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    }

    nitricAcid.macroElements.setH3o( this.NPKScheme.required.macroElements.h3o);
    nitricAcid.macroElements.setNo3( nitricAcid.macroElements.h3o);
    this.NPKScheme.nitricAcid = this.setSchemeEntry(nitricAcid.macroElements, nitricAcid.traceElements);
    console.log("this.NPKScheme.nitricAcid", this.NPKScheme.nitricAcid);

    //npk
    let npkCalculation = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    }
    npkCalculation.macroElements.setNo3(
      ((this.NPKScheme.formula.macroElements.no3
        * this.NPKScheme.required.macroElements.h2po4)
      / this.NPKScheme.formula.macroElements.h2po4)
      );
    npkCalculation.macroElements.setH2po4(
      this.NPKScheme.required.macroElements.h2po4
      );
    npkCalculation.macroElements.setSo4(
      ((this.NPKScheme.formula.macroElements.so4
        * this.NPKScheme.required.macroElements.h2po4 )
      / this.NPKScheme.formula.macroElements.h2po4)
      );
    npkCalculation.macroElements.setNh4(
      ((this.NPKScheme.required.macroElements.h2po4
        * this.NPKScheme.formula.macroElements.nh4)
      / this.NPKScheme.formula.macroElements.h2po4)
      );
    npkCalculation.macroElements.setK(
      ((this.NPKScheme.required.macroElements.h2po4
        * this.NPKScheme.formula.macroElements.k)
      / this.NPKScheme.formula.macroElements.h2po4)
      );
    npkCalculation.macroElements.setMg(
      ((this.NPKScheme.required.macroElements.h2po4
        * this.NPKScheme.formula.macroElements.mg)
      / this.NPKScheme.formula.macroElements.h2po4)
      );

    //tracelements
    npkCalculation.traceElements.setFe(
      ((1000 * this.NPKScheme.required.macroElements.h2po4)
        * this.NPKScheme.formula.traceElements.fe )
      / this.NPKScheme.formula.macroElements.h2po4
      );
    npkCalculation.traceElements.setB(
      ((1000 * this.NPKScheme.required.macroElements.h2po4)
        * this.NPKScheme.formula.traceElements.b  )
      / this.NPKScheme.formula.macroElements.h2po4
      );
    npkCalculation.traceElements.setMn(
      ((1000 * this.NPKScheme.required.macroElements.h2po4)
        * this.NPKScheme.formula.traceElements.mn )
      / this.NPKScheme.formula.macroElements.h2po4
      );
    npkCalculation.traceElements.setZn(
      ((1000 * this.NPKScheme.required.macroElements.h2po4)
        * this.NPKScheme.formula.traceElements.zn )
      / this.NPKScheme.formula.macroElements.h2po4
      );
    npkCalculation.traceElements.setCu(
      ((1000 * this.NPKScheme.required.macroElements.h2po4)
        * this.NPKScheme.formula.traceElements.cu )
      / this.NPKScheme.formula.macroElements.h2po4
      );
    npkCalculation.traceElements.setMo(
      ((1000 * this.NPKScheme.required.macroElements.h2po4)
        * this.NPKScheme.formula.traceElements.mo )
      / this.NPKScheme.formula.macroElements.h2po4
      );

    this.NPKScheme.npk = this.setSchemeEntry(npkCalculation.macroElements,
      npkCalculation.traceElements);


    //calciumChloride


    let calciumChloride = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    };
    calciumChloride.macroElements.setCl (this.NPKScheme.required.macroElements.cl);
    calciumChloride.macroElements.setCa ((calciumChloride.macroElements.cl / 2));

    this.NPKScheme.calciumCholide35 = (calciumChloride);


    //calcium
    let ultrasolCalcium = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    };
    ultrasolCalcium.macroElements.setH3o(0);
    ultrasolCalcium.macroElements.setSo4(0);
    ultrasolCalcium.macroElements.setCl (0);
    ultrasolCalcium.macroElements.setCa (
      (this.NPKScheme.required.macroElements.ca -
        this.NPKScheme.calciumCholide35.macroElements.ca)
      );

    ultrasolCalcium.macroElements.setMg(
      (( 2 * ultrasolCalcium.traceElements.mn)
        + ultrasolCalcium.traceElements.b)
      );
    ultrasolCalcium.macroElements.setK(
      (( 2 * ultrasolCalcium.traceElements.b)
        + ultrasolCalcium.macroElements.h3o)
      );
    ultrasolCalcium.macroElements.setNo3(ultrasolCalcium.macroElements.ca * 2.2);

    ultrasolCalcium.macroElements.setH2po4(
      (( 2 * ultrasolCalcium.macroElements.k)
        + ultrasolCalcium.macroElements.mg)
      );

    ultrasolCalcium.macroElements.setNh4(
      ( 0.2 * ultrasolCalcium.macroElements.ca)
      );


    this.NPKScheme.ultrasolCalcium = this.setSchemeEntry(
      ultrasolCalcium.macroElements,
      ultrasolCalcium.traceElements
      );


    //ultrasol calmag
    let ultrasolCalmag = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    }


    if(this.analysisInformation.calciumNitrateSource.id == "ultrasolcalmag") {
      console.log("selected ultrasol calmag");
      ultrasolCalmag.macroElements.setCa (
        this.NPKScheme.required.macroElements.ca -
        this.NPKScheme.calciumCholide35.macroElements.ca);
    }else{
      ultrasolCalmag.macroElements.setCa ( 0);
    }

    this.NPKScheme.ultrasolCalmag = this.setSchemeEntry(
      ultrasolCalmag.macroElements,
      ultrasolCalmag.traceElements
      );

    //kplus
    let ultrasolKplus = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    }

    if(
      ( this.NPKScheme.required.macroElements.k -
        this.NPKScheme.npk.macroElements.k) >
      (0.1 * this.NPKScheme.required.macroElements.k )
      ){

      ultrasolKplus.macroElements.k = this.NPKScheme.required.macroElements.k -
    this.NPKScheme.npk.macroElements.k;
      }



    ultrasolKplus.macroElements.setNo3(ultrasolKplus.macroElements.k);
    ultrasolKplus.macroElements.setH2po4(ultrasolKplus.macroElements.ca);
    ultrasolKplus.macroElements.setSo4(ultrasolKplus.macroElements.mg);



    this.NPKScheme.ultrasolKPlus = this.setSchemeEntry(ultrasolKplus.macroElements,
      ultrasolKplus.traceElements);



    //magnit
    let ultrasolMagnit = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    }

    let valUltrasolCalciumNo3 = 0;

    if(this.NPKScheme.ultrasolCalcium.macroElements.no3 > 0) {
      valUltrasolCalciumNo3 = this.NPKScheme.ultrasolCalcium.macroElements.no3;
    }

    let calculationMagnit = this.NPKScheme.required.macroElements.no3 +
    this.NPKScheme.required.macroElements.nh4 -
    valUltrasolCalciumNo3 -
    this.NPKScheme.ultrasolKPlus.macroElements.no3 -
    this.NPKScheme.npk.macroElements.no3 -
    this.NPKScheme.nitricAcid.macroElements.no3 -
    this.NPKScheme.ultrasolCalcium.macroElements.nh4 -
    this.NPKScheme.npk.macroElements.nh4;

    if(
      ( this.NPKScheme.required.macroElements.mg -
        this.NPKScheme.npk.macroElements.mg)
      >
      (0.1 * this.NPKScheme.required.macroElements.mg)
      ) {
      if( calculationMagnit > (0.1 * (this.NPKScheme.required.macroElements.no3 +
        this.NPKScheme.required.macroElements.nh4))
        ) {

        ultrasolMagnit.macroElements.setMg(
          this.NPKScheme.required.macroElements.mg -
          this.NPKScheme.npk.macroElements.mg
          );
    }else{
      ultrasolMagnit.macroElements.setMg(0);
    }
    }else{
      ultrasolMagnit.macroElements.setMg(0);
    }

    ultrasolMagnit.macroElements.setNo3( ultrasolMagnit.macroElements.mg * 2);

    this.NPKScheme.ultrasolMagnit = this.setSchemeEntry(
      ultrasolMagnit.macroElements,
      ultrasolMagnit.traceElements);

    //magsul

    let ultrasolMagsul = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    };

    ultrasolMagsul.macroElements.setMg(0);
    if( (this.NPKScheme.required.macroElements.mg -
      this.NPKScheme.ultrasolMagnit.macroElements.mg-
      this.NPKScheme.npk.macroElements.mg) >
      (0.1 * this.NPKScheme.required.macroElements.mg)) {

      ultrasolMagsul.macroElements.setMg(
        (this.NPKScheme.required.macroElements.mg -
          this.NPKScheme.ultrasolMagnit.macroElements.mg -
          this.NPKScheme.npk.macroElements.mg)
        );
    }else{
      ultrasolMagsul.macroElements.setMg(0);
    }
    ultrasolMagsul.macroElements.setSo4(ultrasolMagsul.macroElements.mg);
    this.NPKScheme.ultrasolMagsul = this.setSchemeEntry(ultrasolMagsul.macroElements,
      ultrasolMagsul.traceElements);



    let controlTraceElements = {traceElements :new TraceElements({})};


    controlTraceElements.traceElements.setFe(
      this.NPKScheme.required.traceElements.fe -
      this.NPKScheme.npk.traceElements.fe);

    controlTraceElements.traceElements.setB(
      this.NPKScheme.required.traceElements.b -
      this.NPKScheme.npk.traceElements.b);

    controlTraceElements.traceElements.setMn(
      this.NPKScheme.required.traceElements.mn -
      this.NPKScheme.npk.traceElements.mn);

    controlTraceElements.traceElements.setZn(
      this.NPKScheme.required.traceElements.zn -
      this.NPKScheme.npk.traceElements.zn);

    controlTraceElements.traceElements.setCu(
      this.NPKScheme.required.traceElements.cu -
      this.NPKScheme.npk.traceElements.cu);

    controlTraceElements.traceElements.setMo(
      this.NPKScheme.required.traceElements.mo -
      this.NPKScheme.npk.traceElements.mo);

    this.NPKScheme.controlTraceElements = this.setSchemeEntry({}, controlTraceElements.traceElements);

    let control = {
      macroElements : new MacroElements({}),
      traceElements : new TraceElements({})
    };

    control.macroElements.setNo3(
              this.sumControlMacroElements("no3"));
    control.macroElements.setH2po4(
              this.sumControlMacroElements("h2po4"));
    control.macroElements.setSo4(
              this.sumControlMacroElements("so4"));
    control.macroElements.setCl(
              this.sumControlMacroElements("cl"));
    control.macroElements.setNh4(
              this.sumControlMacroElements("nh4"));
    control.macroElements.setK(
              this.sumControlMacroElements("k"));
    control.macroElements.setCa(
              this.sumControlMacroElements("ca"));
    control.macroElements.setMg(
              this.sumControlMacroElements("mg"));
    control.macroElements.setH3o(
              this.sumControlMacroElements("h3o"));




    control.traceElements.setFe(
              this.sumControlTraceElements("fe"));
    control.traceElements.setB(
              this.sumControlTraceElements("b"));
    control.traceElements.setMn(
              this.sumControlTraceElements("mn"));
    control.traceElements.setZn(
              this.sumControlTraceElements("zn"));
    control.traceElements.setCu(
              this.sumControlTraceElements("cu"));
    control.traceElements.setMo(
              this.sumControlTraceElements("mo"));

    this.NPKScheme.control = this.setSchemeEntry(control.macroElements,
      control.traceElements);

    console.log("NPK SCHEME",  this.NPKScheme);
  }


  /*create a solution object to every entry in the scheme*/
  setSchemeEntry(macros, traces){
    console.log("setSchemeEntry");
    let npkMask = {
      macroElements: new MacroElements({}),
      traceElements: new TraceElements({})
    }


    for (let element in macros) {
      npkMask.macroElements[element] = macros[element];
    }

    for (let element in traces) {
      npkMask.traceElements[element] = traces[element];
    }

    return npkMask;
  }

  /*Calculate the control standard values for macroelements*/
  setControlStandardMacroSolution (){
    console.log("setControlStandardSolution");

    //console.log("macroElements", this.standardSolution.macroElements);
    //console.log("baseAdaptation ", this.baseAdaptation.macroElements);
    for (let element in this.standardSolution.macroElements) {



      if(element != 'h3o') {
        //console.log("element: ", element);
        //console.log("standardSolution elm: ", this.standardSolution.macroElements[element]);
        //console.log("baseAdaptation elm: ", this.baseAdaptation.macroElements[element]);


        this.controlSolution.standardSolution.macroElements[element] =
        (this.standardSolution.macroElements[element].value +
          this.baseAdaptation.macroElements[element]) * this.ECValues.ECfactor;
      }
    }

    console.log("controlSolution- Standard",this.controlSolution.standardSolution );
  }

  /*Calculate the control standard values for traceelements*/
  setControlStandardTraceSolution (){
    console.log("setControlStandardSolution");


    console.log("traceElements", this.standardSolution.traceElements);
    console.log("baseAdaptation ", this.baseAdaptation.traceElements);
    for (let element in this.standardSolution.traceElements) {


      if(element != 'h3o') {
        this.controlSolution.standardSolution.traceElements[element] =
        (this.standardSolution.traceElements[element].normal.value +
          this.baseAdaptation.traceElements[element]) * this.ECValues.ECfactor;
      }

    }

    console.log("controlSolution- Standard",this.controlSolution.standardSolution );
  }

  /*Calculate the control actual values for macroelements*/
  setControlActualMacroSolution (){

    console.log("setControlActualMacroSolution");
    for (let element in this.standardSolution.macroElements) {
      console.log("element", element);
      this.controlSolution.actualSolution.macroElements[element] =
      this.NPKScheme.control.macroElements[element] +
      this.waterAnalysisInformation[this.getRelationInputKeys(element)].mmoll;
    }
    this.controlSolution.actualSolution.macroElements.h3o =
    this.waterAnalysisInformation[this.getRelationInputKeys("h3o")].mmoll -
    this.NPKScheme.control.macroElements.h3o;

    console.log("controlSolution- actual",this.controlSolution.actualSolution );
  }

  /*Calculate the control actual standard values for traceelements*/
  setControlActualTraceSolution (){

    console.log("setControlActualTraceSolution");
    /*this.controlSolution.actualSolution.traceElements.fe =
    this.NPKScheme.npk.traceElements.fe +
    this.waterAnalysisInformation.fe.umoll +
    0 +
    this.NPKScheme.controlTraceElements.traceElements.fe;*/

    this.controlSolution.actualSolution.traceElements.fe =
    this.NPKScheme.npk.traceElements.fe +
    this.waterAnalysisInformation.fe.umoll +
    0; //0 its the fertilizerspecs(active*fe) data that not exits for fe





    this.controlSolution.actualSolution.traceElements.b =
    this.NPKScheme.npk.traceElements.b +
    this.waterAnalysisInformation.b.umoll +
    (this.fertilizerSpecs.traceElements.boricAcid.active *
      this.fertilizerSpecs.traceElements.boricAcid.value);


    this.controlSolution.actualSolution.traceElements.mn =
    this.NPKScheme.npk.traceElements.mn +
    this.waterAnalysisInformation.mn.umoll +
    (this.fertilizerSpecs.traceElements.rexeneMn13.active *
      this.fertilizerSpecs.traceElements.rexeneMn13.value);

    this.controlSolution.actualSolution.traceElements.zn =
    this.NPKScheme.npk.traceElements.zn +
    this.waterAnalysisInformation.zn.umoll +
    (this.fertilizerSpecs.traceElements.rexeneZn15.active *
      this.fertilizerSpecs.traceElements.rexeneZn15.value);


    this.controlSolution.actualSolution.traceElements.cu =
    this.NPKScheme.npk.traceElements.cu +
    this.waterAnalysisInformation.cu.umoll +
    (this.fertilizerSpecs.traceElements.rexeneCu15.active *
      this.fertilizerSpecs.traceElements.rexeneCu15.value);

    this.controlSolution.actualSolution.traceElements.mo =
    this.NPKScheme.npk.traceElements.mo +
    this.waterAnalysisInformation.mo.umoll +
    (this.fertilizerSpecs.traceElements.naMoO4.active *
      this.fertilizerSpecs.traceElements.naMoO4.value);


    console.log("controlSolution trace- actual",this.controlSolution.actualSolution );
  }

  /*Calculate the alerts print in the view, based on control solution*/
  setControlAlertTraceElements(){
    let controlAlertTrace = {
      fe : "",
      b  : "",
      mn : "",
      zn : "",
      cu : "",
      mo : "",
    };

    for (let element in controlAlertTrace) {
      controlAlertTrace[element] = this.setControlAlertByElement(element);
    }

    console.log("controlAlertTrace", controlAlertTrace);
    return controlAlertTrace;
  }

  /*Calculate the alerts print in the view, based on control solution*/
  setControlAlertByElement(element){

    console.log("setControlAlertByElement");
    console.log("element:", element);
    let value = "";
    let targetSolution = null;

    if (this.analysisInformation.substrate == "organic") {
      console.log("substrate organic");
      targetSolution = this.cropInformation.cropObj.solutions.organic.traceElements;
    }else{
      console.log("substrate hydro");
      targetSolution = this.cropInformation.cropObj.solutions.hydro.traceElements;
    }

    let actualValue = Number(this.controlSolution.actualSolution.traceElements[element]);
    console.log("actualValue", actualValue);
    console.log("targetSolution.min.warning", targetSolution[element].min.warning);
    console.log("targetSolution.min.ok", targetSolution[element].min.ok);
    console.log("targetSolution.max.ok", targetSolution[element].max.ok);
    console.log("targetSolution.max.warning", targetSolution[element].max.warning);


    if(actualValue < Number(targetSolution[element].min.warning)) {
      console.log("value", "--");
      value = "--";
      return value;
    }

    if(actualValue < Number(targetSolution[element].min.ok)) {
      console.log("value <mok", "-");
      value = "-";
      return value;
    }
    else if (actualValue < Number(targetSolution[element].max.ok)){
      console.log("value <maxok", "OK");
      value = "OK";
      return value;
    }
    else if (actualValue <= Number(targetSolution[element].max.warning)){
      console.log("value <= maxw", "+");
      value = "+";
      return value;
    }
    else if (actualValue > Number(targetSolution[element].max.warning)){
      console.log("value >maxw", "++");
      value = "++";
      return value;
    }
  }

  /*set A Tank configuration*/
  setATank(){
    let aTank = {
      ultrasolCalcium : {
        name: "Ultrasol® Calcium (15,5%N-26%CaO)",
        value: 0,
        unit: "kg"
      },
      liquidCa : {
        name: "Liquid Calcium Nitrate",
        value: 0,
        unit: "liter"
      },
      calciumChloride : {
        name: "Calcium Chloride (35% liquid)",
        value: 0,
        unit: "liter"
      },
      calciumCholideSolid: {
        name: "Calcium Chloride ",
        value: 0,
        unit: "kg"
      },
      ultrasolMagnit : {
        name: "Ultrasol® Magnit",
        value: 0,
        unit: "kg"
      },
      ultrasolKPlus : {
        name: "Ultrasol® K Plus",
        value: 0,
        unit: "kg"
      },
      nitricAcid : {
        name: "Nitric acid",
        value: 0,
        unit: "liter"
      }
    }

    console.log("this.NPKScheme",this.NPKScheme );
    console.log("this.fertilizerSpecs",this.fertilizerSpecs );

    if(this.NPKScheme.ultrasolCalcium.macroElements.ca > 0 && this.fertilizerSpecs.macroElements.ultrasolCalcium.value >0) {
      console.log("NPKScheme ultrasolCalcium > 0 specs ultrasolCalcium > 0 " );
      console.log("value",this.NPKScheme.ultrasolCalcium.macroElements.ca );
      aTank.ultrasolCalcium.value = this.calculateUltrasolCaATank(
        this.NPKScheme.ultrasolCalcium.macroElements.ca,
        this.fertilizerSpecs.macroElements.ultrasolCalcium.value);
    }
3
    if(this.NPKScheme.ultrasolCalcium.macroElements.ca >= 0 && this.fertilizerSpecs.macroElements.liquidCa.value >0) {
      console.log("NPKScheme ultrasolCalcium > 0 specs ultrasolCalcium > 0 " );

      aTank.liquidCa.name += " "+ this.analysisInformation.calciumNitrateSource.concentration;
      aTank.liquidCa.value = this.calculateLiquidCaATank(
        this.NPKScheme.ultrasolCalcium.macroElements.ca,
        this.fertilizerSpecs.macroElements.liquidCa.value);
    }

    //calcium chloride liquid
    if(this.NPKScheme.calciumCholide35.macroElements.ca > 0 &&
      this.analysisInformation.calciumChlorideSource.id == 'liquid') {
      console.log("CHL its liquid, CalciumChloride > 0 chl: ", this.fertilizerSpecs.macroElements.calciumChloride.value);
      aTank.calciumChloride.name = "Calcium chloride " + 
                                  this.analysisInformation.calciumChlorideSource.name + 
                                  " ("+ this.analysisInformation.calciumChlorideSource.concentration +
                                  " % )" ;
      aTank.calciumChloride.value = this.calculateCaChlorideATank(
        this.NPKScheme.calciumCholide35.macroElements.cl,
        this.fertilizerSpecs.macroElements.calciumChloride.value);
    }

    if(this.NPKScheme.calciumCholide35.macroElements.ca > 0 &&
      this.analysisInformation.calciumChlorideSource.id != 'liquid' ) {
      console.log("CHL its solid, CalciumChloride > 0 chl: ", this.fertilizerSpecs.macroElements.calciumCholideSolid.value);
      aTank.calciumCholideSolid.name =this.analysisInformation.calciumChlorideSource.name + 
                                  " " + this.analysisInformation.calciumChlorideSource.concentration;
      aTank.calciumCholideSolid.value = this.calculateSolidCaChlorideATank(
      this.NPKScheme.calciumCholide35.macroElements.cl,
      this.fertilizerSpecs.macroElements.calciumCholideSolid.value);
    }

    if(this.NPKScheme.ultrasolMagnit.macroElements.mg > 0) {
      aTank.ultrasolMagnit.value = this.calculateUltrasolMagnitATank(
        this.NPKScheme.ultrasolMagnit.macroElements.mg,
        this.fertilizerSpecs.macroElements.ultrasolMagnit.value);
    }

    if(this.NPKScheme.ultrasolKPlus.macroElements.no3 > 0) {
      aTank.ultrasolKPlus.value = this.calculateUltrasolKPlusATank(
        this.NPKScheme.ultrasolKPlus.macroElements.no3,
        this.fertilizerSpecs.macroElements.ultrasolKPlus.value);

    }

    if(this.NPKScheme.nitricAcid.macroElements.h3o > 0) {
      aTank.nitricAcid.name += " " + this.analysisInformation.acidSource.name + "%";
      aTank.nitricAcid.value = this.calculateNitricAcidATank(
        this.NPKScheme.nitricAcid.macroElements.h3o,
        this.fertilizerSpecs.macroElements.nitricAcid.value);

    }

    console.log("ATank", aTank);
    this.tanks.a = aTank;
  }

  /*set B Tank configuration*/
  setBTank() {
    var bTank = {
      solution : {
        name: this.formula.ultrasol,
        value : 0,
        unit: "kg"
      },
      magsul : {
        name: "Ultrasol® Magsul 16%",
        value : 0,
        unit: "kg"
      },
      boricAcid: {
        name: "Boric Acid",
        value : 0,
        unit: "kg"
      },
      rexeneZn15: {
        name: "Ultrasol® Micro Rexene® Zn 15",
        value : 0,
        unit: "kg"
      },
      rexeneMn13: {
        name: "Ultrasol® Micro Rexene® Mn 13",
        value : 0,
        unit: "kg"
      },
      rexeneCu15: {
        name: "Ultrasol® Micro Rexene® Cu 15",
        value : 0,
        unit: "kg"
      },
      naMoO4: {
        name: "NaMoO4",
        value : 0,
        unit: "kg"
      },
      rexeneFeE13: {
        name: "Ultrasol® Micro Rexene® FeE 13",
        value : 0,
        unit: "kg"
      },
      rexeneFeD12: {
        name: "Ultrasol® Micro Rexene® FeD 12",
        value : 0,
        unit: "kg"
      },
      rexeneFeQ48: {
        name: "Ultrasol® Micro Rexene® FeQ 48",
        value : 0,
        unit: "kg"
      }
    };

    bTank.solution.value = this.calculateSolutionFertilizerBtank(
      this.NPKScheme.formula.macroElements.h2po4,
      this.NPKScheme.required.macroElements.h2po4
      );
    if(this.NPKScheme.ultrasolMagsul.macroElements.mg >0) {

      bTank.magsul.value = this.calculateUltrasolMagsulBTank(
        this.NPKScheme.ultrasolMagsul.macroElements.mg,
        this.fertilizerSpecs.macroElements.ultrasolMagsul.value
        );
    }


    if(this.fertilizerSpecs.traceElements.boricAcid.active > 0) {
      bTank.boricAcid.value = this.calculateBoricAcidBTank(
        this.fertilizerSpecs.traceElements.boricAcid.value,
        this.fertilizerSpecs.traceElements.boricAcid.mw,
        this.fertilizerSpecs.traceElements.boricAcid.percent
        );
    }


    if(this.fertilizerSpecs.traceElements.rexeneZn15.active > 0) {
      bTank.rexeneZn15.value = this.calculateUltrasolRexeneZn15BTank(
        this.fertilizerSpecs.traceElements.rexeneZn15.value,
        this.fertilizerSpecs.traceElements.rexeneZn15.mw,
        this.fertilizerSpecs.traceElements.rexeneZn15.percent
        );
    }
    if(this.fertilizerSpecs.traceElements.rexeneMn13.active > 0) {
      bTank.rexeneMn13.value = this.calculateUltrasolRexeneMn13BTank(
        this.fertilizerSpecs.traceElements.rexeneMn13.value,
        this.fertilizerSpecs.traceElements.rexeneMn13.mw,
        this.fertilizerSpecs.traceElements.rexeneMn13.percent
        );
    }
    if(this.fertilizerSpecs.traceElements.rexeneCu15.active > 0) {

      bTank.rexeneCu15.value = this.calculateUltrasolRexeneCu15BTank(
        this.fertilizerSpecs.traceElements.rexeneCu15.value,
        this.fertilizerSpecs.traceElements.rexeneCu15.mw,
        this.fertilizerSpecs.traceElements.rexeneCu15.percent
        );
    }
    if(this.fertilizerSpecs.traceElements.naMoO4.active > 0) {

      bTank.naMoO4.value = this.calculateUltrasolNaMoO4BTank(
        this.fertilizerSpecs.traceElements.naMoO4.value,
        this.fertilizerSpecs.traceElements.naMoO4.mw,
        this.fertilizerSpecs.traceElements.naMoO4.percent
        );
    }
    if(this.fertilizerSpecs.traceElements.rexeneFeE13.active > 0) {

      bTank.rexeneFeE13.value = this.calculateUltrasolRexeneFeE13BTank(
        this.fertilizerSpecs.traceElements.rexeneFeE13.value,
        this.fertilizerSpecs.traceElements.rexeneFeE13.mw,
        this.fertilizerSpecs.traceElements.rexeneFeE13.percent
        );
    }
    if(this.fertilizerSpecs.traceElements.rexeneFeD12.active > 0) {

      bTank.rexeneFeD12.value = this.calculateUltrasolRexeneFeD12BTank(
        this.fertilizerSpecs.traceElements.rexeneFeD12.value,
        this.fertilizerSpecs.traceElements.rexeneFeD12.mw,
        this.fertilizerSpecs.traceElements.rexeneFeD12.percent
        );
    }
    if(this.fertilizerSpecs.traceElements.rexeneFeQ48.active > 0) {

      bTank.rexeneFeQ48.value = this.calculateUltrasolRexeneFeQ48BTank(
        this.fertilizerSpecs.traceElements.rexeneFeQ48.value,
        this.fertilizerSpecs.traceElements.rexeneFeQ48.mw,
        this.fertilizerSpecs.traceElements.rexeneFeQ48.percent
        );
    }

    console.log("BTANK", bTank);
    this.tanks.b = bTank;
  }

  /*set specifications for traceelements required*/
  setTraceFertilizerSpecifications(){
    console.log("setTraceFertilizerSpecifications");
    let scheme = {
      boricAcid: {
        active : 0,
        percent: 17,
        mw: 10.8,
        value: 0
      },
      rexeneZn15: {
        active : 0,
        percent: 15,
        mw: 54.94,
        value: 0
      },
      rexeneMn13: {
        active : 0,
        percent: 13,
        mw: 65.39,
        value: 0
      },
      rexeneCu15: {
        active : 0,
        percent: 15,
        mw: 63.55,
        value: 0
      },
      naMoO4: {
        active : 0,
        percent: 54.2,
        mw: 95.94,
        value: 0
      },
      rexeneFeE13: {
        active : 0,
        percent: 13,
        mw: 55.85,
        value: 0
      },
      rexeneFeD12: {
        active : 0,
        percent: 12,
        mw: 55.85,
        value: 0
      },
      rexeneFeQ48: {
        active : 0,
        percent: 6,
        mw: 55.85,
        value: 0
      }

    }

    scheme.boricAcid.value =
    this.NPKScheme.controlTraceElements.traceElements.b -
    this.waterAnalysisInformation.b.umoll;

    scheme.rexeneZn15.value =
    this.NPKScheme.controlTraceElements.traceElements.zn -
    this.waterAnalysisInformation.zn.umoll;

    scheme.rexeneMn13.value =
    this.NPKScheme.controlTraceElements.traceElements.mn -
    this.waterAnalysisInformation.mn.umoll;

    scheme.rexeneCu15.value =
    this.NPKScheme.controlTraceElements.traceElements.cu -
    this.waterAnalysisInformation.cu.umoll;

    scheme.naMoO4.value =
    this.NPKScheme.controlTraceElements.traceElements.mo -
    this.waterAnalysisInformation.mo.umoll;

    scheme.rexeneFeE13.value = 0;
    scheme.rexeneFeD12.value = 0;
    scheme.rexeneFeQ48.value = 0;

    if(this.NPKScheme.controlTraceElements.traceElements.fe > 0){

      let restFe =
      this.NPKScheme.controlTraceElements.traceElements.fe -
      this.NPKScheme.required.traceElements.fe;

      let restRequiredFe =
      this.NPKScheme.required.traceElements.fe -
      this.NPKScheme.required.traceElements.fe;

      if(restFe < (restRequiredFe * 0.25)) {
        scheme.rexeneFeE13.value =
        this.NPKScheme.controlTraceElements.traceElements.fe;

        scheme.rexeneFeD12.value =
        this.NPKScheme.controlTraceElements.traceElements.fe;

        scheme.rexeneFeQ48.value =
        this.NPKScheme.controlTraceElements.traceElements.fe;
      }
    }

    //active boricAcid
    if(this.NPKScheme.npk.traceElements.b != this.NPKScheme.control.traceElements.b) {
      scheme.boricAcid.active = 1;
    }

    //active rexeneZn15
    if(this.NPKScheme.npk.traceElements.zn != this.NPKScheme.control.traceElements.zn) {
      scheme.rexeneZn15.active = 1;
    }

    //active rexeneMn13
    if(this.NPKScheme.npk.traceElements.mn != this.NPKScheme.control.traceElements.mn) {
      scheme.rexeneMn13.active = 1;
    }

    //active rexeneCu15
    if(this.NPKScheme.npk.traceElements.cu != this.NPKScheme.control.traceElements.cu) {
      scheme.rexeneCu15.active = 1;
    }

    //active naMoO4
    if(this.NPKScheme.npk.traceElements.mo != this.NPKScheme.control.traceElements.mo) {
      scheme.naMoO4.active = 1;
    }
    //active rexeneFeE13
    if(this.analysisInformation.ironChelateSource.id == "fee13") {
      if(this.NPKScheme.control.traceElements.fe >1) {
        scheme.rexeneFeE13.active = 1;
      }

    }

    //active rexeneFeD12
    if(this.analysisInformation.ironChelateSource.id == "fed12") {
      if(this.NPKScheme.control.traceElements.fe >1) {
        scheme.rexeneFeD12.active = 1;
      }
    }

    //active rexeneFeQ48
    if(this.analysisInformation.ironChelateSource.id == "feq48") {
      if(this.NPKScheme.control.traceElements.fe >1) {
        scheme.rexeneFeQ48.active = 1;
      }
    }

    console.log("setTraceFertilizerSpecifications", scheme);

    this.fertilizerSpecs.traceElements =   scheme;
  }

  /*set specifications for macroelements required*/
  setMacroFertilizerSpecifications(){
    console.log("setFertilizerSpecifications");
    console.log("data:", this.analysisInformation);
    let fertilizerScheme = {
      ultrasolCalcium : {
        value: 0
      },
      liquidCa : {
        value: 0
      },
      calciumChloride : {
        value: 0
      },
      calciumCholideSolid: {
        value: 0
      },
      ultrasolMagnit : {
        value: 0
      },
      ultrasolMagsul : {
        value: 0
      },
      ultrasolKPlus : {
        value: 0
      },
      nitricAcid : {
        value: 0
      }
    }

    console.log("calciumN: ", this.analysisInformation.calciumNitrateSource.id)
    //ultrasol calcium
    if(this.analysisInformation.calciumNitrateSource.id != "liquidcalcium") {
      console.log("ultrasolcalcium");
      fertilizerScheme.ultrasolCalcium.value = this.calculateUltrasolCaSpecs()
    }

    //liquid calcium
    if(this.analysisInformation.calciumNitrateSource.id == "liquidcalcium") {
      console.log("liquid calcium");
      fertilizerScheme.liquidCa.value = this.calculateLiquidCaSpecs(
        this.analysisInformation.calciumNitrateSource.concentration,
        this.analysisInformation.calciumNitrateSource.density
        );
    }



    //if liquid calcium or none
    console.log("Ca chloride: ",this.analysisInformation.calciumChlorideSource);

    if(this.analysisInformation.calciumChlorideSource.id == "liquid" || 
      this.analysisInformation.calciumChlorideSource.id == "") {

      console.log("LIQUID CACHL: ",this.analysisInformation.calciumChlorideSource.id);
      fertilizerScheme.calciumChloride.value = this.calculateCaChlorideSpecs(
        this.analysisInformation.calciumChlorideSource.concentration,
        this.analysisInformation.calciumChlorideSource.density);


      
    }else{
      console.log("SOLID CACHL: ",this.analysisInformation.calciumChlorideSource.id+ " " +
        this.analysisInformation.calciumChlorideSource.concentration);
        fertilizerScheme.calciumCholideSolid.value = this.calculateSolidCaChlorideSpecs(
        this.analysisInformation.calciumChlorideSource.concentration);      
    }



    fertilizerScheme.ultrasolMagnit.value     = this.calculateUltrasolMagnitSpecs();
    fertilizerScheme.ultrasolMagsul.value     = this.calculateUltrasolMagsulSpecs(
      fertilizerScheme.ultrasolMagnit.value);
    fertilizerScheme.ultrasolKPlus.value      = this.calculateUltrasolKPlusSpecs();
    fertilizerScheme.nitricAcid.value         = this.calculateNitricAcidSpecs(
      this.analysisInformation.acidSource.concentration,
      this.analysisInformation.acidSource.density
      );

    console.log("fertilizerScheme", fertilizerScheme);
    this.fertilizerSpecs.macroElements =   fertilizerScheme;
  }


  /*get Relations between element in inputs and elements in formulas*/
  getRelationInputKeys(element){
    console.log("getRelationInputKeys: ", element );
    //linked the input data with the macroElements value
    let cWaterRelation = {
      no3 :  "nno3",
      so4:  "sso4",
      cl:  "cl",
      k:   "k",
      ca:  "ca",
      mg:  "mg",
      h3o:  "hco3",
      nh4: "nnh4",
      h2po4: "p"
    };
    return  cWaterRelation[element];
  }

  /*get the stage crop by ID*/
  getStageByID(id){
    console.log("getStageByID");
    if (this.cropInformation.cropObj != null) {
      let cropScope = this.cropInformation.cropObj;
      for (let i = 0; i < cropScope.stages.length; i++) {
        //console.log("Stage ID: " + cropScope.stages[i].id);
        let cropScopeId = cropScope.stages[i].id;
        //if match
        if (cropScopeId == id.toString()){
          console.log("Stage ID: " + cropScopeId);
          return cropScope.stages[i];
        }
      }
    }else{
      console.log("getStageByID - Crop Null");
      return null;
    }
  }

  /*Math formula for get floor Math with significance*/
  getFloorWithSignificance(number, significance) {
    //console.log("getFloorWithSignificance");
    //console.log("number", number);
    //console.log("significance", significance);
    return (number - (number % significance) ) * - 1;
  }

  /*Get the alert message based on what element and what key need to search*/
  getAlertTraceByElements(element, key){
    console.log("getAlertTraceElements");
    let alerts = {
      fe:{
        "--"     :    "Fe-content is very low! Addition of extra Ultrasol™ Micro Rexene® Fe is suggested above.",
        "-"      :    "Fe-content is low! Addition of extra Ultrasol™ Micro Rexene® Fe is suggested above.",
        "OK"     :    "",
        "+"      :    "Fe-content is high!",
        "++"     :    "Fe-content is very high! Risk for Fe-toxicity exists. The use of Ultrasol™ Crop for the selected crop and conditions is not recommended."
      },

      b:{
        "--"     :    "B-content is very low! Addition of extra Boric Acid is necessary.",
        "-"     :    "B-content is low! In case of B-deficiency symptoms add extra Boric Acid.",
        "OK"     :     "",
        "+"     :    "B-content is high!",
        "++"     :    "B-content is very high! Risk for B-toxicity exists. The use of Ultrasol™ Crop for the selected crop and conditions is not recommended."
      },


      mn:{
        "--"      :   "Mn-content is very low! Addition of extra Ultrasol™ Micro Rexene® Mn13 is necessary.",
        "-"     :    "Mn-content is low! In case of Mn-deficiency symptoms add extra Ultrasol™ Micro Rexene® Mn13.",
        "OK"     :     "",
        "+"      :   "Mn-content is high!",
        "++"      :   "Mn-content is very high! Risk for Mn-toxicity exists. The use of Ultrasol™ Crop for the selected crop and conditions is not recommended."
      },

      zn:{
        "--"     :    "Zn-content is very low! Addition of extra Ultrasol™ Micro Rexene® Zn15 is necessary.",
        "-"     :    "Zn-content is low! In case of Zn-deficiency symptoms add extra Ultrasol™ Micro Rexene® Zn15.",
        "OK"     :     "",
        "+"      :   "Zn-content is high!",
        "++"      :   "Zn-content is very high! Risk for Zn-toxicity exists. The use of Ultrasol™ Crop for the selected crop and conditions is not recommended."
      },

      cu:{
        "--"      :   "Cu-content is very low! Addition of extra Ultrasol™ Micro Rexene® Cu15 is necessary.",
        "-"      :   "Cu-content is low! In case of Cu-deficiency symptoms add extra Ultrasol™ Micro Rexene® Cu15.",
        "OK"      :    "",
        "+"      :   "Cu-content is high!",
        "++"      :   "Cu-content is very high! Risk for Cu-toxicity exists. The use of Ultrasol™ Crop for the selected crop and conditions is not recommended."
      },

      mo:{
        "--"      :   "Mo-content is very low! Addition of extra NaMoO4 is necessary.",
        "-"      :   "Mo-content is low! In case of Mo-deficiency symptoms add extra NaMoO4.",
        "OK"      :    "",
        "+"       :  "Mo-content is high!",
        "++"      :   "Mo-content is very high! Risk for Mo-toxicity exists. The use of Ultrasol™ Crop for the selected crop and conditions is not recommended."
      }
    };

    return alerts[element][key];
  }

  /*calculate the aditional traceelements needed by the crop*/
  getAditionalTraceElements(concentrationFertilizerSpecs,
    mwFertilizerSpecs, valueFertilizerSpecs, sizeTank, dilution){

    console.log("getAditionalTraceElements");

    let aditional =  mwFertilizerSpecs * valueFertilizerSpecs * sizeTank * dilution / (10000000 * concentrationFertilizerSpecs);


    return aditional;
  }

  /*get all aditional traceelements*/
  getAllAditionalTraceElements(){
    let elements = {
      fe:{ value : 0},
      b: { value : 0},
      mn:{ value : 0},
      zn:{ value : 0},
      cu:{ value : 0},
      mo:{ value : 0}
    };
    elements.fe.value = this.getAditionalTraceElements(
      this.fertilizerSpecs.traceElements.rexeneFeE13.percent,
      this.fertilizerSpecs.traceElements.rexeneFeE13.mw,
      this.fertilizerSpecs.traceElements.rexeneFeE13.value,
      this.analysisInformation.sizeTank,
      this.analysisInformation.dilutionFactor
      );
    elements.b.value = this.getAditionalTraceElements(
      this.fertilizerSpecs.traceElements.boricAcid.percent,
      this.fertilizerSpecs.traceElements.boricAcid.mw,
      this.fertilizerSpecs.traceElements.boricAcid.value,
      this.analysisInformation.sizeTank,
      this.analysisInformation.dilutionFactor
      );
    elements.mn.value = this.getAditionalTraceElements(
      this.fertilizerSpecs.traceElements.rexeneMn13.percent,
      this.fertilizerSpecs.traceElements.rexeneMn13.mw,
      this.fertilizerSpecs.traceElements.rexeneMn13.value,
      this.analysisInformation.sizeTank,
      this.analysisInformation.dilutionFactor
      );

    elements.zn.value = this.getAditionalTraceElements(
      this.fertilizerSpecs.traceElements.rexeneZn15.percent,
      this.fertilizerSpecs.traceElements.rexeneZn15.mw,
      this.fertilizerSpecs.traceElements.rexeneZn15.value,
      this.analysisInformation.sizeTank,
      this.analysisInformation.dilutionFactor
      );

    elements.cu.value = this.getAditionalTraceElements(
      this.fertilizerSpecs.traceElements.rexeneCu15.percent,
      this.fertilizerSpecs.traceElements.rexeneCu15.mw,
      this.fertilizerSpecs.traceElements.rexeneCu15.value,
      this.analysisInformation.sizeTank,
      this.analysisInformation.dilutionFactor
      );

    elements.mo.value = this.getAditionalTraceElements(
      this.fertilizerSpecs.traceElements.naMoO4.percent,
      this.fertilizerSpecs.traceElements.naMoO4.mw,
      this.fertilizerSpecs.traceElements.naMoO4.value,
      this.analysisInformation.sizeTank,
      this.analysisInformation.dilutionFactor
      );

    return elements;

  }
  /*get all alerts messages traceelements*/
  getAllAlertsTraceElements(){
    console.log("getAllAlertsTraceElements");
    let alertArr = [];
    let controlAlerts = this.setControlAlertTraceElements();
    let aditionalTrace = this.getAllAditionalTraceElements();
    for (let element in controlAlerts) {
      let elementAlert = this.getAlertTraceByElements(element, controlAlerts[element]);
      let elementAdition = aditionalTrace[element].value;
      console.log("elementAdition", elementAdition);

      if(elementAlert !="") {
        if(elementAdition > 0) {
          elementAlert += " " + Number(elementAdition).toFixed(2) + "kg";
          console.log("elementAlert", elementAlert);
        }
        alertArr.push(elementAlert);
      }
    }
    console.log("alertArr",alertArr)
    return alertArr;

  }

  /*calculate the sum needed by the control solution about the macroelements*/
  sumControlMacroElements (element){
    console.log("sumControlMacroElements");
    console.log("element", element);


    let arraySum = [
    this.NPKScheme.calciumCholide35.macroElements[element] ,
    this.NPKScheme.ultrasolCalcium.macroElements[element],
    this.NPKScheme.ultrasolCalmag.macroElements[element],
    this.NPKScheme.ultrasolKPlus.macroElements[element],
    this.NPKScheme.ultrasolMagnit.macroElements[element],
    this.NPKScheme.ultrasolMagsul.macroElements[element],
    this.NPKScheme.npk.macroElements[element],
    this.NPKScheme.nitricAcid.macroElements[element]
    ];
    let value = 0;
    for (var v = 0; v < arraySum.length; ++v) {
      if(element == "h3o") {
        value += arraySum[v];

      }else{

        if(arraySum[v] > 0 ) {
          value += arraySum[v];
        }
      }


    }



    console.log("value sum: ", value);
    return value;
  }

  /*calculate the sum needed by the control solution about the traceselements*/
  sumControlTraceElements (element){
    console.log("sumControlTraceElements");
    console.log("element", element);


    let sumElement =
    this.NPKScheme.ultrasolCalcium.traceElements[element] +
    this.NPKScheme.ultrasolCalmag.traceElements[element] +
    this.NPKScheme.ultrasolKPlus.traceElements[element] +
    this.NPKScheme.ultrasolMagnit.traceElements[element] +
    this.NPKScheme.ultrasolMagsul.traceElements[element] +
    this.NPKScheme.npk.traceElements[element]+
    this.NPKScheme.nitricAcid.traceElements[element];
    console.log("sumElement", sumElement);

    let returnValue = 0;

    if(this.NPKScheme.controlTraceElements.traceElements[element] > 0) {
      console.log("tracecontrol > 0", this.NPKScheme.controlTraceElements.traceElements[element]);
      console.log("water", { water: this.waterAnalysisInformation.fe.mmoll});

      let sumWater = sumElement + this.waterAnalysisInformation.fe.mmoll ;
      console.log("sumWater", sumWater);

      if( sumWater < this.standardSolution.traceElements[element].min.warning) {
        console.log("sumWater < warning:", this.standardSolution.traceElements[element].min.warning);

        returnValue = sumElement +
        this.NPKScheme.controlTraceElements.traceElements[element];
        console.log("returnValue", returnValue);
        return returnValue;
      }else{
        console.log("sumWater > warning");
        returnValue = sumElement ;
        console.log("returnValue", returnValue);
        return returnValue;
      }

    }else{
      console.log("tracecontrol < 0");
      returnValue = this.NPKScheme.npk.traceElements[element];

      console.log("returnValue", returnValue);
      return returnValue;
    }
  }

  /*calculate Ultrasol Calcium specs*/
  calculateUltrasolCaSpecs(){
    console.log("calculateUltrasolCaSpecs");
    let value = ( (26.5/40.1) * 10) / 1.39 ;
    console.log("value", value);
    return value;
  }

  /*calculate Liquid Calcium specs*/
  calculateLiquidCaSpecs(caConcentration, caDensity){
    let value = (26.5 / 40.1 * 10 / 1.39 / 0.265 * caConcentration * caDensity) /100;

    return value;
  }

  /*calculate Calcium Chloride specs*/
  calculateCaChlorideSpecs(caChlorideConcentration, caChlorideDensity){
    console.log("calculateCaChlorideSpecs");
    console.log("caChlorideDensity: ",caChlorideDensity);
    console.log("caChlorideConcentration: ",caChlorideConcentration);
    console.log(" multiply: ",(caChlorideDensity * caChlorideConcentration ));
    let value = ( ( ( (caChlorideDensity * caChlorideConcentration ) * 0.639) / 35.5 ) * 10 );
    console.log("value: ", value);
    return value;
  }
  /*calculate Solid Calcium Chloride specs*/
  calculateSolidCaChlorideSpecs(caChlorideConcentration){
    let value = 0;
    if(caChlorideConcentration > 0 ) {
      value =  (caChlorideConcentration / 35.5 ) * 10 ;
    }

    return value;
  }

  /*calculate Ultrasol Magnit specs*/
  calculateUltrasolMagnitSpecs(){
    let value = 3.7000;

    return value;
  }

  /*calculate Ultrasol Magsul specs*/
  calculateUltrasolMagsulSpecs(magnitMolValue){
    let magsulConcentration = 16;
    let value = (magnitMolValue / 15) * magsulConcentration;

    return value;
  }

  /*calculate Ultrasol K Plus specs*/
  calculateUltrasolKPlusSpecs(){
    let value = 9.7000

    return value;
  }

  /*calculate Nitric Acid specs*/
  calculateNitricAcidSpecs(acidConcentration, acidDensity){
    let value = acidConcentration * 0.223 / 14.067 * acidDensity * 10;
    return value;
  }

  /*calculate Ultrasol Calcium to A TANK*/
  calculateUltrasolCaATank(calcUltrasolCalciumCaValue, specsUltrasolCalciumCaValue){
    console.log("calculateUltrasolCaATank");
    console.log("ultrasol ca: ", calcUltrasolCalciumCaValue);
    console.log("specs ca: ", specsUltrasolCalciumCaValue);
    let value = calcUltrasolCalciumCaValue /
    specsUltrasolCalciumCaValue *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    1000;
    console.log("value ca: ", value);
    return value;
  }

  /*calculate Liquid Calcium to A TANK*/
  calculateLiquidCaATank(calcUltrasolCaValue, specsLiquidCaValue){
    let value = ((((calcUltrasolCaValue /
      specsLiquidCaValue) *
    this.analysisInformation.sizeTank) *
    this.analysisInformation.dilutionFactor) /
    1000);

    return value;
  }

  /*calculate Calcium Chloride to A TANK*/
  calculateCaChlorideATank(calcCaChlorideValue, specsCaChlorideValue){
    console.log("calculateCaChlorideATank");

    console.log("calcCaChlorideValue: ", calcCaChlorideValue);
    console.log("specsCaChlorideValue: ", specsCaChlorideValue);


    let value = ((((calcCaChlorideValue /
      specsCaChlorideValue) *
    this.analysisInformation.sizeTank) *
    this.analysisInformation.dilutionFactor) /
    1000);

    console.log("value: ", value);
    return value;
  }

  /*calculate Solid Calcium Chloride to A TANK*/
  calculateSolidCaChlorideATank(calcCaChlorideValue, specsCaChlorideSolidValue){
    let value = ((((calcCaChlorideValue /
      specsCaChlorideSolidValue) *
    this.analysisInformation.sizeTank) *
    this.analysisInformation.dilutionFactor) /
    1000);
    return value;
  }

  /*calculate Ultrasol Magnit to A TANK*/
  calculateUltrasolMagnitATank(calcUltrasolMagnitValue, specsUltrasolMagnitValue){
    let value = ((((calcUltrasolMagnitValue /
      specsUltrasolMagnitValue) *
    this.analysisInformation.sizeTank) *
    this.analysisInformation.dilutionFactor) /
    1000);


    return value;
  }

  /*calculate Ultrasol Magsul to A TANK*/
  calculateUltrasolKPlusATank(calcUltrasolKPlusValue, specsUltrasolKPlusValue){
    let value = ((((calcUltrasolKPlusValue /
      specsUltrasolKPlusValue) *
    this.analysisInformation.sizeTank) *
    this.analysisInformation.dilutionFactor) /
    1000);

    return value;
  }

  /*calculate Ultrasol K Plus to A TANK*/
  calculateNitricAcidATank(calcNitricValue, specsNitricValue){
    let value = calcNitricValue *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    specsNitricValue /
    1000 ;
    return value;
  }

  /*calculate Nitric Acid to A TANK*/
  calculateSolutionFertilizerBtank(calcFormulaValue, calcRequiredValue){
    let value = ((((calcRequiredValue /
      calcFormulaValue) *
    this.analysisInformation.sizeTank) *
    this.analysisInformation.dilutionFactor) /
    1000);

    return value;
  }


  /*calculate Ultrasul Magsul B TANK*/
  calculateUltrasolMagsulBTank(calcMagsulMgValue, specsMagsulValue){
    let value = calcMagsulMgValue *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    specsMagsulValue /
    1000 ;
    return value;
  }

  /*calculate Boric Acid B TANK*/
  calculateBoricAcidBTank(specsAcidBoricValue, specsAcidBoricMw,specsAcidBoricConcentration){
    let value = specsAcidBoricMw *
    specsAcidBoricValue *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    (10000000 * specsAcidBoricConcentration);
    return value;
  }

  /*calculate Ultrasol Rexene FeE13 B TANK*/
  calculateUltrasolRexeneFeE13BTank(specsFeE13Value, specsFeE13Mw,specsFeE13Concentration){
    let value = specsFeE13Mw *
    specsFeE13Value *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    (10000000 * specsFeE13Concentration);

    return value;
  }

  /*calculate Ultrasol Rexene FeD12 B TANK*/
  calculateUltrasolRexeneFeD12BTank(specsFeD12Value, specsFeD12Mw,specsFeD12Concentration){
    let value = specsFeD12Mw *
    specsFeD12Value *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    (10000000 * specsFeD12Concentration);

    return value;
  }

  /*calculate Ultrasol Rexene FeQ48 B TANK*/
  calculateUltrasolRexeneFeQ48BTank(specsFeQ48Value, specsFeQ48Mw,specsFeQ48Concentration){
    let value = specsFeQ48Mw *
    specsFeQ48Value *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    (10000000 * specsFeQ48Concentration);

    return value;
  }

  /*calculate Ultrasol Rexene Zn15 B TANK*/
  calculateUltrasolRexeneZn15BTank(specsZn15Value, specsZn15Mw,specsZn15Concentration ){
    let value = specsZn15Mw *
    specsZn15Value *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    (10000000 * specsZn15Concentration);

    return value;
  }

  /*calculate Ultrasol Rexene Mn13 B TANK*/
  calculateUltrasolRexeneMn13BTank(specsMn13Value, specsMn13Mw,specsMn13Concentration ){
    let value = specsMn13Mw *
    specsMn13Value *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    (10000000 * specsMn13Concentration);

    return value;
  }

  /*calculate Ultrasol Rexene Cu15 B TANK*/
  calculateUltrasolRexeneCu15BTank(specsCu15Value, specsCu15Mw,specsCu15Concentration ){
    let value = specsCu15Mw *
    specsCu15Value *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    (10000000 * specsCu15Concentration);

    return value;
  }

  /*calculate NaMoO4 B TANK*/
  calculateUltrasolNaMoO4BTank(specsNaMoO4Value, specsNaMoO4Mw,specsNaMoO4Concentration ){
    let value = specsNaMoO4Mw *
    specsNaMoO4Value *
    this.analysisInformation.sizeTank *
    this.analysisInformation.dilutionFactor /
    (10000000 * specsNaMoO4Concentration);
    return value;
  }


  


  createProgramInDB(programsProvider: ProgramsProvider){
    console.log("createProgramInDB");

    let data =     {
      id             : this.id,
      basicInformation     : this.basicInformation,
      cropInformation     : this.cropInformation,
      analysisInformation   : this.analysisInformation,
      waterAnalysisInformation : this.waterAnalysisInformation
    };
    
    var stageCropObj = this.getStageByID(this.cropInformation.stageId);
    var stageCrop = "";
    if (stageCrop != null) {
        stageCrop = stageCropObj.name;
    }


    let program =  {
        uuid :     this.uuid,
        farmer:    this.basicInformation.name,
        crop:      this.cropInformation.cropObj.name,
        stage:     stageCrop,
        date:      this.basicInformation.date,
        status:    1,
        data:      JSON.stringify(data)
    }



  


    console.log("program to create:" , program);
    /*programsProvider.saveProgramAPI(program).then((result : any) => {
        console.log(result);
        if(result.status == 200) {
           console.log("todo ok, actualizando status");
        }else{
          console.log("algun error en los datos");
        }
    }, (err) => {
      console.log("no update. error conexion");
      console.log(err);
    });*/


    programsProvider.create(program)
        .then(response => {
          console.log("program insert in the db");
          console.log(program);
          
        })
        .catch( error => {
            console.log("error insert in the db");
            console.log(program);
          console.error( error );
        })
  }

  updateProgramInDB(programsProvider: ProgramsProvider){
    console.log("createProgramInDB");

    let data =     {
      id             : this.id,
      basicInformation     : this.basicInformation,
      cropInformation     : this.cropInformation,
      analysisInformation   : this.analysisInformation,
      waterAnalysisInformation : this.waterAnalysisInformation
    };
    
    var stageCropObj = this.getStageByID(this.cropInformation.stageId);
    var stageCrop = "";
    if (stageCrop != null) {
        stageCrop = stageCropObj.name;
    }


    let program =  {
        id:        this.id,
        uuid :     this.uuid,
        farmer:    this.basicInformation.name,
        crop:      this.cropInformation.cropObj.name,
        stage:     stageCrop,
        date:      this.basicInformation.date,
        status:    1,
        data:      JSON.stringify(data)
    }



  


    console.log("program to update:" , program);
    programsProvider.update(program)
        .then(response => {
          console.log("program update in the db");
          console.log(program);
          
        })
        .catch( error => {
            console.log("error update in the db");
          console.error( error );
        })
  }


}
