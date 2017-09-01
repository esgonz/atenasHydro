import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Program } from '../models/program';

@Injectable()
export class ProgramProvider {

  public program;
  constructor(private http: Http) {
    
  }
 

   init (){
     this.program = new Program(null);
   }

   getInstance(){
     console.log("ProgramProvider", this.program );
     return this.program;
   }

   deleteInstance(){
     this.program = null;
   }
  load() {
    /*if (this.data) {
      console.log("data exits, return promise");
      return Promise.resolve(this.data);
    }
 
    return new Promise(resolve => {
      this.http.get('../assets/data/crops.json')
        .map(res => res.json())
        .subscribe(data => {
          console.log("data subscribe, resolve");
          this.data = data;
          resolve(this.data);
        });
    });*/
  }
}
