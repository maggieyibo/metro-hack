(function() {
  'use strict';

  angular.module('app')

  .controller('HomeController', ['$http', function($http) {

    var vm = this;

    var vehPosListUrl = 'http://api.metro.net/agencies/lametro/vehicles';

    $http.get(vehPosListUrl, {headers: {'Content-Type': 'application/json'}}).success(function(data) {
      vm.posList = data;
    });



  }]);

})();