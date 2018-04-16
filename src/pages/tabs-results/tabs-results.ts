import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { TabResultBasic } from '../pages';
import { TabResultWater } from '../pages';
import { TabResultSolution } from '../pages';
import { TabResultScheme } from '../pages';

import { TempProgramProvider } from '../../providers/temp-program';
import { ProgramsProvider } from '../../providers/programs/programs';
import { FormulasProvider } from '../../providers/formulas';
import { PagesProvider } from '../../providers/pages';

@Component({
  selector: 'page-tabs-results',
  templateUrl: 'tabs-results.html'
})
export class TabsResultPage {
  tabResultBasic: any    = TabResultBasic;
  tabResultWater: any    = TabResultWater;
  tabResultSolution: any = TabResultSolution;
  tabResultScheme: any   = TabResultScheme;
  tab5Root: any          = null;

  tabResultBasicTitle = " ";
  tabResultWaterTitle = " ";
  tabResultSolutionTitle = " ";
  tabResultSchemeTitle = " ";
  tab5Title = " ";

  constructor(
    public navCtrl:             NavController,
    public tempProgramProvider: TempProgramProvider, 
    public programsProvider:    ProgramsProvider,
    public pagesProvider:       PagesProvider, 
    public formulasProvider:    FormulasProvider,
    public alertCtrl:           AlertController,
    public toastCtrl:           ToastController,
    ) {

	  this.tabResultBasicTitle      = "Basic information";
    this.tabResultWaterTitle      = "Water analysis";
    this.tabResultSolutionTitle   = "Fertigation solution";
    this.tabResultSchemeTitle     = "Fertigation scheme";
    /*this.tab5Title = "Send recommendation";*/

    tempProgramProvider.setCalculationsValues(formulasProvider);
  }


  saveProgram(){
    console.log("saveProgram");
    this.tempProgramProvider.saveInDB(this.programsProvider);
    for (var i = 0; i < 5000; ++i) {
      //dummy wait
    }
    console.log("end wait");
    //this.programsProvider.saveProgramAPI(this.tempProgramProvider.program);
   
    this.pagesProvider.clearList();
    this.pagesProvider.setActivePage(this.pagesProvider.rootPage.component);    
    this.navCtrl.push(this.pagesProvider.rootPage.component);
  }

  sendProgram(toEmails){
    console.log("sendProgram");
    this.tempProgramProvider.sendProgramByEmail(this.programsProvider, toEmails) ;
    for (var i = 0; i < 5000; ++i) {
      //dummy wait
    }
    console.log("end wait");   
    let toast = this.toastCtrl.create({
                  message: "E-mail was sent",
                  duration: 3500,
                  position: 'bottom'
                });
                toast.present();
  }


    showPromptSendEmail () {
    let prompt = this.alertCtrl.create({
      title: 'Send by E-mail',
      message: "Enter the recipient e-mails separate by ;",
      inputs: [
        {
          name: 'toEmails',
          placeholder: 'example1@sqm.com;example2@sqm.com'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'send',
          handler: data => {
            console.log(data);
            let emails = data.toEmails.split(";");
            let validate = false;
            for (var i = 0; i < emails.length; ++i) {
              validate = this.validateEmail(emails[i].replace(" ",""));
              
            }
            if(validate) {
              console.log('email valids');
              this.sendProgram(data.toEmails);
            }else {
              let toast = this.toastCtrl.create({
                  message: "The emails are invalid. Please verify the e-mails.",
                  duration: 3500,
                  position: 'bottom'
                });
                toast.present();
            }
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  validateEmail(email) {
     console.log("validateEmail");
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
  }

}
