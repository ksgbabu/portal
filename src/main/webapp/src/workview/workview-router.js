/**
 * Created by gireesh.babu on 18/08/15.
 */

export class WorkviewRouter{
  heading = 'Workview';

  configureRouter(config, router){

    config.map([
      { route: ['','progressing-work'],  name: 'progressing-work',       moduleId: 'workview/progressing-work',       nav: true, title:'Progressing Items' },
      { route: ['new-work'],  name: 'new-work',       moduleId: 'workview/new-work',       nav: true, title:'New Items' }
    ]);


    this.router = router;
  }
}
