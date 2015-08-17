/**
 * Created by gireesh.babu on 18/08/15.
 */

export class WorkviewRouter{
  heading = 'Workview';

  configureRouter(config, router){

    config.map([
      { route: ['','workview'],  name: 'workview',       moduleId: 'workview/workview',       nav: true, title:'Workview' },
      { route: 'users',         name: 'users',         moduleId: 'users',         nav: true, title:'Github Users' },
    ]);


    this.router = router;
  }
}
