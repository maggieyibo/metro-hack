(function() {
  'use strict';

  angular.module('app')

  .controller('HomeController', ['$http', 'RouteService', 'uiGmapGoogleMapApi', 'LocationsService', function($http, RouteService, uiGmapGoogleMapApi, LocationsService) {

    var vm = this;

    // var vehPosListUrl = 'http://api.metro.net/agencies/lametro/vehicles';

    // $http.get(vehPosListUrl, {headers: {'Content-Type': 'application/json'}}).success(function(data) {
    //   vm.posList = data;
    // });



    uiGmapGoogleMapApi.then(function(maps) {
      vm.map = { center: { latitude: 34.0500, longitude: -118.2500 }, zoom: 8 };
    });

    RouteService.routes.then(function(data) {
      vm.routes = data;
    });

    LocationsService.locations.then(function(locations) {
      var c = 0;
      _.forEach(locations, function(l) {
        l.id = c;
        l.coords = {
          "longitude": l.longitude,
          "latitude": l.latitude
        }
        delete l.longitude;
        delete l.latitude;
        c++;
      })
      vm.busses = locations;
    });

  }]);

})();