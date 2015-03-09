
angular
    .module('NoteApp')
    .controller('NoteListCtrl', [ '$http', function($http) {

      this.notes = [];

      var self = this;
      $http.get('/notes')
          .success(function(data) {
            self.notes = data;
          });
    }]);