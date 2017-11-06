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
import { NewCropSelect } from '../../pages/new-crop-select/new-crop-select';
import { ProgramProvider } from '../../providers/programs';
import { PagesProvider } from '../../providers/pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
 */
var NewBasicInformation = /** @class */ (function () {
    function NewBasicInformation(navCtrl, programProvider, pagesProvider) {
        this.navCtrl = navCtrl;
        this.programProvider = programProvider;
        this.pagesProvider = pagesProvider;
        this.data = {
            name: "",
            company: "",
            sectorId: "",
            date: "",
            email: ""
        };
        this.inputsAlerts = {
            name: "",
            company: "",
            sectorId: "",
            date: "",
            email: ""
        };
        this.validate = false;
        this.data = programProvider.getInstance().basicInformation;
        if (this.data.date == "") {
            this.data.date = new Date(Date.now()).toISOString();
        }
        this.validate = true;
        for (var key in this.data) {
            if (this.data[key] == "") {
                this.validate = false;
            }
        }
    }
    NewBasicInformation.prototype.changeName = function () {
        console.log("changeName");
        if (this.data.name == "") {
            console.log("name empty");
            this.inputsAlerts.name = "Please enter a Name.";
            this.validate = false;
        }
        else {
            this.inputsAlerts.name = "";
            this.validate = true;
        }
    };
    NewBasicInformation.prototype.changeCompany = function () {
        console.log("changeCompany");
        if (this.data.company == "") {
            console.log("company empty");
            this.inputsAlerts.company = "Please enter a company.";
            this.validate = false;
        }
        else {
            this.inputsAlerts.company = "";
            this.validate = true;
        }
    };
    NewBasicInformation.prototype.changeSectorId = function () {
        console.log("changeSectorId");
        if (this.data.sectorId == "") {
            console.log("sectorId empty");
            this.inputsAlerts.sectorId = "Please enter a Sector or Identifier.";
            this.validate = false;
        }
        else {
            this.inputsAlerts.sectorId = "";
            this.validate = true;
        }
    };
    NewBasicInformation.prototype.changeDate = function () {
        console.log("changeDate");
        console.log(this.data.date);
        if (this.data.date == "") {
            console.log("date empty");
            this.inputsAlerts.date = "Please enter a date.";
            this.validate = false;
        }
        else {
            console.log("date not empty");
            if (this.validateDate(this.data.date)) {
                console.log("date valid - ok");
                this.inputsAlerts.date = "";
                this.validate = true;
            }
            else {
                console.log("date not valid - alert");
                this.inputsAlerts.date = "Please enter a valid format date (day-month-year).";
                this.validate = false;
            }
        }
    };
    NewBasicInformation.prototype.changeEmail = function () {
        console.log("changeEmail");
        if (this.data.email == "") {
            console.log("email empty");
            this.inputsAlerts.email = "Please enter a email.";
            this.validate = false;
        }
        else {
            console.log("email not empty");
            if (this.validateEmail(this.data.email)) {
                console.log("email valid - ok");
                this.inputsAlerts.email = "";
                this.validate = true;
            }
            else {
                console.log("email not valid - alert");
                this.inputsAlerts.email = "Please enter a valid email.";
                this.validate = false;
            }
        }
    };
    NewBasicInformation.prototype.validateDate = function (date) {
        console.log("validateDate");
        var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return re.test(date);
    };
    NewBasicInformation.prototype.validateEmail = function (email) {
        console.log("validateEmail");
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    NewBasicInformation.prototype.selectCrop = function () {
        if (this.validate) {
            console.log("validate", this.validate);
            this.updateProgramInformation();
            var ncropPage = { title: 'Select crop and growth stage', component: NewCropSelect, iconClass: 'icongrow' };
            this.pagesProvider.add(ncropPage);
            this.pagesProvider.setActivePage(ncropPage);
            this.navCtrl.push(NewCropSelect);
        }
        else {
            alert("Before continue, please enter valid information.");
        }
    };
    NewBasicInformation.prototype.updateProgramInformation = function () {
        console.log("updateProgramInformation");
        this.programProvider.getInstance().basicInformation = this.data;
    };
    NewBasicInformation = __decorate([
        Component({
            selector: 'page-new-basic-information',
            templateUrl: 'new-basic-information.html'
        }),
        __metadata("design:paramtypes", [NavController, ProgramProvider,
            PagesProvider])
    ], NewBasicInformation);
    return NewBasicInformation;
}());
export { NewBasicInformation };
//# sourceMappingURL=new-basic-information.js.map