/**
 * Created by gireesh.babu on 18/08/15.
 */

export class WorkviewRouter{
  heading = 'Configuration';

  configureRouter(config, router){

    config.map([
      { route: ['','create-template'],  name: 'create-template',       moduleId: 'configuration/create-template',       nav: true, title:'Create Template' },
   ]);


    this.router = router;
  }
}
