import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Crop } from '../models/crop';
import { CropStage } from '../models/cropstage';
import { CropSolution } from '../models/cropsolution';
@Injectable()
export class CropsProvider {
  /*
  
    crops= [];

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
  public instance: Crop[] = [];
  public cropsDict = {};
  
  constructor(private http: Http) {
    this.instance = null;
  }
  /*
  Init crop data from assets JSON with crops

   */
  init() {
    console.log("cropProvider", "init provider");
    if (this.instance) {
      console.log("data exits, return promise");
      return Promise.resolve(this.instance);
    }
 
    return new Promise(resolve => {
      this.http.get('assets/data/crops.json')
        .map(res => res.json())
        .subscribe(data => {
          console.log("data subscribe, resolve");
          
          
          //this.instance = data;
          var arrayNewCrops = [];
          
          for (var i = 0; i < data.length ; i++) {
            let auxCrop = new Crop (data[i].id, data[i].name, data[i].solutions, data[i].stages);
            arrayNewCrops.push(auxCrop);
          }
          this.instance = arrayNewCrops;
          this.setDictionary();
          console.log("data PROMISE", this.instance);
          resolve(this.instance);
        });
    });
  }

  /*
  getInstance Get the instance with crops data.
   */
  getInstance (){
    console.log("cropProvider", "getInstance");
    return this.instance;
  }


  /*
  setDictionary transform array with crops in a Dictionary 
  key->value object where the key it is the id
   */
  setDictionary (){
    console.log("cropProvider", "setDictionary");
    for (var i = 0; i <  this.instance.length ; i++) {
      this.cropsDict[this.instance[i].id] = this.instance[i];
    }
  }

  /*
  getAllCrops return array with all crops
  return Crop Array
   */
  getAllCrops(){
    console.log("cropProvider", "getAllCrops");
    var arrayNewCrops = [];
    for (var i = 0; i <  this.instance.length ; i++) {
      arrayNewCrops.push(this.instance[i])
    }
    
    return arrayNewCrops;
  }


  /* 
    getCropById get crop by id from the dictionary
    @param id target id for the search
    return Crop Object 
  */
  getCropById(id){
    console.log("cropProvider", "getCropById: " + id);
    console.log("cropProvider", this.cropsDict[id]);
    return this.cropsDict[id];
  }
}
