System.register([], function (_export) {
  'use strict';

  var WorkviewRouter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      WorkviewRouter = (function () {
        function WorkviewRouter() {
          _classCallCheck(this, WorkviewRouter);

          this.heading = 'Workview';
        }

        _createClass(WorkviewRouter, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {

            config.map([{ route: ['', 'workview'], name: 'workview', moduleId: 'workview/workview', nav: true, title: 'Workview' }, { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' }]);

            this.router = router;
          }
        }]);

        return WorkviewRouter;
      })();

      _export('WorkviewRouter', WorkviewRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmt2aWV3L3dvcmt2aWV3LXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFJYSxjQUFjOzs7Ozs7Ozs7QUFBZCxvQkFBYztpQkFBZCxjQUFjO2dDQUFkLGNBQWM7O2VBQ3pCLE9BQU8sR0FBRyxVQUFVOzs7cUJBRFQsY0FBYzs7aUJBR1YseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQzs7QUFFN0Isa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxVQUFVLENBQUMsRUFBRyxJQUFJLEVBQUUsVUFBVSxFQUFRLFFBQVEsRUFBRSxtQkFBbUIsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxVQUFVLEVBQUUsRUFDckgsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFVLElBQUksRUFBRSxPQUFPLEVBQVUsUUFBUSxFQUFFLE9BQU8sRUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDOUcsQ0FBQyxDQUFDOztBQUdILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2VBWlUsY0FBYzs7O2dDQUFkLGNBQWMiLCJmaWxlIjoid29ya3ZpZXcvd29ya3ZpZXctcm91dGVyLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==