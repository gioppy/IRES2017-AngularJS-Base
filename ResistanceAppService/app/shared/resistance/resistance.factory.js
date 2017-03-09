(function(){
  'use strict';

  angular
    .module('ResistanceApp')
    .service('ResistanceFactory', ResistanceFactory);

  function ResistanceFactory(){
    var colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

    var service = {
      getColors: getColors,
      calculateColors: calculateColors
    };

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

    return service;
  }
})();