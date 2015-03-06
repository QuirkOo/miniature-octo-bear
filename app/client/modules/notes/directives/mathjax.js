
angular.module('NoteApp')
    .directive('mathjax', [ '$timeout', function($timeout) {
      return {
        link: function($scope, $element, $attrs) {
          var timeout;

          var updatePreview = function() {
            MathJax.Hub.Queue([ 'Typeset', MathJax.Hub, $element[0] ]);
          };

          $scope.$watch($attrs.mathjax, function(value) {
            $timeout.cancel(timeout);
            timeout = $timeout(updatePreview, 3000);
          });
        }
      };

      /*return {
        restrict: 'A',
        controller: ['$scope', '$element', '$attrs',
          function($scope, $element, $attrs) {

            $scope.$watch($attrs.mathjax, function(texExpression) {

              //$element.html(texExpression);
              MathJax.Hub.Queue(['Typeset', MathJax.Hub, $element[0]]);
            });
          }]
      };*/
    }]);