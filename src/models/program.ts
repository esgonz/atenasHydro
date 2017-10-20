

    import { Formula } from '../models/formula';
    import { MacroElements } from '../models/macroelements';
    import { TraceElements } from '../models/traceelements';

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
        id = "";
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
        baseAdaptation =  { 
            macroElements : new MacroElements({}), 
            traceElements: new TraceElements({})
        }

        ECValues = {
            wantedEC: 0,
            standardEC: 0,
            ECfactor: 0
        }
        correctedSolution = {
            macroElements: {}, 
            traceElements: {}
        }

        NPKScheme = {
            formula : {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            required: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            calciumCholide35: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            ultrasolCalcium: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            ultrasolCalmag: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            ultrasolKPlus: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            ultrasolMagnit: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            ultrasolMagsul: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            npk: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            nitricAcid: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            controlTraceElements: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
            control: {macroElements : new MacroElements({}), traceElements: new TraceElements({})},
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

        /*Set the base values nedeed for calculate the formula*/
        setCalculationsValues (formulasProvider: FormulasProvider){
            console.log("setCalculationsValues");
            /*TEST DATA***/
            this.analysisInformation = {
                ECValue:     1.5,
                sizeTank:     1000,
                dilutionFactor:   100,
                substrate:     "organic",
                acidSource:    {
                    id:    "38",
                    name:    "",
                    concentration:  38,
                    density:   1.235
                },
                calciumChlorideSource: {
                    id:    "liquid",
                    name:   "",
                    concentration:  35,
                    density:   1.33
                },
                calciumNitrateSource: {
                    id:    "liquidcalcium",
                    name:   "",
                    concentration:  9,
                    density:   1.465
                },
                ironChelateSource:    {
                    id:    "fed12",
                    name:   "",
                    concentration:  12
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





            this.setStandardSolution();
            this.setAdaptedSolution();
            this.setECfactor(
                this.standardSolution.macroElements.no3.value,
                this.standardSolution.macroElements.h2po4.value,
                this.standardSolution.macroElements.so4.value,
                this.standardSolution.macroElements.cl.value
                );
            this.setMacroElementsRequired();
            this.setTraceElementsRequired();
            let npk: Formula = formulasProvider.getFormulaById(this.standardSolution.formulaId);
            this.setNPKScheme(npk);
            this.setControlStandardSolution();
            this.setControlActualSolution();
            this.setTraceFertilizerSpecifications();
            this.setFertilizerSpecifications();
            this.setATank();
            this.setBTank();
        }

        /*
        Calculate the EC factor value needed for the corrected values of macroElements
        */
        setECfactor (no3, h2po4, so4, cl){
            console.log("setECfactor");

            let wantedEC  = this.analysisInformation.ECValue;
            let standardEC  = (0.1 * (no3 +h2po4 + (so4 * 2)+ cl)).toFixed(1);
            let ECfactor  = wantedEC / parseFloat(standardEC);


            this.ECValues.wantedEC   = wantedEC;
            this.ECValues.standardEC = parseFloat(standardEC);
            this.ECValues.ECfactor   = parseFloat(ECfactor.toFixed(5));

            console.log("EC VALUES", this.ECValues);
        }

        /*
        Calculate the corrected macroElements values
        needed by the crop based on base solution and adapted values.
        */
        setAdaptedSolution(){
            console.log("setAdaptedSolution")
            let auxStage       = this.getStageByID(this.cropInformation.stageId);
            console.log("auxStage", auxStage)
            this.baseAdaptation.macroElements = auxStage.corrections.macroElements;
            this.baseAdaptation.macroElements.h3o     = 0;
            this.baseAdaptation.macroElements.cl      = 0;
            this.baseAdaptation.traceElements = auxStage.corrections.traceElements;
        }



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
        /**/
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
                console.log("cWater[m]",cWater[m]);
            }

            //calculate hco3 correctionWater
            let floorHco3 = Math.floor(this.waterAnalysisInformation.hco3.mmoll - 0.5);
            
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

            console.log("ECValues", this.ECValues);
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

        setStandardSolution (){
            console.log("set StandardSolution");
            //search the solution standard indicate in the crop data
            let targetSolution = {macroElements: {}, traceElements: {}};

            this.standardSolution.macroElements = {
                no3 :  null,
                h2po4:  null,
                so4:    null,
                cl:  null,
                nh4: null,
                k:   null,
                ca:  null,
                mg:  null,
                h3o: null,
            };
            this.standardSolution.traceElements = {
                fe: null,
                b:  null,
                mn: null,
                zn: null,
                cu: null,
                mo: null
            };
            //if organic substrate it is selected, search organic solution,
            // else, search hydro solution.
            if (this.analysisInformation.substrate == "organic") {
                //get the solution from array Solution [hydro, organic];             

                //targetSolution = this.cropInformation.cropObj.solutions.organic;
                console.log("solution", this.cropInformation.cropObj.solutions.organic);
                targetSolution.macroElements = this.cropInformation.cropObj.solutions.organic.macroElements;
                targetSolution.traceElements = this.cropInformation.cropObj.solutions.organic.traceElements;
                this.standardSolution.formulaId     = this.cropInformation.cropObj.solutions.organic.formulaId;
                this.standardSolution.substrateId   = this.cropInformation.cropObj.solutions.organic.substrateId;
                console.log("Program", "Organic solution");

            }else{
                console.log("solution", this.cropInformation.cropObj.solutions.hydro);
                //targetSolution = this.cropInformation.cropObj.solutions.hydro;


                targetSolution.macroElements = this.cropInformation.cropObj.solutions.hydro.macroElements;
                targetSolution.traceElements = this.cropInformation.cropObj.solutions.hydro.traceElements;
                this.standardSolution.formulaId     = this.cropInformation.cropObj.solutions.hydro.formulaId;
                this.standardSolution.substrateId   = this.cropInformation.cropObj.solutions.hydro.substrateId;
                console.log("Program", "hydro solution");
            }

            for (let element in this.standardSolution.macroElements) {
                this.standardSolution.macroElements[element] = targetSolution.macroElements[element];
            }
            for (let element in this.standardSolution.traceElements) {
                this.standardSolution.traceElements[element] = targetSolution.traceElements[element];
            }

            console.log("this.standardSolution", this.standardSolution);

        }



        getStageByID(id){
            //console.log("getStageByID");
            if (this.cropInformation.cropObj != null) {
                let cropScope = this.cropInformation.cropObj;
                for (let i = 0; i < cropScope.stages.length; i++) {
                    //console.log("Stage ID: " + cropScope.stages[i].id);
                    let cropScopeId = cropScope.stages[i].id;
                    //if match
                    if (cropScopeId == id.toString()){
                        //console.log("Stage ID: " + cropScopeId);
                        return cropScope.stages[i];
                    }
                }
            }else{
                console.log("Crop Null");
                return null;
            }
        }

        getFloorWithSignificance(number, significance) {
            //console.log("getFloorWithSignificance");
            //console.log("number", number);
            //console.log("significance", significance);
            return (number - (number % significance) ) * - 1;
        }

        setNPKScheme (npk : Formula){
            console.log("setNPKScheme");
            npk.setNpkInMmoll();
            console.log("NPK:" , npk);

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

        control.macroElements.setNo3(this.sumControlMacroElements("no3"));
        control.macroElements.setH2po4(  this.sumControlMacroElements("h2po4"));
        control.macroElements.setSo4( this.sumControlMacroElements("so4"));
        control.macroElements.setCl( this.sumControlMacroElements("cl"));
        control.macroElements.setNh4(this.sumControlMacroElements("nh4"));
        control.macroElements.setK(this.sumControlMacroElements("k"));
        control.macroElements.setCa(this.sumControlMacroElements("ca"));
        control.macroElements.setMg( this.sumControlMacroElements("mg"));
        control.macroElements.setH3o(this.sumControlMacroElements("h3o"));




        control.traceElements.setFe( this.sumControlTraceElements("fe"));
        control.traceElements.setB( this.sumControlTraceElements("b"));
        control.traceElements.setMn(  this.sumControlTraceElements("mn"));
        control.traceElements.setZn(  this.sumControlTraceElements("zn"));
        control.traceElements.setCu( this.sumControlTraceElements("cu"));
        control.traceElements.setMo( this.sumControlTraceElements("mo"));

        this.NPKScheme.control = this.setSchemeEntry(control.macroElements,
            control.traceElements);


        console.log("NPK SCHEME",  this.NPKScheme);
    }

    sumControlMacroElements (element){
        console.log("sumControlMacroElements");

            /*console.log("calciumCholide35",this.NPKScheme.calciumCholide35.macroElements[element]);
            console.log("ultrasolCalcium",this.NPKScheme.ultrasolCalcium.macroElements[element]);
            console.log("ultrasolCalmag",this.NPKScheme.ultrasolCalmag.macroElements[element]);
            console.log("ultrasolKPlus",this.NPKScheme.ultrasolKPlus.macroElements[element]);
            console.log("ultrasolMagnit",this.NPKScheme.ultrasolMagnit.macroElements[element]);
            console.log("ultrasolMagsul",this.NPKScheme.ultrasolMagsul.macroElements[element]);
            console.log("npk",this.NPKScheme.npk.macroElements[element]);
            console.log("nitricAcid",this.NPKScheme.nitricAcid.macroElements[element]);*/
            return this.NPKScheme.calciumCholide35.macroElements[element] +
            this.NPKScheme.ultrasolCalcium.macroElements[element] +
            this.NPKScheme.ultrasolCalmag.macroElements[element] +
            this.NPKScheme.ultrasolKPlus.macroElements[element] +
            this.NPKScheme.ultrasolMagnit.macroElements[element] +
            this.NPKScheme.ultrasolMagsul.macroElements[element] +
            this.NPKScheme.npk.macroElements[element] +
            this.NPKScheme.nitricAcid.macroElements[element];
        }

        sumControlTraceElements (element){
            console.log("sumControlMacroElements");
            let sumElement = this.NPKScheme.ultrasolCalcium.traceElements[element] +
            this.NPKScheme.ultrasolCalmag.traceElements[element] +
            this.NPKScheme.ultrasolKPlus.traceElements[element] +
            this.NPKScheme.ultrasolMagnit.traceElements[element] +
            this.NPKScheme.ultrasolMagsul.traceElements[element] +
            this.NPKScheme.npk.traceElements[element]+
            this.NPKScheme.nitricAcid.traceElements[element];
            let returnValue = 0;
            if(this.NPKScheme.controlTraceElements.traceElements[element] > 0) {

                if(  sumElement +
                    this.waterAnalysisInformation.fe.mmoll <
                    this.standardSolution.traceElements[element].min.warking
                    ) {
                    returnValue = sumElement +
                this.NPKScheme.controlTraceElements.traceElements[element];
            }else{
                returnValue = sumElement ;
            }

        }else{
            returnValue = this.NPKScheme.npk.traceElements[element]
        }
        return returnValue;
    }

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

    setControlStandardSolution (){
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


        console.log("traceElements", this.standardSolution.traceElements);
        console.log("baseAdaptation ", this.baseAdaptation.traceElements);
        for (let element in this.standardSolution.traceElements) {


            if(element != 'h3o') {
                console.log("element: ", element);
                console.log("standardSolution elm: ", this.standardSolution.traceElements[element]);
                console.log("baseAdaptation elm: ", this.baseAdaptation.traceElements[element]);                
                this.controlSolution.standardSolution.traceElements[element] = 
                (this.standardSolution.traceElements[element].normal.value +
                    this.baseAdaptation.traceElements[element]) * this.ECValues.ECfactor;
            }

        }

        console.log("controlSolution- Standard",this.controlSolution.standardSolution );
    }

    setControlActualSolution (){
        console.log("setControlActualSolution");
        for (let element in this.standardSolution.macroElements) {
            console.log("element", element);
            console.log("control.macroElements", this.NPKScheme.control.macroElements[element]);
            console.log("waterAnalysisInformation", this.waterAnalysisInformation[this.getRelationInputKeys(element)].mmoll);
            this.controlSolution.actualSolution.macroElements[element] = 
                                        this.NPKScheme.control.macroElements[element] +
                                        this.waterAnalysisInformation[this.getRelationInputKeys(element)].mmoll;
        }
        this.controlSolution.actualSolution.macroElements.h3o = 
                this.waterAnalysisInformation[this.getRelationInputKeys("h3o")].mmoll -
                this.NPKScheme.control.macroElements.h3o;

        console.log("controlSolution- actual",this.controlSolution.actualSolution );

    }

    setMacroFertilizerSpecifications(){

    }
    setTraceFertilizerSpecifications(){
        console.log("setTraceFertilizerSpecifications");
        let scheme = {
            boricAcid: {
                active : false,
                percent: 17,
                mw: 10.8,
                value: 0
            },
            rexeneZn15: {
                active : false,
                percent: 15,
                mw: 54.94,
                value: 0
            },
            rexeneMn13: {
                active : false,
                percent: 13,
                mw: 65.39,
                value: 0
            },
            rexeneCu15: {
                active : false,
                percent: 15,
                mw: 63.55,
                value: 0
            },
            naMoO4: {
                active : false,
                percent: 54.2,
                mw: 95.94,
                value: 0
            },
            rexeneFeE13: {
                active : false,
                percent: 13,
                mw: 55.85,
                value: 0
            },
            rexeneFeD12: {
                active : false,
                percent: 12,
                mw: 55.85,
                value: 0
            },
            rexeneFeQ48: {
                active : false,
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
            scheme.boricAcid.active = true;
        }

        //active rexeneZn15
        if(this.NPKScheme.npk.traceElements.zn != this.NPKScheme.control.traceElements.zn) {
            scheme.rexeneZn15.active = true;
        }

        //active rexeneMn13
        if(this.NPKScheme.npk.traceElements.mn != this.NPKScheme.control.traceElements.mn) {
            scheme.rexeneMn13.active = true;
        }

        //active rexeneCu15
        if(this.NPKScheme.npk.traceElements.cu != this.NPKScheme.control.traceElements.cu) {
            scheme.rexeneCu15.active = true;
        }

        //active naMoO4
        if(this.NPKScheme.npk.traceElements.mo != this.NPKScheme.control.traceElements.mo) {
            scheme.naMoO4.active = true;
        }
        //active rexeneFeE13
        if(this.analysisInformation.ironChelateSource.id == "fee13") {
            if(this.NPKScheme.control.traceElements.fe >1) {
                scheme.rexeneFeE13.active = true;
            }

        }

        //active rexeneFeD12
        if(this.analysisInformation.ironChelateSource.id == "fed12") {
            if(this.NPKScheme.control.traceElements.fe >1) {
                scheme.rexeneFeE13.active = true;
            }
        }

        //active rexeneFeQ48
        if(this.analysisInformation.ironChelateSource.id == "feq48") {
            if(this.NPKScheme.control.traceElements.fe >1) {
                scheme.rexeneFeE13.active = true;
            }
        }

        console.log("setTraceFertilizerSpecifications", scheme);

        this.fertilizerSpecs.traceElements =   scheme;
    }

    setFertilizerSpecifications(){
        console.log("setFertilizerSpecifications");
        console.log("data:", this.analysisInformation);
        let fertilizerScheme = {
            ultrasolCalcium : {
                value: 0,
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
        if(this.analysisInformation.calciumNitrateSource.id == "ultrasolcalcium") {
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



        //if solid calcium
        console.log("Ca chloride: ",this.analysisInformation.calciumChlorideSource.id);
        if(this.analysisInformation.calciumChlorideSource.id != "liquid") {
            console.log("Ca chloride: ",this.analysisInformation.calciumChlorideSource.id);
            fertilizerScheme.calciumCholideSolid.value = this.calculateSolidCaChlorideSpecs(
                                    this.analysisInformation.calciumChlorideSource.concentration);
        }else{

            console.log("Ca chloride: ",this.analysisInformation.calciumChlorideSource.id);
            fertilizerScheme.calciumCholideSolid.value = this.calculateCaChlorideSpecs(
                                    this.analysisInformation.calciumChlorideSource.concentration, 
                                    this.analysisInformation.calciumChlorideSource.density);

        }

        

        fertilizerScheme.ultrasolMagnit.value     = this.calculateUltrasolMagnitSpecs();
        fertilizerScheme.ultrasolMagsul.value     = this.calculateUltrasolMagsulSpecs( fertilizerScheme.ultrasolMagnit.value);
        fertilizerScheme.ultrasolKPlus.value      = this.calculateUltrasolKPlusSpecs();
        fertilizerScheme.nitricAcid.value         = this.calculateNitricAcidSpecs(
                                            this.analysisInformation.acidSource.concentration,
                                            this.analysisInformation.acidSource.density
                                        );

        console.log("fertilizerScheme", fertilizerScheme);
        this.fertilizerSpecs.macroElements =   fertilizerScheme;


         


    }
    calculateUltrasolCaSpecs(){
        let value = ( (26.5/40.1) * 10) / 1.39 ;
        return value;
    }

    calculateLiquidCaSpecs(caConcentration, caDensity){
        let value = (26.5 / 40.1 * 10 / 1.39 / 0.265 * caConcentration * caDensity) /100;
            
        return value;
    }
    

    calculateCaChlorideSpecs(caChlorideConcentration, caChlorideDensity){
        let value = ( ( ( (caChlorideDensity * caChlorideConcentration ) * 0.639) / 35.5 ) * 10 );

        return value;
    }
    calculateSolidCaChlorideSpecs(caChlorideConcentration){
        let value =  (caChlorideConcentration /35.5 ) * 10 ;
        return value;
    }

    calculateUltrasolMagnitSpecs(){
        let value = 3.7000;

        return value;
    }

    calculateUltrasolMagsulSpecs(magnitMolValue){
        let magsulConcentration = 16;
        let value = (magnitMolValue / 15) * magsulConcentration;

        return value;
    }

    calculateUltrasolKPlusSpecs(){
        let value = 9.7000

        return value;
    }

    calculateNitricAcidSpecs(acidConcentration, acidDensity){
        let value = acidConcentration * 0.223 / 14.067 * acidDensity * 10;
        return value;
    }

    setATank(){
        let aTank = {
            ultrasolCalcium : {
                value: 0,
                unit: "mol Ca/kg"
            },
            liquidCa : {
                value: 0,
                unit: "mol Ca/kg"
            },
            calciumChloride : {
                value: 0,
                unit: "mol Ca/kg"
            },
            calciumCholideSolid: {
                value: 0,
                unit: "mol Ca/kg"
            },
            ultrasolMagnit : {
                value: 0,
                unit: "mol Ca/kg"
            },
            ultrasolMagsul : {
                value: 0,
                unit: "mol Ca/kg"
            },
            ultrasolKPlus : {
                value: 0,
                unit: "mol Ca/kg"
            },
            nitricAcid : {
                value: 0,
                unit: "mol Ca/kg"
            }
        }

        console.log("this.NPKScheme",this.NPKScheme );
        console.log("this.fertilizerSpecs",this.fertilizerSpecs );
        aTank.ultrasolCalcium.value = this.calculateUltrasolCaATank(
                    this.NPKScheme.ultrasolCalcium.macroElements.ca, 
                    this.fertilizerSpecs.macroElements.ultrasolCalcium.value);

        aTank.liquidCa.value = this.calculateLiquidCaATank(
                    this.NPKScheme.ultrasolCalcium.macroElements.ca, 
                    this.fertilizerSpecs.macroElements.liquidCa.value);

        aTank.calciumChloride.value = this.calculateCaChlorideATank(
                    this.NPKScheme.calciumCholide35.macroElements.ca, 
                    this.fertilizerSpecs.macroElements.calciumChloride.value);

        aTank.calciumCholideSolid.value = this.calculateSolidCaChlorideATank(
                    this.NPKScheme.calciumCholide35.macroElements.ca, 
                    this.fertilizerSpecs.macroElements.calciumCholideSolid.value);

        aTank.ultrasolMagnit.value = this.calculateUltrasolMagnitATank(
                    this.NPKScheme.ultrasolMagnit.macroElements.mg, 
                    this.fertilizerSpecs.macroElements.ultrasolMagnit.value);

        aTank.ultrasolKPlus.value = this.calculateUltrasolKPlusATank(
                    this.NPKScheme.ultrasolKPlus.macroElements.no3, 
                    this.fertilizerSpecs.macroElements.ultrasolKPlus.value);


        aTank.nitricAcid.value = this.calculateNitricAcidATank(
                    this.NPKScheme.nitricAcid.macroElements.h3o, 
                    this.fertilizerSpecs.macroElements.nitricAcid.value);
         console.log("ATank", aTank);
      
    }

    setBTank() {
         var bTank = {
            solution : {
                value : 0,
                unit: "kg"
            },
            magsul : {
                value : 0,
                unit: "kg"
            },
            boricAcid: {
                value : 0,
                unit: "kg"
            },
            rexeneZn15: {
                value : 0,
                unit: "kg"
            },
            rexeneMn13: {
                value : 0,
                unit: "kg"
            },
            rexeneCu15: {
                value : 0,
                unit: "kg"
            },
            naMoO4: {
                value : 0,
                unit: "kg"
            },
            rexeneFeE13: {
                value : 0,
                unit: "kg"
            },
            rexeneFeD12: {
                value : 0,
                unit: "kg"
            },
            rexeneFeQ48: {
                value : 0,
                unit: "kg"
            }
            };

        bTank.solution.value = this.calculateSolutionFertilizerBtank(
            this.NPKScheme.formula.macroElements.h2po4,
            this.NPKScheme.required.macroElements.h2po4
        );
        bTank.magsul.value = this.calculateUltrasolMagsulBTank(this.NPKScheme.ultrasolMagsul.macroElements.mg,
                this.fertilizerSpecs.macroElements.ultrasolMagsul.value
                )

        bTank.boricAcid.value = this.calculateBoricAcidBTank(
            this.fertilizerSpecs.traceElements.boricAcid.value, 
            this.fertilizerSpecs.traceElements.boricAcid.mw,
            this.fertilizerSpecs.traceElements.boricAcid.percent
            );

        bTank.rexeneZn15.value = this.calculateUltrasolRexeneZn15BTank(
            this.fertilizerSpecs.traceElements.rexeneZn15.value, 
            this.fertilizerSpecs.traceElements.rexeneZn15.mw,
            this.fertilizerSpecs.traceElements.rexeneZn15.percent
            );

        bTank.rexeneMn13.value = this.calculateUltrasolRexeneMn13BTank(
            this.fertilizerSpecs.traceElements.rexeneMn13.value, 
            this.fertilizerSpecs.traceElements.rexeneMn13.mw,
            this.fertilizerSpecs.traceElements.rexeneMn13.percent
            );

        bTank.rexeneCu15.value = this.calculateUltrasolRexeneCu15BTank(
            this.fertilizerSpecs.traceElements.rexeneCu15.value, 
            this.fertilizerSpecs.traceElements.rexeneCu15.mw,
            this.fertilizerSpecs.traceElements.rexeneCu15.percent
            );

        bTank.naMoO4.value = this.calculateUltrasolNaMoO4BTank(
            this.fertilizerSpecs.traceElements.naMoO4.value, 
            this.fertilizerSpecs.traceElements.naMoO4.mw,
            this.fertilizerSpecs.traceElements.naMoO4.percent
            );

        bTank.rexeneFeE13.value = this.calculateUltrasolRexeneFeE13BTank(
            this.fertilizerSpecs.traceElements.rexeneFeE13.value, 
            this.fertilizerSpecs.traceElements.rexeneFeE13.mw,
            this.fertilizerSpecs.traceElements.rexeneFeE13.percent
            );

        bTank.rexeneFeD12.value = this.calculateUltrasolRexeneFeD12BTank(
            this.fertilizerSpecs.traceElements.rexeneFeD12.value, 
            this.fertilizerSpecs.traceElements.rexeneFeD12.mw,
            this.fertilizerSpecs.traceElements.rexeneFeD12.percent
            );

        bTank.rexeneFeQ48.value = this.calculateUltrasolRexeneFeQ48BTank(
            this.fertilizerSpecs.traceElements.rexeneFeQ48.value, 
            this.fertilizerSpecs.traceElements.rexeneFeQ48.mw,
            this.fertilizerSpecs.traceElements.rexeneFeQ48.percent
            );

        console.log("BTANK", bTank);
    }


    calculateUltrasolCaATank(calcUltrasolCaValue, specsUltrasolCaValue){
        let value = ((((calcUltrasolCaValue / specsUltrasolCaValue) * this.analysisInformation.sizeTank) * this.analysisInformation.dilutionFactor) / 1000);
        return value;
    }

    calculateLiquidCaATank(calcUltrasolCaValue, specsLiquidCaValue){
        let value = ((((calcUltrasolCaValue / specsLiquidCaValue) * this.analysisInformation.sizeTank) * this.analysisInformation.dilutionFactor) / 1000);
            
        return value;
    }
    

    calculateCaChlorideATank(calcCaChlorideValue, specsCaChlorideValue){
        let value = ((((calcCaChlorideValue / specsCaChlorideValue) * this.analysisInformation.sizeTank) * this.analysisInformation.dilutionFactor) / 1000);
           
        return value;
    }
    calculateSolidCaChlorideATank(calcCaChlorideValue, specsCaChlorideSolidValue){
        let value = ((((calcCaChlorideValue / specsCaChlorideSolidValue) * this.analysisInformation.sizeTank) * this.analysisInformation.dilutionFactor) / 1000);
        return value;
    }

    calculateUltrasolMagnitATank(calcUltrasolMagnitValue, specsUltrasolMagnitValue){
        let value = ((((calcUltrasolMagnitValue / specsUltrasolMagnitValue) * this.analysisInformation.sizeTank) * this.analysisInformation.dilutionFactor) / 1000);
        

        return value;
    }


    calculateUltrasolKPlusATank(calcUltrasolKPlusValue, specsUltrasolKPlusValue){
         let value = ((((calcUltrasolKPlusValue / specsUltrasolKPlusValue) * this.analysisInformation.sizeTank) * this.analysisInformation.dilutionFactor) / 1000);
        
        return value;
    }

    calculateNitricAcidATank(calcNitricValue, specsNitricValue){
        let value = calcNitricValue * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / specsNitricValue / 1000 ;
        return value;
    }



    calculateSolutionFertilizerBtank(calcFormulaValue, calcRequiredValue){
        let value = ((((calcRequiredValue / calcFormulaValue) * this.analysisInformation.sizeTank) * this.analysisInformation.dilutionFactor) / 1000);
        
        return value;
    }

    calculateUltrasolMagsulBTank(calcMagsulMgValue, specsMagsulValue){
         let value = calcMagsulMgValue*this.analysisInformation.sizeTank*this.analysisInformation.dilutionFactor/specsMagsulValue/1000 ;
        return value;
    }
    calculateBoricAcidBTank(specsAcidBoricValue, specsAcidBoricMw,specsAcidBoricConcentration){
        let value = specsAcidBoricMw * specsAcidBoricValue * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / (10000000 * specsAcidBoricConcentration);
        return value;
    }
    calculateUltrasolRexeneFeE13BTank(specsFeE13Value, specsFeE13Mw,specsFeE13Concentration){
        let value = specsFeE13Mw * specsFeE13Value * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / (10000000 * specsFeE13Concentration);
        
        return value;
    }

    calculateUltrasolRexeneFeD12BTank(specsFeD12Value, specsFeD12Mw,specsFeD12Concentration){
        let value = specsFeD12Mw * specsFeD12Value * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / (10000000 * specsFeD12Concentration);
        
        return value;
    }

    calculateUltrasolRexeneFeQ48BTank(specsFeQ48Value, specsFeQ48Mw,specsFeQ48Concentration){
        let value = specsFeQ48Mw * specsFeQ48Value * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / (10000000 * specsFeQ48Concentration);
        
        return value;
    }
    calculateUltrasolRexeneZn15BTank(specsZn15Value, specsZn15Mw,specsZn15Concentration ){
        let value = specsZn15Mw * specsZn15Value * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / (10000000 * specsZn15Concentration);
        
        return value;
    }

    calculateUltrasolRexeneMn13BTank(specsMn13Value, specsMn13Mw,specsMn13Concentration ){
        let value = specsMn13Mw * specsMn13Value * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / (10000000 * specsMn13Concentration);
        
        return value;
    }
    calculateUltrasolRexeneCu15BTank(specsCu15Value, specsCu15Mw,specsCu15Concentration ){
        let value = specsCu15Mw * specsCu15Value * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / (10000000 * specsCu15Concentration);
        
        return value;
    }
    calculateUltrasolNaMoO4BTank(specsNaMoO4Value, specsNaMoO4Mw,specsNaMoO4Concentration ){
         let value = specsNaMoO4Mw * specsNaMoO4Value * this.analysisInformation.sizeTank * this.analysisInformation.dilutionFactor / (10000000 * specsNaMoO4Concentration);
       
        return value;
    }








    
}
