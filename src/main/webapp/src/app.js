import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'ksgportal';
    config.map([
      //{ route: ['','portal-list'],  moduleId: './portal-list',      nav: true, title:'Portal List' },
      { route: 'about',        moduleId: './about',       nav: true, title:'About' },
      //{ route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
