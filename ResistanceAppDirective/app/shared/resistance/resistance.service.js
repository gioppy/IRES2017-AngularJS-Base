(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .service('ResistanceService', ResistanceService);

  function ResistanceService(){
    var colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

    this.getColors = getColors;
    this.calculateColors = calculateColors;

    function getColors(){
      return colors;
    }

    function calculateColors(value){
      var char1=value[0];      // prima cifra resistenza
      var char2=value[1];      // seconda cifra
      var mult=value.length-2; // moltiplicatore

      return [
        colors[parseInt(char1)],
        colors[parseInt(char2)],
        colors[mult]
      ];
    }
  }
})();