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
import { CropsProvider } from '../../providers/crops';
import { NewWaterAnalysis } from '../../pages/new-water-analysis/new-water-analysis';
import { NewAnalysisInformation } from '../../pages/new-analysis-information/new-analysis-information';
import { ProgramProvider } from '../../providers/programs';
import { PagesProvider } from '../../providers/pages';
/**
* The Welcome Page is a splash page that quickly describes the app,
* and then directs the user to create an account or log in.
* If you'd like to immediately put the user onto a login/signup page,
* we recommend not using the Welcome page.
*/
var NewCropSelect = /** @class */ (function () {
    function NewCropSelect(navCtrl, CropsProvider, programProvider, pagesProvider) {
        this.navCtrl = navCtrl;
        this.CropsProvider = CropsProvider;
        this.programProvider = programProvider;
        this.pagesProvider = pagesProvider;
        this.selectedCropId = "-1";
        this.selectedCrop = {
            stages: []
        };
        this.selectedStageId = "-1";
        this.selectedStage = {
            stages: []
        };
        this.data = {
            cropObj: null,
            stageId: null,
        };
        this.data = programProvider.getInstance().cropInformation;
        if (this.data.cropObj !== null) {
            console.log("crop from program: ", this.data.cropObj);
            this.selectedCropId = this.data.cropObj.id;
            this.selectedCrop = this.data.cropObj;
            this.selectedStageId = this.data.stageId;
        }
        /*
        this.CropsService.load().then(function (data){
            console.log ("CropsService data:", data);

        });
        */
    }
    NewCropSelect.prototype.ngOnInit = function () {
        //called after the constructor and called  after the first ngOnChanges()
    };
    NewCropSelect.prototype.selectCrop = function () {
        console.log("selectedcrop", this.selectedCropId.toString());
        //search the crop by the id value selected in the select input
        this.selectedCrop = this.CropsProvider.getCropById(this.selectedCropId.toString());
        /*console.log("true crop");
 
                 this.selectedCrop = new Crop(this.CropsService.data[i]);
                 console.log("selectedCrop: ",this.selectedCrop);  */
    };
    NewCropSelect.prototype.selectStage = function () {
        console.log("select Stage", this.selectedStageId);
        //search the stage of the crop by the id value selected in the select input
        for (var i = 0; i < this.selectedCrop.stages.length; i++) {
            console.log("Stage ID: " + this.selectedCrop.stages[i].id);
            //if match
            if (this.selectedCrop.stages[i].id == this.selectedStageId.toString()) {
                console.log("true stage");
                this.selectedStage = this.selectedCrop.stages[i];
                console.log("selectedStage: ", this.selectedStage);
                this.inputData();
            }
        }
    };
    NewCropSelect.prototype.inputData = function () {
        if (this.selectedCrop != null && this.selectedStage != null) {
            console.log("selectedCrop", this.selectedCrop);
            console.log("selectedStage", this.selectedStage);
            this.data.cropObj = this.selectedCrop;
            this.data.stageId = this.selectedStageId;
            this.updateProgramInformation();
            var pageAnalysis = { title: 'Input Data Table', component: NewAnalysisInformation, iconClass: 'iconinput' };
            this.pagesProvider.add(pageAnalysis);
            this.pagesProvider.add({ title: 'Add Water Analysis', component: NewWaterAnalysis, iconClass: 'iconwatter' });
            this.pagesProvider.setActivePage(pageAnalysis);
            this.navCtrl.push(NewAnalysisInformation);
        }
        else {
            alert("Before continue, please select a valid option.");
        }
    };
    NewCropSelect.prototype.updateProgramInformation = function () {
        console.log("updateProgramInformation");
        this.programProvider.getInstance().cropInformation = this.data;
    };
    NewCropSelect = __decorate([
        Component({
            selector: 'page-new-crop-select',
            templateUrl: 'new-crop-select.html'
        }),
        __metadata("design:paramtypes", [NavController, CropsProvider,
            ProgramProvider, PagesProvider])
    ], NewCropSelect);
    return NewCropSelect;
}());
export { NewCropSelect };
//# sourceMappingURL=new-crop-select.js.map