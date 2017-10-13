import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Program } from '../models/program';

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


            if (unit =="mgl") {
                data.unit = "mg/l"
            }else if(unit =="mmoll"){
                data.unit = "mmol/l"
            }
            return data;
        }else{
            console.log("no water analysis.")
            return data;
        }
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
