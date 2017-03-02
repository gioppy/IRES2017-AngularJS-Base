(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .controller('ResistanceController', ResistanceController);

  function ResistanceController(){
    this.calculate = calculate;

    function calculate(){
      console.log(this.resValue);
      var strValue=this.resValue.toString();

      var char1=strValue[0];      // prima cifra resistenza
      var char2=strValue[1];      // seconda cifra
      var mult=strValue.length-2; // moltiplicatore

      var colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

      this.resColors = [
        colors[parseInt(char1)],
        colors[parseInt(char2)],
        colors[mult]
      ];

    }
  }
})();