import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Crop } from '../models/crop';

@Injectable()
export class Crops {
  /*crops= [];

  defaultItem: any = {
    "id": "0",
    "name": "Default Crop",
    "stages": [],
  };


  constructor(public http: Http) {
    let crops = [];

    for (let item of crops) {
      this.crops.push(new Crop(item));
    }
  }
  //
  load(){
    console.log("json crops called");
    
    

    return new Promise ( resolve => {
      this.http.get('../assets/data/crops.json').map( response => {
        ∑
        console.log(response.json());
        this.crops = response.json ();
        resolve(this.crops);
      });

      this.http.get('assets/data/crops.json').map(res => res.json()).subscribe(data => {
        console.log("assets crops response ok!");
        this.crops = data;
        for (var i = this.crops.length - 1; i >= 0; i--) {
          console.log(this.crops[i].name);
        }
        resolve(data);
      });
    });
  }
  query(params?: any) {
    if (!params) {
      return this.crops;
    }

    return this.crops.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Crop) {
    this.crops.push(item);
  }

  delete(item: Crop) {
    this.crops.splice(this.crops.indexOf(item), 1);
  }
  */

  //public data: Crop;
  public data: Crop[] = [];
  constructor(private http: Http) {
    this.data = null;
  }
 
  load() {
    if (this.data) {
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
    });
  }
}
