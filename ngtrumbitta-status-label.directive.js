angular.module('ngtrumbitta.directives.statuslabel', [])

.directive('ngtrumbittaStatusLabel', function() {
  'use strict';
  return {
    restrict: 'E',
    replace: 'true',
    templateUrl: 'ngtrumbitta-status-label.template.html',
    scope: {
      statusCollection: '&',
      status: '@'
    },
    link: function(scope) {
      var statusKey = scope.status;
      var statusCollection = scope.statusCollection();
      var status = statusCollection[statusKey];

      scope.cssClasses = status.cssClasses;
      scope.iconClasses = status.iconClasses;
      scope.text = status.text;
    }
  };
});
