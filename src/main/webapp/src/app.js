import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';


LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export class App {
  configureRouter(config, router){
    config.title = 'ksgportal';
    config.map([
      { route: '', moduleId: 'portal-list', nav: true, title:'Portal List' },
      { route: 'about', moduleId: 'about', nav: true, title:'About' },
      { route: 'workview',  name: 'workview', moduleId: 'workview/workview-router', nav: true, title:'Work View' }
    ]);

    this.router = router;
  }

}
