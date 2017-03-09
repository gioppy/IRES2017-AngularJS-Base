(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .directive('resistanceColor', ResistanceColor);

  function ResistanceColor(){

    return {
      restrict: 'E',
      templateUrl: 'app/components/resistance-color/resistanceColor.tpl.html',
      scope: {
        resColor: '@'
      }
    };
  }
})();