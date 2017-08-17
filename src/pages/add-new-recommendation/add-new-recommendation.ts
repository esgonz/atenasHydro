import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectCropGrowth } from '../../pages/select-crop-growth/select-crop-growth';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
 @Component({
 	selector: 'page-add-new-recommendation',
 	templateUrl: 'add-new-recommendation.html'
 })
 export class AddNewRecommendation {
 	data = { 	
	 	name 		: "",
	 	business 	: "",
	 	sectorId 	: "",
	 	date 		: "",
	 	email 		: ""
 	};

 	inputsAlerts = {
	 	name 		: "",
	 	business 	: "",
	 	sectorId 	: "",
	 	date 		: "",
	 	email 		: "" 		
 	}
 	validate = false;
 	constructor(public navCtrl: NavController) { }

 	login() {
 		//this.navCtrl.push(LoginPage);
 	}

 	signup() {
 		//this.navCtrl.push(SignupPage);
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
 	changeBusiness(){
 		console.log("changeBusiness");
 		if (this.data.business == "") {
 			console.log("Business empty");
 			this.inputsAlerts.business = "Please enter a Business.";
 			this.validate = false;
 		}else
 		{
 			this.inputsAlerts.business = "";
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
 			this.inputsAlerts.date = "";
 			this.validate = true;
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

 	validateEmail(email) {
 		console.log("validateEmail");
    	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	}

	selectCrop(){
		if (this.validate)
		{
			console.log("validate", this.validate);
			this.navCtrl.push(SelectCropGrowth);
		}
		else{
			alert ("Before continue, please enter valid information.");
		}		
	}

 }
