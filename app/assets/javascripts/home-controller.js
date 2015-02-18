(function() {
  'use strict';

  angular.module('app')

  .controller('HomeController', ['$http', function($http) {

    var vm = this;


    vm.test = "angular is successfully set up";


  }]);

})();