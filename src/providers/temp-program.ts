import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';

import { Program } from '../models/program';
    import { MacroElements } from '../models/macroelements';
    import { TraceElements } from '../models/traceelements';
    


@Injectable()
export class TempProgramProvider {

    public program: Program;
    public onlyView: boolean;
    constructor(
        private http: Http, public platform : Platform) {

        this.onlyView =  false;
    }


    init (){
        this.onlyView =  false;
        this.program = new Program(null);
    }

    getInstance(){
        console.log( "TempProgramProvider", this.program );
        return this.program;
    }

    deleteInstance(){
        this.program = null;
    }

    getDataBasicResult (){
        var data = {
            basic:{
                name :"",
                date: ""
            },
            cropSelected:{
                crop: "",
                stage:""
            },
            analysis:{
                ECValue: 0,
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
        data.basic.date                 = this.program.basicInformation.date;
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
           
            data.nnh4   = waData.nnh4[waData.nnh4.unit].toFixed(1);
            data.nno3   = waData.nno3[waData.nno3.unit].toFixed(1);
            data.p      = waData.p[waData.p.unit].toFixed(1);
            data.k      = waData.k[waData.k.unit].toFixed(1);
            data.ca     = waData.ca[waData.ca.unit].toFixed(1);
            data.mg     = waData.mg[waData.mg.unit].toFixed(1);
            data.na     = waData.na[waData.na.unit].toFixed(1);
            data.cl     = waData.cl[waData.cl.unit].toFixed(1);
            data.sso4   = waData.sso4[waData.sso4.unit].toFixed(1);
            data.fe     = waData.fe[waData.fe.unit].toFixed(1);
            data.mn     = waData.mn[waData.mn.unit].toFixed(1);
            data.zn     = waData.zn[waData.zn.unit].toFixed(1);
            data.cu     = waData.cu[waData.cu.unit].toFixed(1);
            data.b      = waData.b[waData.b.unit].toFixed(1);
            data.mo     = waData.mo[waData.mo.unit].toFixed(1);
            data.hco3   = waData.hco3[waData.hco3.unit].toFixed(1);
            data.ph     = waData.ph.value.toString();
            data.ec     = waData.ec.value.toString();


            if (unit == "mgl") {
                data.unit = "mg/l";

            }else if(unit == "mmoll"){
                data.unit = "mmol/l";
                
            }
            return data;
        }else{
            console.log("no water analysis.")
            return data;
        }
    }

    getDataSolutionResult (){
        console.log("getDataSolutionResult");
        return this.program.formatSolution;
    }

    getDataSchemeResult (){
        console.log("pgetDataSchemeResult");
       
            return this.program.formatScheme;
    }
    
    setCalculationsValues (formulasProvider){
        console.log("setCalculationsValues");
        this.program.setCalculationsValues(formulasProvider);
    }


    setOnlyView(flag){
        console.log("setOnlyView");
        this.onlyView = flag;
    }

    saveInDB( programsProvider){
        console.log("saveInDB");
        
       if(!this.platform.is('core')) {
          if(!this.onlyView) {
            console.log("not only view")
            this.program.createProgramInDB( programsProvider );
            
          }else{
                console.log("only view. not save in DB");
          }
       }else{
          console.log("cant save in the DB from browser"); 
       }
        
    }


    sendProgramByEmail (programsProvider, toEmails){
        this.program.sendProgramByEmail( programsProvider, toEmails);
    }

    load() {
        /*       
            if (this.data) {
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
            });
        */    
    }

    


}
