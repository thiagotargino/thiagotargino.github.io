(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
