var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Crop } from '../models/crop';
var CropsProvider = (function () {
    function CropsProvider(http) {
        this.http = http;
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
        this.instance = [];
        this.cropsDict = {};
        this.instance = null;
    }
    /*
    Init crop data from assets JSON with crops
  
     */
    CropsProvider.prototype.init = function () {
        var _this = this;
        console.log("cropProvider", "init provider");
        if (this.instance) {
            console.log("data exits, return promise");
            return Promise.resolve(this.instance);
        }
        return new Promise(function (resolve) {
            _this.http.get('assets/data/crops.json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log("data subscribe, resolve");
                //this.instance = data;
                var arrayNewCrops = [];
                for (var i = data.length - 1; i >= 0; i--) {
                    arrayNewCrops.push(new Crop(data[i].id, data[i].name, data[i].solutions, data[i].stages));
                }
                _this.instance = arrayNewCrops;
                _this.setDictionary();
                console.log("data PROMISE", _this.instance);
                resolve(_this.instance);
            });
        });
    };
    /*
    getInstance Get the instance with crops data.
     */
    CropsProvider.prototype.getInstance = function () {
        console.log("cropProvider", "getInstance");
        return this.instance;
    };
    /*
    setDictionary transform array with crops in a Dictionary
    key->value object where the key it is the id
     */
    CropsProvider.prototype.setDictionary = function () {
        console.log("cropProvider", "setDictionary");
        for (var i = this.instance.length - 1; i >= 0; i--) {
            this.cropsDict[this.instance[i].id] = new Crop(this.instance[i].id, this.instance[i].name, this.instance[i].solutions, this.instance[i].stages);
        }
    };
    /*
    getAllCrops return array with all crops
    return Crop Array
     */
    CropsProvider.prototype.getAllCrops = function () {
        console.log("cropProvider", "getAllCrops");
        var arrayNewCrops = [];
        for (var i = this.instance.length - 1; i >= 0; i--) {
            arrayNewCrops.push(new Crop(this.instance[i].id, this.instance[i].name, this.instance[i].solutions, this.instance[i].stages));
        }
        return arrayNewCrops;
    };
    /*
      getCropById get crop by id from the dictionary
      @param id target id for the search
      return Crop Object
    */
    CropsProvider.prototype.getCropById = function (id) {
        console.log("cropProvider", "getCropById: " + id);
        console.log("cropProvider", this.cropsDict[id]);
        return this.cropsDict[id];
    };
    return CropsProvider;
}());
CropsProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], CropsProvider);
export { CropsProvider };
//# sourceMappingURL=crops.js.map