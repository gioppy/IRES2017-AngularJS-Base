(function(){
  'use strict';

  angular
    .module('QueueApp')
    .service('QueuesService', QueuesService);

  QueuesService.$inject = ['filterFilter'];

  function QueuesService(filterFilter){
    var queues = [
      {
        operator: 1,
        currentNumber: 0,
        totalNumbers: 99,
        dispatchedNumbers: 0,
        description: 'Donec ullamcorper nulla non metus auctor fringilla.'
      },
      {
        operator: 2,
        currentNumber: 0,
        totalNumbers: 5,
        dispatchedNumbers: 10,
        description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
      },
      {
        operator: 4,
        currentNumber: 5,
        totalNumbers: 99,
        dispatchedNumbers: 1,
        description: 'Donec id elit non mi porta gravida at eget metus.'
      }
    ];
    var current = queues[0];

    this.getQueues = getQueues;
    this.getCurrent = getCurrent;
    this.setCurrent = setCurrent;
    this.getOperatorQueues = getOperatorQueues;
    this.newQueue = newQueue;
    this.editQueue = editQueue;
    this.deleteQueue = deleteQueue;

    function getQueues(){
      return queues;
    }

    function getCurrent(){
      return current;
    }

    function setCurrent(queue){
      current = queue;
    }

    function getOperatorQueues(id){
      return filterFilter(this.getQueues(), {operator: id});
    }

    function newQueue(queue){
      return queues.push(queue);
    }

    function editQueue(queue, newValues){
      angular.merge(queue, newValues);
    }

    function deleteQueue(queue){
      if(queues.indexOf(queue) !== -1){
        var index = queues.indexOf(queue);
        queues.splice(index, 1);
      }
    }
  }
})();