(function(){
  'use strict';

  angular
    .module('QueueApp')
    .component('display', {
      bindings: {
        current: '<'
      },
      templateUrl: 'app/components/display/display.tpl.html'
    });
})();