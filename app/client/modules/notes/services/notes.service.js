
angular
    .module('NoteApp')
    .factory('notes', [ '$http', function($http) {

      return {
        add: function(title, text) {
          $http.post('/notes', {
            title: title,
            text: text
          });
        },
        list: function(callback) {
          $http.get('/notes').success(callback);
        },
        get: function(id, callback) {
          $http.get('/notes/' + id).success(callback);
        }
      };
    }]);