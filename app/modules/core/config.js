
var app = angular.module('NoteApp', [ 'ui.router', 'ngSanitize', 'ui.ace', 'hc.marked', 'luegg.directives' ]);

app.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
}]);
