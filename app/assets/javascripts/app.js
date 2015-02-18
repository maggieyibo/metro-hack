(function() {
  'use strict';


  angular.module('app', ['ui.router', 'ngResource', 'templates'])


  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {

      // send security token to rails with every angular http request
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

      $stateProvider
        .state('home', {
          url: '',
          templateUrl: 'home.html',
            controller: 'HomeController',
            controllerAs: 'vm',
            // resolve: {
            //   bsReady: ['BattleService',
            //     function(BattleService) {
            //       return BattleService.ready;
            //   }],
            //   user: ['UserService',
            //     function(UserService) {
            //       return UserService.ready;
            //   }]
            // }
        });

      $urlRouterProvider.otherwise('/home');

    }]);

})();