/**
 * Created by gireesh.babu on 18/08/15.
 */

export class WorkviewRouter{
  heading = 'Configuration';

  configureRouter(config, router){

    config.map([
      { route: ['','create-template'], name: 'create-template',  moduleId: 'configuration/create-template', nav: true, title:'Create Template' },
      { route: 'create-activity-type', name: 'create-activity-type',  moduleId: 'configuration/create-activity-type', nav: true, title:'Create Activity Type' }
   ]);


    this.router = router;
  }
}
