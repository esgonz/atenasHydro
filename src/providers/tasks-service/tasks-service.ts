import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';


/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TasksServiceProvider {

	db : SQLiteObject = null;
  constructor(public http: Http) {
    console.log('Hello TasksServiceProvider Provider');
  }

  /*singleton set DB*/
  setDatabase(db: SQLiteObject){
  	if(this.db === null) {
  		this.db = db;
  	}
  }

  /*create table in DB*/
  createTable(){
  	let sql = 'CREATE TABLE IF NOT EXISTS task (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
  		return this.db.executeSql(sql, []);
  }

  /*get all get all items in tge db and return a promise with that data.*/
  getAll(){
  	let sql = 'SELECT * FROM tasks';
  	return this.db.executeSql(sql, [])
  	.then( response => {
  		let tasks = [];
  		for (var i = 0; i < response.rows.length; ++i) {
  			tasks.push( response.rows.item(i));
  		}
  		return Promise.resolve( tasks);

  	})
  	.catch(error => Promise.reject(error));
  }

  /*create execute and insert in the db*/
  create(task: any){
  	let sql = 'INSERT INTO tasks(title, completed) VALUES (?,?)';
  	return this.db.executeSql(sql, [task.title, task.completed]);

  }

  /*update execute update in the db*/
  update(task: any){
  	let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
  	return this.db.executeSql(sql,[task.title, task.completed, task.id ])

  }

  delete(task: any){
  	let sql = 'DELETE FROM tasks WHERE id=?';
  	return this.db.executeSql(sql, [task.id]);
  }

}
