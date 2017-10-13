

import { Formula } from '../models/formula';
import { FormulasProvider } from '../providers/formulas';
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
  id      = "";
  basicInformation  = {
    name   : "",
    company  : "",
    sectorId  : "",
    date   : "",
    email   : ""
  };
  cropInformation  = {
    cropObj: null,
    stageId: null,
  };
  analysisInformation = {
    ECValue:     1.5,
    sizeTank:     1000,
    dilutionFactor:   100,
    substrate:     "",
    acidSource:    {
      id:    "",
      name:    "",
      concentration:  0.0,
      density:   null
    },
    calciumChlorideSource: {
      id:    "",
      name:   "",
      concentration:  0.0,
      density:   null
    },
    calciumNitrateSource: {
      id:    "",
      name:   "",
      concentration:  null,
      density:   null
    },
    ironChelateSource:    {
      id:    "",
      name:   "",
      concentration:  0.0
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

  standardSolution = {
    formulaId : null,
    substrateId: null,
    macroElements:null,
    traceElements: null
  }


  ECValues = {
    wantedEC: 0,
    standardEC: 0,
    ECfactor: 0
  }
  correctedSolution = {
    macroElements:{},
    traceElements:{}
  }

  NPKScheme =  {
    formula : null,
    required: null,
    calciumCholide35: null,
    ultrasolCalcium: null,
    ultrasolKPlus: null,
    ultrasolMagnit: null,
    ultrasolMagsul: null,
    npk: null,
    nitricAcid: null,
    control: null
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
    var thisStage =this.getStageByID(this.cropInformation.stageId);

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
    var thisStage =this.getStageByID(this.cropInformation.stageId);
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
    var thisStage =this.getStageByID(this.cropInformation.stageId);
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
    var thisStage =this.getStageByID(this.cropInformation.stageId);
    if (this.waterAnalysisInformation.sso4.mmoll > 2) {
      //too high
      console.log("Too high");
      this.waterAnalysisInformation.sso4.status = "tooHigh";
      this.waterAnalysisInformation.sso4.alert  = "Too High. " + 
      thisStage.alerts.sso4.tooHigh;
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
    var thisStage =this.getStageByID(this.cropInformation.stageId);
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
    var thisStage =this.getStageByID(this.cropInformation.stageId);
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
  verifyBValue(){
    console.log("verifyBValue");
    var thisStage =this.getStageByID(this.cropInformation.stageId);
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
    var thisStage =this.getStageByID(this.cropInformation.stageId);
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
    var thisStage =this.getStageByID(this.cropInformation.stageId);
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
    var thisStage =this.getStageByID(this.cropInformation.stageId);
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


/*
Calculate the EC factor value needed for the corrected values of macroElements
*/
setECfactor (no3, h2po4, so4, cl){
  console.log("setECfactor");
  console.log("no3", no3);
  console.log("h2po4", h2po4);
  console.log("so4", so4);
  console.log("cl", cl);
  var wantedEC  = this.analysisInformation.ECValue;
  console.log("wantedEC", wantedEC);
  var standardEC  = (0.1 * (no3 +h2po4 + (so4 * 2)+ cl)).toFixed(1);
  console.log("standardEC", standardEC);
  var ECfactor  = wantedEC / parseFloat(standardEC);
  console.log("ECfactor", ECfactor);

  this.ECValues.wantedEC   = wantedEC;
  this.ECValues.standardEC  = parseFloat(standardEC);
  this.ECValues.ECfactor   = parseFloat(ECfactor.toFixed(4));

  console.log("setECfactor", this.ECValues);
}

/*
Calculate the corrected macroElements values
needed by the crop based on base solution and adapted values.
*/
setMacroElementsRequired (){
  console.log("Program", "setMacroElementsrequired");

  //get standard values for macronuetrients
  var macroSolution = this.standardSolution.macroElements;
  console.log("macroSolution", macroSolution);

  //get the correction value for macroElements from stage object.
  var auxStage = this.getStageByID(this.cropInformation.stageId);

  var baseAdaptation = auxStage.corrections.macroElements;


  //linked the input data with the macroElements value
  var cWaterRelation = {
    no3 :  "nno3",
    so4:  "sso4",
    cl:  "cl",
    k:   "k",
    ca:  "ca",
    mg:  "mg",
    h3o:  "hco3"
  };

  //correction water macroElements values
  var cWater = {
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
  var cWaterF = {
    no3 :  0.5,
    so4:  0.25,
    cl:  0.25,
    k:   0.5,
    ca:  0.25,
    mg:  0.25
  };

  //calculate correctionWater with floormath formula
  for (let m in cWaterF){

    var keyInput  = cWaterRelation[m];

    var inputValue  = this.waterAnalysisInformation[keyInput].mmoll;

    cWater[m]   = this.getFloorWithSignificance(inputValue, cWaterF[m]);

  }
  //calculate hco3 correctionWater
  var floorHco3 = Math.floor(this.waterAnalysisInformation.hco3.mmoll - 0.5);
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
  var cMacros = {
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
  var cMacros2 = {
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
  var adaptedMacros = {
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
  var correctedEC = {
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

  console.log("correctedSolution.macroElements", this.correctedSolution.macroElements);
}



setTraceElementsRequired (){
  console.log("Program", "setTraceElementsRequired");


  var microSolution = {
    fe: 0,
    b:  0,
    mn: 0,
    zn: 0,
    cu: 0,
    mo: 0
  };
  for (var element in this.standardSolution.traceElements) {
    microSolution[element] = this.standardSolution.traceElements[element].normal.value;
  }
  console.log("microSolution", microSolution);

  //get the correction value for traceElements from stage object.
  var auxStage = this.getStageByID(this.cropInformation.stageId);
  console.log("auxStage", auxStage);

  var baseAdaptation = auxStage.corrections.traceElements;
  console.log("baseAdaptation", baseAdaptation);

  //adapted
  var adaptedTraceElements = {
    fe: microSolution.fe  + baseAdaptation.fe ,
    b:  microSolution.b  + baseAdaptation.b ,
    mn: microSolution.mn  + baseAdaptation.mn ,
    zn: microSolution.zn + baseAdaptation.zn ,
    cu: microSolution.cu  + baseAdaptation.cu ,
    mo: microSolution.mo + baseAdaptation.mo
  }
  console.log("adaptedTraceElements", adaptedTraceElements);

  console.log("ECValues", this.ECValues);
  var correctedEC = {
    fe: adaptedTraceElements.fe * this.ECValues.ECfactor ,
    b:  adaptedTraceElements.b  * this.ECValues.ECfactor ,
    mn: adaptedTraceElements.mn * this.ECValues.ECfactor ,
    zn: adaptedTraceElements.zn * this.ECValues.ECfactor ,
    cu: adaptedTraceElements.cu * this.ECValues.ECfactor ,
    mo: adaptedTraceElements.mo * this.ECValues.ECfactor
  }
  console.log("correctedEC", correctedEC);
  this.correctedSolution.traceElements = correctedEC;
  console.log("correctedSolution.traceElements", this.correctedSolution.traceElements);
}

setStandardSolution (){
  //search the solution standard indicate in the crop data
  var targetSolution = null;

  //if organic substrate it is selected, search organic solution,
  // else, search hydro solution.
  if (this.analysisInformation.substrate == "organic") {
    //get the solution from array Solution [hydro, organic];

    //targetSolution = this.cropInformation.cropObj.solutions.organic;
    console.log("solution", this.cropInformation.cropObj.solutions.organic);
    this.standardSolution.macroElements = this.cropInformation.cropObj.solutions.organic.macroElements;
    this.standardSolution.traceElements = this.cropInformation.cropObj.solutions.organic.traceElements;
    this.standardSolution.formulaId     = this.cropInformation.cropObj.solutions.organic.formulaId;
    this.standardSolution.substrateId   = this.cropInformation.cropObj.solutions.organic.substrateId;
    console.log("Program", "Organic solution");
    for (var key in this.standardSolution) {
      console.log("solution control " + key, this.standardSolution[key]);
    }


  }else{
    console.log("solution", this.cropInformation.cropObj.solutions.hydro);
    //targetSolution = this.cropInformation.cropObj.solutions.hydro;
    this.standardSolution.macroElements = this.cropInformation.cropObj.solutions.hydro.macroElements;
    this.standardSolution.traceElements = this.cropInformation.cropObj.solutions.hydro.traceElements;
    this.standardSolution.formulaId     = this.cropInformation.cropObj.solutions.hydro.formulaId;
    this.standardSolution.substrateId   = this.cropInformation.cropObj.solutions.hydro.substrateId;
    console.log("Program", "hydro solution");
    for (var key in this.standardSolution) {
      console.log("solution control " + key, this.standardSolution[key]);
    }
  }
}

/*Set the base values nedeed for calculate the formula*/
setCalculationsValues (formulasProvider: FormulasProvider){
  this.setStandardSolution();
  this.setECfactor(
    this.standardSolution.macroElements.no3.value,
    this.standardSolution.macroElements.h2po4.value,
    this.standardSolution.macroElements.so4.value,
    this.standardSolution.macroElements.cl.value
    );
  this.setMacroElementsRequired();
  this.setTraceElementsRequired();
  console.log("standardSolution:" , this.standardSolution);
  var npk: Formula =  formulasProvider.getFormulaById(this.standardSolution.formulaId);

}

getStageByID(id){
  if (this.cropInformation.cropObj != null) {
    var cropScope = this.cropInformation.cropObj;
    for (var i = 0; i < cropScope.stages.length; i++) {
      console.log("Stage ID: " + cropScope.stages[i].id);
      var cropScopeId = cropScope.stages[i].id;
      //if match
      if (cropScopeId == id.toString()){
        console.log("Stage ID: " + cropScopeId);
        return cropScope.stages[i];
      }
    }
  }else{
    console.log("Crop Null");
    return null;
  }
}

getFloorWithSignificance(number, significance) {
  return (number - (number % significance) ) * - 1;
}

  setNPKScheme (npk : Formula){
    npk.setNpkInMmoll();
    console.log("NPK:" , npk);
    var npkMask = {
      macroElements:{
        no3 : 0,
        h2po4: 0,
        so4: 0,
        cl: 0,
        nh4:0,
        k: 0,
        ca: 0,
        mg:0,
        h3o: 0
      },
      traceElements:{
        fe: 0,
        b: 0,
        mn: 0,
        zn: 0,
        Cu: 0,
        Mo : 0
      }}


      //set npk formula
      this.NPKScheme.formula = this.setSchemeEntry(npk.macroElementsMmoll, npk.traceElementsMmoll);




      let recomendedMacros = this.correctedSolution.macroElements;
      let recomendedTraces = this.correctedSolution.traceElements;

      this.NPKScheme.required = this.setSchemeEntry(recomendedMacros, recomendedTraces);




      let calciumChloride = {};
          calciumChloride.macroElements.cl = this.NPKScheme.required.macroElements.cl;
          calciumChloride.macroElements.ca = calciumChloride.macroElements.cl / 2;

      this.NPKScheme.calciumCholide35 = (calciumChloride.macroElements, {});



      let ultrasolCalcium = {};
        ultrasolCalcium.traceElements = {
          fe: 0,
          b:  0,
          mn: 0,
          zn: 0,
          cu: 0,
          mo: 0
        };
        ultrasolCalcium.macroElements.h3o = 0;
        ultrasolCalcium.macroElements.so4 = 0;
        ultrasolCalcium.macroElements.cl = 0;
        ultrasolCalcium.macroElements.ca = this.NPKScheme.required.macroElements.ca -
                                           this.NPKScheme.calciumCholide35.ca;

        ultrasolCalcium.macroElements.mg = ( 2 * ultrasolCalcium.traceElements.mn) + ultrasolCalcium.traceElements.b;
        ultrasolCalcium.macroElements.k = ( 2 * ultrasolCalcium.traceElements.b) + ultrasolCalcium.macroElements.h3o;                                   
        ultrasolCalcium.macroElements.no3 = ultrasolCalcium.macroElements.ca * 2.2;

        ultrasolCalcium.macroElements.h2po4 =  ( 2 * ultrasolCalcium.macroElements.k) + ultrasolCalcium.macroElements.mg; 

        this.NPKScheme.ultrasolCalcium = this.setSchemeEntry(ultrasolCalcium.macroElements, ultrasolCalcium.traceElements);
  
        let ultrasolCalmag = {
          ca: 0
        }

        if(condition) {
          // code...
        }



  }

  setSchemeEntry(macros, traces){
      var npkMask = {
      macroElements:{
        no3 : 0,
        h2po4: 0,
        so4: 0,
        cl: 0,
        nh4:0,
        k: 0,
        ca: 0,
        mg:0,
        h3o: 0
      },
      traceElements:{
        fe: 0,
        b: 0,
        mn: 0,
        zn: 0,
        Cu: 0,
        Mo : 0
      }}


      for (let element in macros) {
        npkMask.macroElements[element] = macros[element];
      }

      for (let element in traces) {
        npkMask.traceElements[element] = traces[element];
      }

      return npkMask;
  }
}
