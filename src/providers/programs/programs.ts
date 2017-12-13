import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProgramsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProgramsProvider {

  // set URL for API
  private BASE_URL = 'http://localhost:3000/api/programmes/';  // URL to web api
  private APP_ID = '8abbcd8e'
  private API_KEY = '36e8d264537037ee7e832a41902ffe57'


db : SQLiteObject = null;
  constructor(public http: Http) {
    console.log('Hello ProgramsProvider Provider');


    /*let sresponse = this.searchProgramsAPI();*/
    

    /*this.searchProgramsAPI().subscribe(
        data => {
            let apidata = data.results; 
            console.log("apidata", apidata);
        },
        err => {
            console.log(err);
        },
        () => console.log('apidata Search Complete')
    );*/

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

    this.sendNewProgramsToAPI();



  }

  /*singleton set DB*/
  setDatabase(db: SQLiteObject){
    console.log('setDatabase');
  	if(this.db === null) {
      console.log('db OK');
  		this.db = db;
  	}
  }

  /*create table in DB*/
  createTable(){
    console.log("createTable"); 
  	let sql = 'CREATE TABLE IF NOT EXISTS programs (id INTEGER PRIMARY KEY AUTOINCREMENT, uuid TEXT, farmer TEXT, crop TEXT,stage TEXT, date TEXT, data TEXT,  status INTEGER)';
  		return this.db.executeSql(sql, []);
  }

  /*get all get all items in tge db and return a promise with that data.*/
  getAll(){
    console.log("programs- getAll"); 
  	let sql = 'SELECT * FROM programs';
  	return this.db.executeSql(sql, [])
  	.then( response => {
  		let programs = [];
  		for (var i = 0; i < response.rows.length; ++i ) {
  			programs.push( response.rows.item(i));
  		}
      console.log("programs size: "+ programs.length); 
  		return Promise.resolve( programs);

  	})
  	.catch(error => Promise.reject(error));
  }

  /*get all get all items in tge db and return a promise with that data.*/
  getAllNotSyncs(){
    console.log("programs- getAll"); 
    let sql = 'SELECT * FROM programs WHERE status = 1';
    return this.db.executeSql(sql, [])
    .then( response => {
      let programs = [];
      for (var i = 0; i < response.rows.length; ++i ) {
        programs.push( response.rows.item(i));
      }
      console.log("programs size: "+ programs.length); 
      return Promise.resolve( programs);

    })
    .catch(error => Promise.reject(error));
  }
  /*create execute and insert in the db*/
  create(program: any){
    console.log("create"); 
  	let sql = 'INSERT INTO programs(uuid, farmer, crop,stage, date, data, status) VALUES (?,?,?,?,?,?,?)';
  	return this.db.executeSql(sql, [program.uuid, program.farmer, program.crop, program.stage , program.date, program.data , program.status]);


  }

  /*update execute update in the db*/
  update(program: any){
    console.log("update"); 
  	let sql = 'UPDATE programs SET uuid=?, farmer=?, crop =?, stage=? date=?, data=?, status=? WHERE id=?';
  	return this.db.executeSql(sql,[program.uuid, program.farmer, program.crop, program.stage, program.date , program.data , program.status, program.id])

  }

  delete(program: any){
    console.log("delete"); 
  	let sql = 'DELETE FROM programs WHERE id=?';
  	return this.db.executeSql(sql, [program.id]);
  }

  searchProgramsAPI(){
    // fields to get back from API based on documenation
        //let fields = 'brand_id,item_name,item_id,brand_name,nf_calories,nf_total_fat';

        // set the parameters for the http request, these will be 
        // added to the query string
        let params: URLSearchParams = new URLSearchParams();
        //params.set('results', '0:50')
        params.set('appId', this.APP_ID);
        params.set('appKey', this.API_KEY);
        //params.set('fields', fields)

        // construct the URL, adding the search term to the url
        //let url = this.BASE_URL + _searchString
        let url = this.BASE_URL;

        // execute the http get request, passing in query tring parameters
        // use the .map() to convert results to JSON to be returned to
        // the caller
        return this.http.get(url, { search: params })
                  .map(res => res.json())
  }

  saveProgramAPI(program: any){
     
      /*
      
      status: 
      0 : logic erase
      1 : active
      2 : saved in api      
      */
     
     let programej = {
            user :    "usertest",
            farmer:   program.farmer,
            crop:     program.crop,
            stage:    program.stage,
            date:     program.date,    
            data:     program.data,
            country:  "",
            market:   "",
            status:   program.status
          };
        // construct the URL, adding the search term to the url
        //let url = this.BASE_URL + _searchString
        let url = this.BASE_URL;


        return new Promise((resolve, reject) => {
          this.http.post(url, programej)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });

        });
  }


  sendNewProgramsToAPI (){
    console.log("sendNewProgramsToAPI");

    //if(!this.platform.is('core')) {
    //  getall to  syncs in server
        this.getAllNotSyncs()
          .then(programs => {
            
            if(programs.length  > 0) {
              console.log("programs size:"+ programs.length);
              let currentItems = programs;
                

              //save in server
              for (var i = 0; i < programs.length; ++i ) {
                let programToAPI = programs[i];
                this.saveProgramAPI(JSON.parse(programToAPI))
                //if server response
                .then((response : any) => {
                  console.log("program update in the db");
                  console.log(response);
                  //if server ok
                  if(response.status == 200) {
                     console.log("api return ok. update status 2");
                     programToAPI.status = 2;
                     //update in local db status
                     this.update(programToAPI)
                       .then(response => {
                          console.log("program update in the db");
                          console.log(programToAPI);
                          
                        })
                        .catch( error => {
                            console.log("error update in the db");
                          console.error( error );
                        })
                  }else{
                    console.log("api return false. not update status");
                  }
                })
                .catch(error =>{
                  console.log("error update program");
                  console.error( error );
                })
              }



            }else{
              console.log("0 programs");
            }
            
          })
          .catch( error => {

            console.error( error );
          });
    //   }else{
    //      console.log("cant access  the DB from browser"); 
    //   }

  }

}
