(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .controller('ResistanceController', ResistanceController);

  ResistanceController.$inject = ['ResistanceService'];

  function ResistanceController(ResistanceService){
    this.calculate = calculate;

    function calculate(){
      var strValue = this.resValue.toString();

      this.resColors = ResistanceService.calculateColors(strValue);
    }
  }
})();