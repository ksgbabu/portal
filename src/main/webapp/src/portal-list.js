/**
 * Created by gireesh.babu on 04/06/15.
 */

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class portalList{

  heading = 'portal list';
  portals = []

  constructor(http){
    this.http = http;
  }

  activate(){
    this.http.get('/portals').then( response => {
        this.portals = response.content.items;
      });
  }

}
