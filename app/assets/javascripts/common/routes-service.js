(function() {
  'use strict';

  angular.module('app')

    .factory('RouteService', ['$http', '$q', function($http, $q) {

      var service = {};
      var ROUTE_URL = 'http://api.metro.net/agencies/lametro/routes';

      var rawRoutes;

      service.routes = [
        { name: 'Downtown', routes: [] },
        { name: 'Pasadena', routes: [] },
        { name: 'Santa Monica', routes: [] },
        { name: 'Hollywood', routes: [] }
      ];

      var deferred = $q.defer();
      service.routes = deferred.promise;
      $http.get(ROUTE_URL, {headers: {'Content-Type': 'application/json'}}).then(function(data){
        data = data.data.items;
        _.forEach(service.routes, function (route) {
          service.routes.routes = _.filter(data, function (r) {
            return r.display_name.indexOf(route.name) != -1;
          });
        });
        deferred.resolve(service.routes);
      });

      return service;

    }]);






})();