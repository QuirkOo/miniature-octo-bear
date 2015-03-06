
angular.module('NoteApp')
    .config([ '$locationProvider', '$stateProvider', '$urlRouterProvider',
      function($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
              url: '/',
              templateUrl: '/core/views/index'
            });

      }]);