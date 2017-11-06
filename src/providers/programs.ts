import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Program } from '../models/program';
    import { MacroElements } from '../models/macroelements';
    import { TraceElements } from '../models/traceelements';


@Injectable()
export class ProgramProvider {

    public program;
    constructor(private http: Http) {

    }


    init (){
        this.program = new Program(null);
    }

    getInstance(){
        console.log("ProgramProvider", this.program );
        return this.program;
    }

    deleteInstance(){
        this.program = null;
    }

    getDataBasicResult (){
        var data = {
            basic:{
                name :""
            },
            cropSelected:{
                crop: "",
                stage:""
            },
            analysis:{
                ECValue: "",
                recommendedPh: "",
                sizeTank: 0,
                dilutionFactor: 0,
                substrate: ""
            }
        };

        var stageCropObj = this.program.getStageByID(this.program.cropInformation.stageId);
        var stageCrop = "";
        var phrecommended = "";
        if (stageCrop != null) {
            stageCrop = stageCropObj.name;
            phrecommended = stageCropObj.ph[0] +"-" +stageCropObj.ph[1];
        }

        data.basic.name                 = this.program.basicInformation.name;
        data.cropSelected.crop          = this.program.cropInformation.cropObj.name;
        data.cropSelected.stage         = stageCrop;
        data.analysis.ECValue           = this.program.analysisInformation.ECValue;
        data.analysis.recommendedPh     = phrecommended;
        data.analysis.sizeTank          = this.program.analysisInformation.sizeTank;
        data.analysis.dilutionFactor    = this.program.analysisInformation.dilutionFactor;
        data.analysis.substrate         = this.program.analysisInformation.substrate;
        return data;
    }
    getDataWaterResult (){

        var data = {
            nnh4:  "",
            nno3:  "",
            p:     "",
            k:     "",
            ca:    "",
            mg:    "",
            na:    "",
            cl:    "",
            sso4:  "",
            fe:    "",
            mn:    "",
            zn:    "",
            cu:    "",
            b:     "",
            mo:    "",
            hco3:  "",
            ph:    "",
            ec:    "",
            unit:  ""
        };
        if (this.program.waterAnalysisInformation != null) {
            var waData  = this.program.waterAnalysisInformation;
            var unit    = waData.unit;
           
            data.nnh4   = waData.nnh4[unit];
            data.nno3   = waData.nno3[unit];
            data.p      = waData.p[unit];
            data.k      = waData.k[unit];
            data.ca     = waData.ca[unit];
            data.mg     = waData.mg[unit];
            data.na     = waData.na[unit];
            data.cl     = waData.cl[unit];
            data.sso4   = waData.sso4[unit];
            data.fe     = waData.fe[unit];
            data.mn     = waData.mn[unit];
            data.zn     = waData.zn[unit];
            data.cu     = waData.cu[unit];
            data.b      = waData.b[unit];
            data.mo     = waData.mo[unit];
            data.hco3   = waData.hco3[unit];
            data.ph     = waData.ph.value;
            data.ec     = waData.ec.value;


            if (unit == "mgl") {
                data.unit = "mg/l"
            }else if(unit == "mmoll"){
                data.unit = "mmol/l"
            }
            return data;
        }else{
            console.log("no water analysis.")
            return data;
        }
    }

    getDataSolutionResult (){
        console.log("getDataSolutionResult");

        var controlSolution = {
            nnh4 : null,
            nno3 : null,
            p : null,
            k : null,
            ca : null,
            mg : null,
            cl : null,
            sso4 : null,
            fe : null,
            mn : null,
            zn : null,
            cu : null,
            b : null,
            mo : null
        };

 
            var soData  = this.program.controlSolution.actualSolution;
           console.log("soData",soData);

            let nnh4 = {
                name: "N-NH<sub>4</sub>",
                mmoll : parseFloat(soData.macroElements.nh4).toFixed(2),
                mgl : (soData.macroElements.nh4 * 14.007).toFixed(1)
            }
            controlSolution.nnh4 = nnh4;

            let nno3 = {
                name: "N-NO<sub>3</sub>",
                mmoll : parseFloat(soData.macroElements.no3).toFixed(2),
                mgl : (soData.macroElements.no3 * 14.007).toFixed(1)
            }
            controlSolution.nno3 = nno3;

            let p = {
                name: "P",
                mmoll : parseFloat(soData.macroElements.h2po4).toFixed(2),
                mgl : (soData.macroElements.h2po4 * 30.974).toFixed(1)
            }
            controlSolution.p = p;

            let k = {
                name: "N-NO<sub>3</sub>",
                mmoll : parseFloat(soData.macroElements.k).toFixed(2),
                mgl : (soData.macroElements.k * 39.098).toFixed(1)
            }
            controlSolution.k = k;
            
            let ca = {
                name: "Ca",
                mmoll : parseFloat(soData.macroElements.ca).toFixed(2),
                mgl : (soData.macroElements.ca * 40.08).toFixed(1)
            }
            controlSolution.ca = ca;
            
            let mg = {
                name: "Mg",
                mmoll : parseFloat(soData.macroElements.mg).toFixed(2),
                mgl : (soData.macroElements.mg * 24.305).toFixed(1)
            }
            controlSolution.mg = mg;
            
            let cl = {
                name: "Cl",
                mmoll :parseFloat( soData.macroElements.cl).toFixed(2),
                mgl : (soData.macroElements.cl * 35.5).toFixed(1)
            }
            controlSolution.cl = cl;
           
            let sso4 = {
                name: "S-SO<sub>4</sub>",
                mmoll : parseFloat(soData.macroElements.so4).toFixed(2),
                mgl : (soData.macroElements.so4 * 32.06).toFixed(1)
            }
            controlSolution.sso4 = sso4;
            
            let fe = {
                name: "Fe",
                mmoll : (soData.traceElements.fe / 1000).toFixed(4),
                mgl : (soData.traceElements.fe * 55.847 / 1000).toFixed(3)
            }
            controlSolution.fe = fe;
            
            let mn = {
                name: "Mn",
                mmoll : (soData.traceElements.mn / 1000).toFixed(4),
                mgl : (soData.traceElements.mn * 54.938 / 1000).toFixed(3)
            }
            controlSolution.mn = mn;
            
            let zn = {
                name: "Zn",
                mmoll : (soData.traceElements.zn / 1000).toFixed(4),
                mgl : (soData.traceElements.zn * 65.39 / 1000).toFixed(3)
            }
           controlSolution.zn = zn;
            
            let cu = {
                name: "Cu",
                mmoll : (soData.traceElements.cu / 1000).toFixed(4),
                mgl : (soData.traceElements.cu * 63.546 / 1000).toFixed(3)
            }
            controlSolution.cu = cu;
            
            let b = {
                name: "B",
                mmoll : (soData.traceElements.b / 1000).toFixed(4),
                mgl : (soData.traceElements.b * 10.81 / 1000).toFixed(3)
            }
            controlSolution.b = b;
            
            let mo = {
                name: "Mo",
                mmoll : (soData.traceElements.mo / 1000).toFixed(4),
                mgl : (soData.traceElements.mo * 95.94 / 1000).toFixed(3)
            }
            controlSolution.mo = mo;          
           


            return controlSolution;
    }

    getDataSchemeResult (){
        console.log("pgetDataSchemeResult");
        var aTank = [];
        var bTank = [];

            
            var tanksData  = this.program.tanks;
            console.log("tanksData", tanksData);
            for (let product in tanksData.a) {
                
                if(tanksData.a[product].value >0) {
                    let auxProduct = {
                        name : tanksData.a[product].name,
                        value: parseFloat(tanksData.a[product].value).toFixed(1),
                        unit: tanksData.a[product].unit
                    }


                    aTank.push(auxProduct);
                }
                
            }

            for (let product in tanksData.b) {
                
                if(tanksData.b[product].value > 0 && !isNaN(tanksData.b[product].value)) {
                    let auxProduct = {
                        name : tanksData.b[product].name,
                        value: parseFloat(tanksData.b[product].value).toFixed(1),
                        unit: tanksData.b[product].unit
                    }


                    bTank.push(auxProduct);
                }
            }
               

            console.log("aTank",aTank);
            console.log("bTank",bTank);

            var alerts = this.program.getAllAlertsTraceElements();
            let data = {
                a : aTank,
                b : bTank,
                alerts : alerts
            }
            return data;
    }
    setCalculationsValues (formulasProvider){
        this.program.setCalculationsValues(formulasProvider);
    }

    load() {
        /*if (this.data) {
        console.log("data exits, return promise");
        return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            this.http.get('../assets/data/crops.json')
            .map(res => res.json())
            .subscribe(data => {
                console.log("data subscribe, resolve");
                this.data = data;
                resolve(this.data);
            });
        });*/    
    }
}
