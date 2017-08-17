import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';


@Injectable()
export class Pages {

  pages: any [];
  constructor() {
  }

  add(page: any) {
    this.pages.push(page);
  }

  delete(page: any) {
    this.pages.reduce(page);
  }

}
