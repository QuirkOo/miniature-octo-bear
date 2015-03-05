
var app = angular.module('NoteApp', [ 'ui.router', 'ngSanitize', 'ui.ace', 'hc.marked', 'luegg.directives' ]);

app.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
}]);

app.config([ '$locationProvider', '$stateProvider', '$urlRouterProvider',
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