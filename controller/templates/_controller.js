(function() {
  'use strict';
  
  angular
    .module('<%= moduleName %>')
    .controller('<%= controllerName %>', '<%= controllerName %>');
  
  <%= controllerName %>.$inject = ['dependencies'];
  
  /* @ngInject */
  function <%= controllerName %>(dependencies) {
    
    var vm = this;
    vm.title = 'Controller';
    activate();
    
    ///////FUNCIONES PRIVADAS/////////
    function activate() {
    }
  }
})();
