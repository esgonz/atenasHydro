
import { CropStage } from '../models/cropStage';
import { CropSolution } from '../models/cropSolution';

/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Crop {
	id = 0;
  name = "";
  solutions = {};
  stages = [];
  

  constructor( id: any, name: any, solutions: any, stages:any ) {
    // Quick and dirty extend/assign fields to this model
    

    this.id   = id;
    this.name = name;


    for (let f in solutions) {
      //charging solutions
      this.solutions[f] = new CropSolution(solutions[f]);
    }


    for (var i = stages.length - 1; i >= 0; i--) {
      //charging the stages
      var nStage = new CropStage(stages[i]);
      this.stages.push(nStage);
    }   

  }

  test(){
    console.log("HOLA DESDE CROP");
  }

  createTable(){
  }

  poblateTable(){
  }






}
