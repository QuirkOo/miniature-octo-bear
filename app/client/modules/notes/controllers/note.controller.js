
angular
    .module('NoteApp')
    .controller('NoteController', [ '$scope', '$http', function($scope, $http) {

      $scope.notes = [];

      $http.get('/notes')
          .success(function(data) {
            $scope.notes = data;
          });
    }]);