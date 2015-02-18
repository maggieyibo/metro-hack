(function() {
  'use strict';

  angular.module('app')

    .factory('LocationsService', ['$http', '$q', function($http, $q) {

      var service = {};
      var LOC_URL = 'http://api.metro.net/agencies/ lametro/vehicles';

      var rawLocations;

      var deferred = $q.defer();
      service.locations = deferred.promise;
      var locs = [];

      $http.get(LOC_URL, {headers: {'Content-Type': 'application/json'}}).then(function(data){
        data = data.data.items;
        _.forEach(data, function(l){
          locs.push(
            {
              longitude: l.longitude,
              latitude: l.latitude
            }
          );
        });
        // _.forEach(service.routes, function (route) {
        //   service.routes.routes = _.filter(data, function (r) {
        //     return r.display_name.indexOf(route.name) != -1;
        //   });
        // });
        deferred.resolve(locs);
      });

      return service;

    }]);

})();