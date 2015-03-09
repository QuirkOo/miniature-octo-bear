
angular
    .module('NoteApp')
    .controller('EditorCtrl', [ '$http', function($http) {
      var self = this;

      this.save = function() {
        $http.post('/notes', {
          title: 'Untitled',
          text: self.text
        });
      };

      this.aceLoaded = function(editor) {
        // console.log('Ace loaded');
        editor.getSession().setMode('ace/mode/markdown');

        // focus the ace editor
        editor.focus();
        var session = editor.getSession();
        var count = session.getLength();
        //Go to end of the last line
        editor.gotoLine(count, session.getLine(count-1).length);
      };

      this.text = '';

    }]);

