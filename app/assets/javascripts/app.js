(function() {
  'use strict';


  angular.module('app', ['ui.router', 'ngResource', 'templates', 'uiGmapgoogle-maps'])


  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',
    'uiGmapGoogleMapApiProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider, uiGmapGoogleMapApiProvider) {

      // send security token to rails with every angular http request
      // $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

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

      // configure google maps
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyByhl7xDFBJUD7LE-nw3Q2oSPihG6U2AiM',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
      });

    }]);

})();