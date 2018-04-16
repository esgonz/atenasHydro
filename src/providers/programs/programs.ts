import { Injectable } from '@angular/core';
import {Http,  URLSearchParams} from '@angular/http';
import { SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

import {LoginProvider} from '../login';
import { Api } from '../api';
/*
  Generated class for the ProgramsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProgramsProvider {


  public login = null;

  public URL = '';
db : SQLiteObject = null;
  constructor(public http: Http, public loginProvider : LoginProvider, public api : Api) {
    console.log('ProgramPV - ProgramsProvider ');   

    this.URL = this.api.BASE_URL + 'programmes/';
    /*let sresponse = this.searchProgramsAPI(); */

    /*
    
    this.searchProgramsAPI().subscribe(
        data => {
            let apidata = data.results; 
            console.log("apidata", apidata);
        },
        err => {
            console.log(err);
        },
        () => console.log('apidata Search Complete')
    );
    */

    // have a string, do the search
    /*this.searchProgramsAPI()
      .subscribe(
      // process the results..
      (data) => {
        console.log('search results', data)
        let apidata = data
      },
      // handle an error condition...
      (err) => alert("Error Searching programs: " + err),
      // called when completely done processing
      () => {
        console.log("All Good With The Data");
        //loading.dismiss()
      }
    );*/

    //this.sendNewProgramsToAPI();



  }

  /*singleton set DB*/
  setDatabase(db: SQLiteObject){
    console.log('ProgramPV - setDatabase');
  	if(this.db === null) {
      console.log('db OK');
  		this.db = db;
  	}
  }

  /*create table in DB*/
  createTable(){
    console.log("ProgramPV - createTable"); 
  	let sql = 'CREATE TABLE IF NOT EXISTS programs (id INTEGER PRIMARY KEY AUTOINCREMENT, uuid TEXT, farmer TEXT, crop TEXT,stage TEXT, date TEXT, data TEXT,  status INTEGER)';
  		return this.db.executeSql(sql, []);
  }

  /*get all get all items in tge db and return a promise with that data.*/
  getAll(){
    console.log("ProgramPV - getAll"); 
  	
    let sql = 'SELECT * FROM programs WHERE status != 3';
  	return this.db.executeSql(sql, [])
  	.then( response => {
  		let programs = [];
  		for (var i = 0; i < response.rows.length; ++i ) {
  			programs.push( response.rows.item(i));
        console.log("program resolved:")
        console.log(JSON.stringify( response.rows.item(i)));
  		}
      console.log("programs size: "+ programs.length); 

  		return Promise.resolve( programs);

  	})
  	.catch(error => Promise.reject(error));    
  }

  /*get all get all items in tge db and return a promise with that data.*/
  getAllNotSyncs(){
    console.log("ProgramPV - getAllNotSyncs"); 
    let sql = 'SELECT * FROM programs WHERE status = 1';
    return this.db.executeSql(sql, [])
    .then( response => {
      let programs = [];
      for (var i = 0; i < response.rows.length; ++i ) {
        programs.push( response.rows.item(i));
      }
      console.log("ProgramPV - programs size: "+ programs.length); 
      return Promise.resolve( programs);

    })
    .catch(error => Promise.reject(error));
  }


  /*get all get all items in tge db and return a promise with that data.*/
  getAllToDeleteSyncs(){
    console.log("ProgramPV - getAllToDeleteSyncs"); 
    let sql = 'SELECT * FROM programs WHERE status = 3';
    return this.db.executeSql(sql, [])
    .then( response => {
      let programs = [];
      for (var i = 0; i < response.rows.length; ++i ) {
        programs.push( response.rows.item(i));
      }
      console.log("ProgramPV - programs size: "+ programs.length); 
      return Promise.resolve( programs);

    })
    .catch(error => Promise.reject(error));
  }
  /*create execute and insert in the db*/
  create(program: any){
    console.log("ProgramPV - create"); 
  	let sql = 'INSERT INTO programs(uuid, farmer, crop, stage, date, data, status) VALUES (?,?,?,?,?,?,?);';
  	return this.db.executeSql(sql, [program.uuid, program.farmer, program.crop, program.stage , program.date, program.data , program.status]);
  }


 
  /*update execute update in the db*/
  update(program: any){

    console.log("ProgramPV - update"); 
    console.log("stage: " + program.stage);
    console.log("date: " + program.date);
    console.log("data: " + program.data);
    console.log("status: " + program.status);
  	let sql = 'UPDATE programs SET uuid=?, farmer=?, crop =?, stage=?, date=?, data=?, status=? WHERE id=?;';
  	return this.db.executeSql(sql,[program.uuid, program.farmer, program.crop, program.stage, program.date , program.data , program.status, program.id])

  }

  /*delete(program: any){
    console.log("ProgramPV - delete"); 
  	let sql = 'DELETE FROM programs WHERE id=?';
  	return this.db.executeSql(sql, [program.id]);
  }*/

   /*delete execute update in the db*/
  deleteDB(programUuid: String){

    console.log("ProgramPV - delete"); 
    console.log("id: " + programUuid);
    let sql = 'DELETE FROM programs WHERE uuid=?;';
    return this.db.executeSql(sql,[programUuid])

  }



   /*delete execute update in the db*/
  delete(programId: String){

    console.log("ProgramPV - delete"); 
    console.log("id: " + programId);
    let sql = 'UPDATE programs SET status= 3 WHERE id=?;';
    return this.db.executeSql(sql,[programId])

  }


  drop(){
    console.log("ProgramPV - drop table"); 

    let sql = 'DROP TABLE IF EXISTS programs;';
    return this.db.executeSql(sql, '');
  }




  searchProgramsAPI(){
    console.log("ProgramPV - searchProgramsAPI"); 
    // fields to get back from API based on documenation
        //let fields = 'brand_id,item_name,item_id,brand_name,nf_calories,nf_total_fat';

        // set the parameters for the http request, these will be 
        // added to the query string
        let params: URLSearchParams = new URLSearchParams();
        //params.set('results', '0:50')
        params.set('appId', this.api.APP_ID);
        params.set('appKey', this.api.API_KEY);
        //params.set('fields', fields)

        // construct the URL, adding the search term to the url
        //let url = this.BASE_URL + _searchString
        let url = this.api.BASE_URL;

        // execute the http get request, passing in query tring parameters
        // use the .map() to convert results to JSON to be returned to
        // the caller
        return this.http.get(url, { search: params })
                  .map(res => res.json())
  }

  saveProgramAPI(program: any){
     console.log("ProgramPV - saveProgramAPI"); 
      /*
      
      status: 
      0 : logic erase
      1 : active
      2 : saved in api      
      */
     
      console.log ("LOGIN: " + this.login.user);
     let programme = {
            user :    this.login.user.userId,
            farmer:   program.farmer,
            crop:     program.crop,
            stage:    program.stage,
            date:     program.date,    
            data:     program.data,
            country:  "null",
            market:   this.login.user.market,
            status:   program.status
          };
        // construct the URL, adding the search term to the url      
        

        console.log("ProgramPV - programme", programme);

        return new Promise((resolve, reject) => {
          this.http.post(this.URL, programme)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });

        });
  }

  deleteProgramAPI(programUuid: String){
     console.log("ProgramPV - deleteProgramAPI"); 
      /*
      
      status: 
      0 : logic erase
      1 : active
      2 : saved in api      
      */

        console.log("ProgramPV - deleteProgramAPI", programUuid);

        let urlDelete = this.URL + programUuid;
        return new Promise((resolve, reject) => {
          this.http.delete(urlDelete)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });

        });
  }


  sendProgramByEmailAPI(program: any, toEmails : String){
     console.log("ProgramPV - sendProgramByEmailAPI"); 
      /*
      
      status: 
      0 : logic erase
      1 : active
      2 : saved in api      
      */
     
      let programme = {
            user :    this.login.user.userId,
            farmer:   program.farmer,
            crop:     program.crop,
            stage:    program.stage,
            date:     program.date,    
            data:     program.data,
            country:  "null",
            market:   "null",
            status:   program.status
          };

     let data = {

            id:     program.uuid,    
            programme: JSON.stringify(programme),
            toEmails:  toEmails            
          };
      let url = this.URL+'pdf/';
        // construct the URL, adding the search term to the url      
        
        //  333 error parasaver do nde trabajar
        console.log("ProgramPV - programme", data);

        return new Promise((resolve, reject) => {
          this.http.post(url, data)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });

        });
  }


  sendNewProgramsToAPI (){
    console.log("ProgramPV - sendNewProgramsToAPI");

    //  getall to  syncs in server
        this.getAllNotSyncs()
          .then(programs => {            
            if(programs.length  > 0) {
              console.log("ProgramPV - programs size: "+ programs.length);
              let currentItems = programs;
              for (var i = 0; i < currentItems.length; ++i ) {
                let program = programs[i];
                if(program.status == 1) {
                  console.log("ProgramPV - program SYNCS: ");
                  console.log("ProgramPV - program: " + program.uuid + " farmer: " + program.farmer + " crop: " + program.crop + " status: " + program.status ); 
                  program.status = 2;
                   this.saveProgramAPI(JSON.parse(JSON.stringify(program)))
                    //if server response
                    .then((response : any) => {
                      console.log("ProgramPV - program update in the API");
                      console.log(response);
                      //if server ok
                      if(response.status == 200) {
                         console.log("ProgramPV - api return ok. update status 2");
                         let responseObj = JSON.parse(response._body);
                         console.log("ProgramPV -  responseObj: " +responseObj);
                         program.uuid = responseObj._id ;


                         //update in local db status
                         console.log("program: "  + program.id);                                                  
                         console.log("uuid: "     + program.uuid);
                         console.log("farmer: "   + program.farmer);

                         this.update(program)
                           .then(response => {
                              console.log("ProgramPV - program update in the db status 2");
                              console.log(program);
                              
                            })
                            .catch( error => {
                                console.log("ProgramPV - error update in the db");
                              console.error( error );
                            })
                      }else{
                        program.status = 1;
                        console.log("ProgramPV - api return false. not update status");
                      }
                    })
                    .catch(error =>{
                      console.log("ProgramPV - error update program");
                      console.error( error );
                    })


                }//end if status 
                else {
                  console.log ("ProgramPV - notSyncs status 2")
                }   
                               
              }
          }else{
              console.log("ProgramPV - 0 programs no syncs");
            }
            
          })
          .catch( error => {

            console.error( error );
          });

  }

  deleteProgramsToAPI (){
    console.log("ProgramPV - deleteProgramsToAPI");

    //  getall to  syncs in server
        this.getAllToDeleteSyncs()
          .then(programs => {            
            if(programs.length  > 0) {
              console.log("ProgramPV - programs delete size: "+ programs.length);
              let currentItems = programs;
              
              for (var i = 0; i < currentItems.length; ++i ) {
                
                let program = programs[i];
                
                if(program.uuid != "") {
                  
                  console.log("ProgramPV - trying delete: " + program.uuid);
                   this.deleteProgramAPI(program.uuid)
                    //if server response
                    .then((response : any) => {
                      console.log("ProgramPV - program deleted in the API");
                      console.log(response);
                      //if server ok
                      if(response.status == 200) {
                         console.log("ProgramPV - api return ok. deleted program");
                         let responseObj = JSON.parse(response._body);

                         this.deleteDB(program.uuid)
                           .then(response => {
                              console.log("ProgramPV - program delete in the db");
                              console.log(program);
                              
                            })
                            .catch( error => {
                                console.log("ProgramPV - error update in the db");
                              console.error( error );
                            })

                      }else{
                        console.log("ProgramPV - api return false. not delete programme");
                      }
                    })
                    .catch(error =>{
                      console.log("ProgramPV - error delete program");
                      console.error( error );
                    })

                }//end if status 
                else {
                  console.log ("ProgramPV - not Delete uuid '' ")
                }   
                               
              }
          }else{
              console.log("ProgramPV - 0 programs no syncs delete");
            }
            
          })
          .catch( error => {

            console.error( error );
          });

  }

  

}
