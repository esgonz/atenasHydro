var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsResultPage } from '../../pages/tabs-results/tabs-results';
import { NewWaterAnalysis } from '../new-water-analysis/new-water-analysis';
import { ProgramProvider } from '../../providers/programs';
import { PagesProvider } from '../../providers/pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
var NewAnalysisInformation = /** @class */ (function () {
    function NewAnalysisInformation(navCtrl, programProvider, pagesProvider) {
        this.navCtrl = navCtrl;
        this.programProvider = programProvider;
        this.pagesProvider = pagesProvider;
        this.acids = [
            {
                id: "x",
                name: "Nitric Acid - X%",
                concentration: null,
                density: null
            },
            {
                id: "38",
                name: "Nitric Acid - 38%",
                concentration: 38,
                density: 1.235
            },
            {
                id: "53",
                name: "Nitric Acid - 53%",
                concentration: 53,
                density: 1.33
            },
            {
                id: "60",
                name: "Nitric Acid - 60%",
                concentration: 60,
                density: 1.363
            }
        ];
        this.acidChoise = "";
        this.acidSuggestion = {
            concentration: "",
            density: ""
        };
        this.substrates = [
            {
                id: "inert",
                label1: "Inert",
                label2: "(Stone wool, perlite)"
            },
            {
                id: "organic",
                label1: "Organic",
                label2: "(Coco peat)"
            }
        ];
        this.calciumChlorides = [
            {
                id: "liquid",
                name: "liquid",
                concentration: 35,
                density: 1.33
            },
            {
                id: "anhydrous",
                name: "Calcium chloride anhydrous (solid)",
                concentration: 63.9,
                density: "N.A."
            },
            {
                id: "dihydrate",
                name: "Calcium chloride dihydrate (solid)",
                concentration: 48.3,
                density: "N.A."
            }
        ];
        this.calciumChlorideChoise = "";
        this.calciumChlorideSuggestion = {
            concentration: "",
            density: ""
        };
        this.calciumNitrates = [
            {
                id: "ultrasolcalcium",
                name: "Ultrasol Calcium (15.5% N-26% CaO)",
                concentration: "N.A.",
                density: "N.A."
            },
            {
                id: "liquidcalcium",
                name: "Liquid Calcium Nitrate",
                concentration: 9,
                density: 1.465
            }
        ];
        this.calciumNitrateChoise = "";
        this.calciumNitrateSuggestion = {
            concentration: "",
            density: ""
        };
        this.ironChelates = [
            {
                id: "fee13",
                name: "Ultrasol micro Rexene FeE13",
                concentration: 13
            },
            {
                id: "fed12",
                name: "Ultrasol micro Rexene FeD12",
                concentration: 12
            },
            {
                id: "feq48",
                name: "Ultrasol micro Rexene FeQ48",
                concentration: 6
            },
            {
                id: "-1",
                name: "Other",
                concentration: 0
            }
        ];
        this.ironChelateChoise = "";
        this.ironChelateSuggestion = {
            concentration: "",
            density: ""
        };
        this.data = {
            ECValue: 1.5,
            sizeTank: 1000,
            dilutionFactor: 100,
            substrate: "",
            acidSource: {
                id: "",
                name: "",
                concentration: 0.0,
                density: null
            },
            calciumChlorideSource: {
                id: "",
                name: "",
                concentration: 0.0,
                density: null
            },
            calciumNitrateSource: {
                id: "",
                name: "",
                concentration: null,
                density: null
            },
            ironChelateSource: {
                id: "",
                name: "",
                concentration: 0.0
            },
        };
        this.data = programProvider.getInstance().analysisInformation;
        if (this.data.acidSource.id != "") {
            this.acidChoise = this.data.acidSource.id;
        }
        if (this.data.calciumChlorideSource.id != "") {
            this.calciumChlorideChoise = this.data.calciumChlorideSource.id;
        }
        if (this.data.calciumNitrateSource.id != "") {
            this.calciumNitrateChoise = this.data.calciumNitrateSource.id;
        }
        if (this.data.ironChelateSource.id != "") {
            this.ironChelateChoise = this.data.ironChelateSource.id;
        }
    }
    NewAnalysisInformation.prototype.changeSubstrate = function () {
        console.log("changeSubstrate");
        console.log(this.data.substrate);
    };
    NewAnalysisInformation.prototype.changeAcid = function () {
        console.log("acidChoise: " + this.acidChoise);
        for (var i = 0; i < this.acids.length; i++) {
            console.log("acid ID: " + this.acids[i].id);
            if (this.acids[i].id == this.acidChoise.toString()) {
                console.log("true");
                this.data.acidSource = this.acids[i];
                console.log(this.data.acidSource);
                if (this.acids[i].concentration != null) {
                    this.acidSuggestion.concentration = this.acids[i].concentration.toString();
                }
                if (this.acids[i].density != null) {
                    this.acidSuggestion.density = this.acids[i].density.toString();
                }
                return;
            }
        }
        this.updateProgramInformation();
    };
    NewAnalysisInformation.prototype.changeCalciumChloride = function () {
        console.log("calciumChlorideChoise: " + this.calciumChlorideChoise);
        this.calciumChlorideSuggestion.concentration = "";
        this.calciumChlorideSuggestion.density = "";
        for (var i = 0; i < this.calciumChlorides.length; i++) {
            console.log("acid ID: " + this.calciumChlorides[i].id);
            if (this.calciumChlorides[i].id == this.calciumChlorideChoise.toString()) {
                console.log("true");
                this.data.calciumChlorideSource = this.calciumChlorides[i];
                console.log(this.data.calciumChlorideSource);
                this.calciumChlorideSuggestion.concentration = this.calciumChlorides[i].concentration.toString();
                this.calciumChlorideSuggestion.density = this.calciumChlorides[i].density.toString();
                return;
            }
        }
        this.updateProgramInformation();
    };
    NewAnalysisInformation.prototype.changeCalciumNitatre = function () {
        console.log("calciumNitrateChoise: " + this.calciumNitrateChoise);
        for (var i = 0; i < this.calciumNitrates.length; i++) {
            console.log("calcium nitrate ID: " + this.calciumNitrates[i].id);
            if (this.calciumNitrates[i].id == this.calciumNitrateChoise.toString()) {
                console.log("true");
                this.data.calciumNitrateSource = this.calciumNitrates[i];
                console.log(this.data.calciumChlorideSource);
                this.calciumNitrateSuggestion.concentration = this.calciumNitrates[i].concentration.toString();
                this.calciumNitrateSuggestion.density = this.calciumNitrates[i].density.toString();
                return;
            }
        }
        this.updateProgramInformation();
    };
    NewAnalysisInformation.prototype.changeIronChelate = function () {
        console.log("ironChelateChoise: " + this.ironChelateChoise);
        for (var i = 0; i < this.ironChelates.length; i++) {
            console.log("iron ID: " + this.ironChelates[i].id);
            if (this.ironChelates[i].id == this.ironChelateChoise.toString()) {
                console.log("true");
                this.data.ironChelateSource = this.ironChelates[i];
                console.log(this.data.ironChelateSource);
                this.ironChelateSuggestion.concentration = this.ironChelates[i].concentration.toString();
                return;
            }
        }
        this.updateProgramInformation();
    };
    NewAnalysisInformation.prototype.updateProgramInformation = function () {
        console.log("updateProgramInformation");
        this.programProvider.getInstance().analysisInformation = this.data;
    };
    NewAnalysisInformation.prototype.addWaterAnalysis = function () {
        this.updateProgramInformation();
        this.pagesProvider.setActivePage(NewWaterAnalysis);
        this.navCtrl.push(NewWaterAnalysis);
    };
    NewAnalysisInformation.prototype.goToFertigationProgram = function () {
        this.updateProgramInformation();
        var resultPage = { title: 'Fertigation Programe.', component: TabsResultPage, iconClass: 'iconprogramme' };
        this.pagesProvider.add(resultPage);
        this.pagesProvider.setActivePage(resultPage);
        this.navCtrl.push(resultPage.component);
    };
    NewAnalysisInformation = __decorate([
        Component({
            selector: 'page-new-analysis-information',
            templateUrl: 'new-analysis-information.html'
        }),
        __metadata("design:paramtypes", [NavController,
            ProgramProvider,
            PagesProvider])
    ], NewAnalysisInformation);
    return NewAnalysisInformation;
}());
export { NewAnalysisInformation };
//# sourceMappingURL=new-analysis-information.js.map