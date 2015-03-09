
angular
    .module('NoteApp')
    .filter('markdown', [ 'marked', function(marked) {
        return function(input) {
          return marked(input);
        };
    }]);