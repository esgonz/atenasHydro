import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CropsProvider } from '../../providers/crops';
import { NewWaterAnalysis } from '../../pages/new-water-analysis/new-water-analysis';
import { NewAnalysisInformation } from '../../pages/new-analysis-information/new-analysis-information';
import { ProgramProvider } from '../../providers/programs';
import { PagesProvider } from '../../providers/pages';

import { Crop } from '../../models/crop';
import { CropStage } from '../../models/cropstage';
import { CropSolution } from '../../models/cropsolution';
/**
* The Welcome Page is a splash page that quickly describes the app,
* and then directs the user to create an account or log in.
* If you'd like to immediately put the user onto a login/signup page,
* we recommend not using the Welcome page.
*/
@Component({
    selector: 'page-new-crop-select',
    templateUrl: 'new-crop-select.html'
})
export class NewCropSelect implements OnInit{
    selectedCropId  = "-1";
    selectedCrop    = {
        stages : []
    };
    selectedStageId  = "-1";
    selectedStage    = {
        stages : []
    };

    data = {
        cropObj: null,
        stageId: null,
     };

    constructor(public navCtrl: NavController , public CropsProvider: CropsProvider, 
                public programProvider : ProgramProvider, private pagesProvider: PagesProvider) { 
        this.data = programProvider.getInstance().cropInformation;
        
        if (this.data.cropObj !== null) {
           console.log("crop from program: ", this.data.cropObj );
           this.selectedCropId    = this.data.cropObj.id;
           this.selectedCrop      = this.data.cropObj;
           this.selectedStageId   = this.data.stageId;
        }
        
        /*
        this.CropsService.load().then(function (data){
            console.log ("CropsService data:", data);

        });
        */
         
    }
    ngOnInit(){
        //called after the constructor and called  after the first ngOnChanges()

        
    }

    selectCrop(){
        console.log ("selectedcrop", this.selectedCropId.toString());
        
        //search the crop by the id value selected in the select input
        this.selectedCrop = this.CropsProvider.getCropById(this.selectedCropId.toString());


       /*console.log("true crop");

                this.selectedCrop = new Crop(this.CropsService.data[i]);
                console.log("selectedCrop: ",this.selectedCrop);  */
    }

    selectStage(){
        console.log ("select Stage", this.selectedStageId);
        //search the stage of the crop by the id value selected in the select input
        for (var i = 0; i< this.selectedCrop.stages.length; i++) {
            console.log("Stage ID: " + this.selectedCrop.stages[i].id);
            
            //if match
            if (this.selectedCrop.stages[i].id == this.selectedStageId.toString()){
                console.log("true stage");
                this.selectedStage = this.selectedCrop.stages[i]
                console.log("selectedStage: ", this.selectedStage);        
                this.inputData();
            }
        }


    }

    inputData(){
        if (this.selectedCrop != null && this.selectedStage != null)
        {  
            console.log("selectedCrop",  this.selectedCrop);
            console.log("selectedStage", this.selectedStage);
            this.data.cropObj = this.selectedCrop;
            this.data.stageId = this.selectedStageId;
            this.updateProgramInformation();
            
            var pageAnalysis = { title: 'Input Data Table', component: NewAnalysisInformation,  iconClass: 'iconinput'  };
            this.pagesProvider.add(pageAnalysis);
            this.pagesProvider.add({ title: 'Add Water Analysis', component: NewWaterAnalysis, iconClass: 'iconwatter'   });
            this.pagesProvider.setActivePage(pageAnalysis);  
            this.navCtrl.push(NewAnalysisInformation);
        }
        else{
            alert ("Before continue, please select a valid option.");
        }    
    }

    updateProgramInformation (){
        console.log("updateProgramInformation");
        this.programProvider.getInstance().cropInformation = this.data;
    }
}
