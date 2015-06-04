System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, HttpClient, portalList;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      portalList = (function () {
        function portalList(http) {
          _classCallCheck(this, portalList);

          this.heading = 'portal list';
          this.portals = [];

          this.http = http;
        }

        _createClass(portalList, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            this.http.get('/portals').then(function (response) {
              _this.portals = response.content.items;
            });
          }
        }]);

        return portalList;
      })();

      _export('portalList', portalList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRhbC1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFPYSxVQUFVOzs7Ozs7OztpQ0FIZixNQUFNOztzQ0FDTixVQUFVOzs7QUFFTCxnQkFBVTtBQUtWLGlCQUxBLFVBQVUsQ0FLVCxJQUFJLEVBQUM7Z0NBTE4sVUFBVTs7ZUFFckIsT0FBTyxHQUFHLGFBQWE7ZUFDdkIsT0FBTyxHQUFHLEVBQUU7O0FBR1YsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQVBVLFVBQVU7O2lCQVNiLG9CQUFFOzs7QUFDUixnQkFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFFLFVBQUEsUUFBUSxFQUFJO0FBQ3hDLG9CQUFLLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUN2QyxDQUFDLENBQUM7V0FDTjs7O2VBYlUsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoicG9ydGFsLWxpc3QuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9