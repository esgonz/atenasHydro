import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Crop} from '../../models/crop';
import {Crops} from '../../providers/crops';
import { InputDataTable } from '../../pages/input-data-table/input-data-table';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-select-crop-growth',
  templateUrl: 'select-crop-growth.html'
})
export class SelectCropGrowth implements OnInit{
	crops         = [];
  selectedCropId  = -1;
  selectedCrop = {
                    stages : []
                  };
  selectedStageId  = -1;
  selectedStage = {
                    stages : []
                  };

  auxCrop = [
    {
      id: 1,
      name: "cultivo 1"
    },
     {
      id: 2,
      name: "cultivo 2"
    },
     {
      id: 3,
      name: "cultivo 3"
    },
     {
      id: 4,
      name: "cultivo 4"
    }
  ];


  constructor(public navCtrl: NavController , public CropsService: Crops) { 
    
  	
  }
  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges()
    
    this.CropsService.load().then(function (data){
      console.log ("data:", data);
      
    });
  }

  selectCrop(){
    console.log ("selectedcrop", this.selectedCrop);
     for (var i = 0; i< this.CropsService.data.length; i++) {
       console.log("crop ID: " + this.CropsService.data[i].id);
       if (this.CropsService.data[i].id == this.selectedCropId.toString()){
         console.log("true");
         this.selectedCrop = this.CropsService.data[i];
         console.log(this.selectedCrop);        
         return;
       }
     }
  }

  selectStage(){
    console.log ("select Stage", this.selectedStage);
     for (var i = 0; i< this.selectedCrop.stages.length; i++) {
       console.log("Stage ID: " + this.selectedCrop.stages[i].id);
       if (this.selectedCrop.stages[i].id == this.selectedStageId.toString()){
         console.log("true stage");
         this.selectedStage = this.CropsService.data[i];
         console.log(this.selectedStage);        
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
      this.navCtrl.push(InputDataTable);
    }
    else{
      alert ("Before continue, please select a valid option.");
    }    
  }
}
