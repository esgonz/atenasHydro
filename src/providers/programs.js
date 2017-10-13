var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Program } from '../models/program';
var ProgramProvider = (function () {
    function ProgramProvider(http) {
        this.http = http;
    }
    ProgramProvider.prototype.init = function () {
        this.program = new Program(null);
    };
    ProgramProvider.prototype.getInstance = function () {
        console.log("ProgramProvider", this.program);
        return this.program;
    };
    ProgramProvider.prototype.deleteInstance = function () {
        this.program = null;
    };
    ProgramProvider.prototype.getDataBasicResult = function () {
        var data = {
            basic: {
                name: ""
            },
            cropSelected: {
                crop: "",
                stage: ""
            },
            analysis: {
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
            phrecommended = stageCropObj.ph[0] + "-" + stageCropObj.ph[1];
        }
        data.basic.name = this.program.basicInformation.name;
        data.cropSelected.crop = this.program.cropInformation.cropObj.name;
        data.cropSelected.stage = stageCrop;
        data.analysis.ECValue = this.program.analysisInformation.ECValue;
        data.analysis.recommendedPh = phrecommended;
        data.analysis.sizeTank = this.program.analysisInformation.sizeTank;
        data.analysis.dilutionFactor = this.program.analysisInformation.dilutionFactor;
        data.analysis.substrate = this.program.analysisInformation.substrate;
        return data;
    };
    ProgramProvider.prototype.getDataWaterResult = function () {
        var data = {
            nnh4: "",
            nno3: "",
            p: "",
            k: "",
            ca: "",
            mg: "",
            na: "",
            cl: "",
            sso4: "",
            fe: "",
            mn: "",
            zn: "",
            cu: "",
            b: "",
            mo: "",
            hco3: "",
            ph: "",
            ec: "",
            unit: ""
        };
        if (this.program.waterAnalysisInformation != null) {
            var waData = this.program.waterAnalysisInformation;
            var unit = waData.unit;
            data.nnh4 = waData.nnh4[unit];
            data.nno3 = waData.nno3[unit];
            data.p = waData.p[unit];
            data.k = waData.k[unit];
            data.ca = waData.ca[unit];
            data.mg = waData.mg[unit];
            data.na = waData.na[unit];
            data.cl = waData.cl[unit];
            data.sso4 = waData.sso4[unit];
            data.fe = waData.fe[unit];
            data.mn = waData.mn[unit];
            data.zn = waData.zn[unit];
            data.cu = waData.cu[unit];
            data.b = waData.b[unit];
            data.mo = waData.mo[unit];
            data.hco3 = waData.hco3[unit];
            data.ph = waData.ph.value;
            data.ec = waData.ec.value;
            if (unit == "mgl") {
                data.unit = "mg/l";
            }
            else if (unit == "mmoll") {
                data.unit = "mmol/l";
            }
            return data;
        }
        else {
            console.log("no water analysis.");
            return data;
        }
    };
    ProgramProvider.prototype.setDataMacronutrients = function () {
        this.program.setMacroElementsrequired();
    };
    ProgramProvider.prototype.load = function () {
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
    };
    return ProgramProvider;
}());
ProgramProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ProgramProvider);
export { ProgramProvider };
//# sourceMappingURL=programs.js.map