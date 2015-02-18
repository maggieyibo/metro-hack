(function() {
  'use strict';

  angular.module('app')

    .factory('RouteService', ['$http', '$q', function($http, $q) {

      var service = {};
      var ROUTE_URL = 'http://api.metro.net/agencies/lametro/routes';

      var rawRoutes;

      var deferred = $q.defer();
      service.routes = deferred.promise;
      $http.get(ROUTE_URL, {headers: {'Content-Type': 'application/json'}}).then(function(data){
        


        deferred.resolve(data);
      });

      return service;

    }]);






})();