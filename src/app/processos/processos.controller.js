(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .controller('ProcessosController', MainController);

  /** @ngInject */
  function ProcessosController($log, $http) {
    var apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';

    var service = {
      apiHost: apiHost,
      getContributors: getContributors
    };

    return service;

    function getProcessos() {

      return $http.get('processos.json')
        .then(getProcessosComplete)
        .catch(getProcessosFailed);

      function getProcessosComplete(response) {
        return response.data;
      }

      function getProcessosFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
