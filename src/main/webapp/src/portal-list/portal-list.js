/**
 * Created by gireesh.babu on 04/06/15.
 */

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

export class portalList{

  heading = 'Portal list:';
  portals = []

  static inject = [HttpClient];
  constructor(http){
    this.http = http;
  }

  activate(){
    this.http.get('/portal/rest/portals').then( response => {
        this.portals = response.content;
      console.log( 'response'+ response.content);
      });
  }

}
