import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CropsStages} from '../../providers/cropsStages';
import { NewAnalysisInformation } from '../../pages/new-analysis-information/new-analysis-information';
import { ProgramProvider } from '../../providers/programs';
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

    constructor(public navCtrl: NavController , public CropsService: CropsStages, 
                public programProvider : ProgramProvider) { 
         this.data = programProvider.getInstance().cropInformation;
         if (this.data.cropObj !== null) {
            console.log("crop from program: ", this.data.cropObj );
            this.selectedCropId    = this.data.cropObj.id;
            this.selectedCrop = this.data.cropObj;
            this.selectedStageId   = this.data.stageId;
         }

         
    }
    ngOnInit(){
        //called after the constructor and called  after the first ngOnChanges()

        this.CropsService.load().then(function (data){
            console.log ("data:", data);

        });
    }

    selectCrop(){
        console.log ("selectedcrop", this.selectedCropId.toString());
        
        //search the crop by the id value selected in the select input
        for (var i = 0; i< this.CropsService.data.length; i++) {
            console.log("crop ID: " + this.CropsService.data[i].id);
            
            //if match
            if (this.CropsService.data[i].id == this.selectedCropId.toString()){
                console.log("true crop");
                this.selectedCrop = this.CropsService.data[i];
                console.log("selectedCrop: ",this.selectedCrop);        
                return;
            }
        }
    }

    selectStage(){
        console.log ("select Stage", this.selectedStageId);
        //search the stage of the crop by the id value selected in the select input
        for (var i = 0; i< this.selectedCrop.stages.length; i++) {
            console.log("Stage ID: " + this.selectedCrop.stages[i].id);
            
            //if match
            if (this.selectedCrop.stages[i].id == this.selectedStageId.toString()){
                console.log("true stage");
                this.selectedStage = this.CropsService.data[i];
                console.log("selectedStage: ", this.selectedStage);        
                this.inputData();
            }
        }


    }




    login() {
        //this.navCtrl.push(LoginPage);
    }

    signup() {
        //this.navCtrl.push(SignupPage);
    }

    inputData(){
        if (this.selectedCrop != null && this.selectedStage != null)
        {  
            console.log("selectedCrop",  this.selectedCrop);
            console.log("selectedStage", this.selectedStage);
            this.data.cropObj = this.selectedCrop;
            this.data.stageId = this.selectedStageId;
            this.updateProgramInformation();
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
