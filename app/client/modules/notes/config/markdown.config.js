
angular
    .module('NoteApp')
    .config(['markedProvider', function(markedProvider) {
      markedProvider.setOptions({
        gfm: true,          // Github Flavored Markdown
        tables: true,       // Github style tables
        breaks: true,       // Line breaks without 2 spaces
        sanitize: false,    // Allow custom HTML
        smartLists: true,
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        }
      });
    }]);