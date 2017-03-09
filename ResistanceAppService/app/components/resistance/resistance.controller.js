(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .controller('ResistanceController', ResistanceController);

  ResistanceController.$inject = ['ResistanceFactory'];

  function ResistanceController(ResistanceFactory){
    this.calculate = calculate;

    function calculate(){
      var strValue = this.resValue.toString();

      this.resColors = ResistanceFactory.calculateColors(strValue);
    }
  }
})();