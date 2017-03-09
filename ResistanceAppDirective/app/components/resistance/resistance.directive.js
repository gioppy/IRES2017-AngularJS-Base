(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .directive('resistanceCalculator', ResistanceCalculator);

  function ResistanceCalculator(){
    /*function ResistanceCalculatorController(RS){
      this.calculate = calculate;

      function calculate(){
        var strValue = this.resValue.toString();

        this.resColors = RS.calculateColors(strValue);
      }
    }

    ResistanceCalculatorController.$inject = ['ResistanceService'];*/

    return {
      restrict: 'EA',
      templateUrl: 'app/components/resistance/resistance.tpl.html'
      /*controller: ResistanceCalculatorController,
      controllerAs: 'ctrl'*/
    };
  }
})();