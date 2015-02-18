(function() {
  'use strict';

  angular.module('app')

  .controller('HomeController', ['$http', 'RouteService', function($http, RouteService) {

    var vm = this;

    // var vehPosListUrl = 'http://api.metro.net/agencies/lametro/vehicles';

    // $http.get(vehPosListUrl, {headers: {'Content-Type': 'application/json'}}).success(function(data) {
    //   vm.posList = data;
    // });

    vm.map = { center: { latitude: 34.0500, longitude: -118.2500 }, zoom: 8 };

    RouteService.routes.then(function(data) {
      vm.routes = data;
    });

  }]);

})();