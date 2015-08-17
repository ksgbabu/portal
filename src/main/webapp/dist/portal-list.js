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

          this.heading = 'Portal list:';
          this.portals = [];

          this.http = http;
        }

        _createClass(portalList, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            this.http.get('/portal/rest/portals').then(function (response) {
              _this.portals = response.content;
              console.log('response' + response.content);
            });
          }
        }], [{
          key: 'inject',
          value: [HttpClient],
          enumerable: true
        }]);

        return portalList;
      })();

      _export('portalList', portalList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRhbC1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswQkFPYSxVQUFVOzs7Ozs7OztpQ0FIZixNQUFNOztzQ0FDTixVQUFVOzs7QUFFTCxnQkFBVTtBQU1WLGlCQU5BLFVBQVUsQ0FNVCxJQUFJLEVBQUM7Z0NBTk4sVUFBVTs7ZUFFckIsT0FBTyxHQUFHLGNBQWM7ZUFDeEIsT0FBTyxHQUFHLEVBQUU7O0FBSVYsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQVJVLFVBQVU7O2lCQVViLG9CQUFFOzs7QUFDUixnQkFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQSxRQUFRLEVBQUk7QUFDcEQsb0JBQUssT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7QUFDbEMscUJBQU8sQ0FBQyxHQUFHLENBQUUsVUFBVSxHQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQyxDQUFDLENBQUM7V0FDTjs7O2lCQVZlLENBQUMsVUFBVSxDQUFDOzs7O2VBTGpCLFVBQVU7Ozs0QkFBVixVQUFVIiwiZmlsZSI6InBvcnRhbC1saXN0LmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==