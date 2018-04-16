import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, AlertController } from 'ionic-angular';

import { Program } from '../../models/program';
import { NewBasicInformation } from '../../pages/new-basic-information/new-basic-information';
import { TabsResultPage } from '../../pages/tabs-results/tabs-results';
import { PagesProvider } from '../../providers/pages';
import { TempProgramProvider } from '../../providers/temp-program';
import { ProgramsProvider } from '../../providers/programs/programs';
import { LoginProvider } from '../../providers/login'
import { SplitPaneProvider } from '../../providers/splitPane';
@Component({
  selector: 'page-previous-list',
  templateUrl: 'previous-list.html'
})
export class PreviousList {


  
  currentItems: any;
  filterItems: any;
  searchTerm: string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public pagesProvider : PagesProvider,
    public tempProgramProvider: TempProgramProvider,
    public programsProvider: ProgramsProvider,
    public loginProvider: LoginProvider,
    public platform: Platform,
    public splitPaneProvider: SplitPaneProvider,
    public alertCtrl: AlertController ) {

    splitPaneProvider.setShow(true);
    console.log("PList Page - PreviousList");
    
    
    this.programsProvider.login = this.getLoginUser();
    console.log ("PList Page - Login", this.programsProvider.login );
    
    //this.navCtrl.popToRoot();
    this.pagesProvider.clearList();
    this.currentItems=[];    
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    console.log("PList Page - ionViewDidLoad");
    this.getAllPrograms();
    this.setFilterPrograms();
  }

  /*
    getAllPrograms execute the funtion  getAll from the provider  "programsProvider" that 
    go to the DB to select all programs. 
   */
  getAllPrograms(){
    console.log("PList Page - getAllPrograms"); 

       //if(!this.platform.is('core')) {
        this.programsProvider.getAll()
          .then(programs => {
            
            if(programs.length  > 0) {
              console.log("PList Page - programs size:"+ programs.length);
              this.currentItems = programs;
              this.setFilterPrograms();
            }else{
              console.log("PList Page - 0 programs");
            }
            
          })
          .catch( error => {

            console.error( error );
          });
       //}else{
       //   console.log("PList Page - cant access  the DB from browser"); 
       //}     

       this.programsProvider.sendNewProgramsToAPI()
       this.programsProvider.deleteProgramsToAPI();
  }

  setFilterPrograms(){
    console.log("PList Page - setFilterPrograms");
    this.filterItems = JSON.parse(JSON.stringify(this.currentItems));
    console.log("this.filterItems: " + this.filterItems.length);
    for (var i = 0; i < this.filterItems.length; ++i) {
      console.log("farmer: " + this.filterItems[i].farmer);
      console.log("program status " + this.filterItems[i].status);
    }
  }


  getFilterItems() {
    console.log("PList Page - getFilterItems");
    this.filterItems = JSON.parse(JSON.stringify(this.currentItems));

    /*console.log(" PList Page - this.filterItems: " + this.filterItems.length);
    for (var i = 0; i < this.filterItems.length; ++i) {
      //console.log("farmer: " + this.filterItems[i].farmer);
      //console.log("program status " + this.filterItems[i].status);
    }*/

    this.filterItems = this.filterItems.filter(
      (item) => {
        let stringObj : string  = item.farmer + item.crop + item.stage;
        console.log("stringObj: " + item.farmer);
        console.log(stringObj.toLowerCase().indexOf( this.searchTerm));
        return stringObj.toLowerCase().indexOf( this.searchTerm.toLowerCase()) > -1;   
        
    });

    console.log("PList Page - AFTER this.filterItems: " + this.filterItems.length);
    /*for (var i = 0; i < this.filterItems.length; ++i) {
      //console.log("farmer: " + this.filterItems[i].farmer);
    }*/
  }


  updateProgramInformation(data: any){
    console.log("PList Page - updateProgramInformation")
    console.log("PList Page - data", data)
    this.tempProgramProvider.init();
    this.tempProgramProvider.setOnlyView(true);
    this.tempProgramProvider.getInstance().id = data.id;
    this.tempProgramProvider.getInstance().basicInformation = data.basicInformation;
    this.tempProgramProvider.getInstance().cropInformation = data.cropInformation;
    this.tempProgramProvider.getInstance().analysisInformation = data.analysisInformation;
    this.tempProgramProvider.getInstance().waterAnalysisInformation = data.waterAnalysisInformation;


  }
  openItem(item: any) {
     console.log("PList Page - openItem")
    //console.log("data", data)
      let itemObj = JSON.parse(item.data);
      console.log(itemObj) ;
      this.updateProgramInformation(itemObj);
        
        var resultPage = { 
          title: 'Fertigation Programme',
          component: TabsResultPage, 
          iconClass: 'iconprogramme'   
        };



        this.pagesProvider.add(resultPage);
        this.pagesProvider.setActivePage(resultPage); 
        this.navCtrl.push(resultPage.component);
  }

  deleteItem(program: any) {
     console.log("PList Page - deleteItem")
     console.error( "program param: "+ JSON.stringify(program) );
     console.error( "program id: "+ program.id );
     console.error( "program status: "+ program.status );
     this.programsProvider.delete(program.id)
          .then(programs => {
            console.error( "update delete program" );
            this.navCtrl.setRoot(PreviousList);
          })
          .catch( error => {
            console.error( error );
          });



/*


 */
    //console.log("data", data)
      /*let itemObj = JSON.parse(item.data);
      this.updateProgramInformation(itemObj);
        
        var resultPage = { 
          title: 'Fertigation Programe.',
          component: TabsResultPage, 
          iconClass: 'iconprogramme'   
        };



        this.pagesProvider.add(resultPage);
        this.pagesProvider.setActivePage(resultPage); 
        this.navCtrl.push(resultPage.component);*/
  }



  openNew() {
      //this.updateProgramInformation();
        var newBasicInfoPage = { 
          title: 'Add new recommendation', 
          component: NewBasicInformation, 
          iconClass: 'iconprogramme'   
        };
        
        this.tempProgramProvider.init();
        this.pagesProvider.add(newBasicInfoPage);
        this.pagesProvider.setActivePage(newBasicInfoPage); 
        this.navCtrl.push(newBasicInfoPage.component);
  }

  getConvertDate(date: String){
    let spliteDate = date.split("T");
    return spliteDate[0];
  }

  getLoginUser(){
    console.log("PList Page - getLoginUser");
    console.log(this.loginProvider.login);
    return this.loginProvider.login;
  }

  logout(){
    console.log("PList Page - logout");
    this.programsProvider.drop();
    this.pagesProvider.clearAll();
    this.pagesProvider.setActivePage(this.pagesProvider.loginPage);
    this.pagesProvider.setRootPage(this.pagesProvider.loginPage);
    this.loginProvider.logout();  
    this.navCtrl.setRoot(this.pagesProvider.loginPage.component);
  }


   showAlertLogout() {
    let prompt = this.alertCtrl.create({
      title: 'Log out',
      message: "If you log out, the data and programmes will be deleted permanently.",
      inputs: [],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log('Saved clicked');
            this.logout()

          }
        }
      ]
    });
    prompt.present();
  }
}
