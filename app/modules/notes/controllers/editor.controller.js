
angular.module('NoteApp')
    .controller('EditorController', [ '$scope', function($scope) {

      $scope.aceLoaded = function(editor) {
        // console.log('Ace loaded');
        editor.getSession().setMode('ace/mode/markdown');

        // focus the ace editor
        editor.focus();
        var session = editor.getSession();
        var count = session.getLength();
        //Go to end of the last line
        editor.gotoLine(count, session.getLine(count-1).length);
      };

      $scope.text = '';

    }]);

