import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProgramsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProgramsProvider {


db : SQLiteObject = null;
  constructor(public http: Http) {
    console.log('Hello ProgramsProvider Provider');
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

}
