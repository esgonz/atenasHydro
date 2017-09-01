import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewCropSelect } from '../../pages/new-crop-select/new-crop-select';
import { ProgramProvider } from '../../providers/programs';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
 @Component({
 	selector: 'page-new-basic-information',
 	templateUrl: 'new-basic-information.html'
 })
 export class NewBasicInformation {
 	data = { 	
	 	name 		: "",
	 	company 	: "",
	 	sectorId 	: "",
	 	date 		: "",
	 	email 		: ""
 	};

 	inputsAlerts = {
	 	name 		: "",
	 	company 	: "",
	 	sectorId 	: "",
	 	date 		: "",
	 	email 		: "" 		
 	}
 	validate = false;
 	constructor(public navCtrl: NavController, public programProvider : ProgramProvider) { 
 		this.data = programProvider.getInstance().basicInformation;
 	}


 	changeName(){
 		console.log("changeName");
 		if (this.data.name == "") {
 			console.log("name empty");
 			this.inputsAlerts.name = "Please enter a Name.";
 			this.validate = false;
 		}else
 		{
 			this.inputsAlerts.name = "";
 			this.validate = true;
 		}
 	}
 	changeCompany(){
 		console.log("changeCompany");
 		if (this.data.company == "") {
 			console.log("company empty");
 			this.inputsAlerts.company = "Please enter a company.";
 			this.validate = false;
 		}else
 		{
 			this.inputsAlerts.company = "";
 			this.validate = true;
 		}
 	}
 	changeSectorId(){
 		console.log("changeSectorId");
 		if (this.data.sectorId == "") {
 			console.log("sectorId empty");
 			this.inputsAlerts.sectorId = "Please enter a Sector or Identifier.";
 			this.validate = false;
 		}else
 		{
 			this.inputsAlerts.sectorId = "";
 			this.validate = true;
 		}
 	}
 	changeDate(){
 		console.log("changeDate");
 		console.log(this.data.date);
 		if (this.data.date == "") {	
 			console.log("date empty");
 			this.inputsAlerts.date = "Please enter a date.";
 			this.validate = false;
 		}else
 		{

 			console.log("date not empty");
 			if (this.validateDate(this.data.date)) {
				console.log("date valid - ok");
				this.inputsAlerts.date = "";
 				this.validate = true;
			} else {
				console.log("date not valid - alert");
			  	this.inputsAlerts.date = "Please enter a valid format date (day-month-year).";
			  	this.validate = false;
			} 			
 		}
 	}
 	changeEmail(){
 		console.log("changeEmail");
 		if (this.data.email == "") {
 			console.log("email empty");
 			this.inputsAlerts.email = "Please enter a email.";
 			this.validate = false;
 		}else
 		{
 			console.log("email not empty");
 			if (this.validateEmail(this.data.email)) {
				console.log("email valid - ok");
				this.inputsAlerts.email = "";
				this.validate = true;
			} else {
				console.log("email not valid - alert");
			  	this.inputsAlerts.email = "Please enter a valid email.";
			  	this.validate = false;
			}
 			
 		}
 	}

 	validateDate(date){
 		console.log("validateDate");
 		var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
 		return re.test(date);
 	}
 	validateEmail(email) {
 		console.log("validateEmail");
    	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
	}

	selectCrop(){
		if (this.validate)
		{
			console.log("validate", this.validate);
			this.updateProgramInformation();
			this.navCtrl.push(NewCropSelect);
		}
		else{
			alert ("Before continue, please enter valid information.");
		}		
	}

	updateProgramInformation (){
		console.log("updateProgramInformation");
		this.programProvider.getInstance().basicInformation = this.data;
	}

 }
