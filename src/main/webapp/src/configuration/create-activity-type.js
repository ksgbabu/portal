/**
 * Created by gireesh.babu on 19/08/15.
 */

import {computedFrom} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {ActivityType} from "configuration/activity-type";

export class CreateActivityType{

  activityTypes = [];

  static inject = [HttpClient];
  constructor(http){
    this.http = http;
  }

  submit(){
    console.log('activity type -' +this.activityType);

    var activityTypeModel = new ActivityType();
    activityTypeModel.name = this.activityType;
    //activityTypeModel.created = new Date(date());


    this.http.createRequest('/portal/rest/activity/type')
      .asPost()
      .withHeader('Content-Type','application/json')
      .withContent(activityTypeModel)
      .send()
      .then(this.getActivityTypes());

  }

  getActivityTypes(){

    this.http.get('/portal/rest/activity/types').then( response => {
      this.activityTypes = response.content;
      console.log( 'response'+ response.content);
    });

  }

}
