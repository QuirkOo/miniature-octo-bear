
angular
    .module('NoteApp')
    .controller('NoteListCtrl', [ 'notes', function(notes) {

      notes.list(function(data) {
        this.notes = data || [];
      });

    }]);