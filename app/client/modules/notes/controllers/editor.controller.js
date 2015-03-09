
angular
    .module('NoteApp')
    .controller('EditorCtrl', [ 'notes', function(notes) {

      this.title = 'Untitled';
      this.text = '';

      this.save = function() {
        notes.add(this.title, this.text);
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

    }]);

