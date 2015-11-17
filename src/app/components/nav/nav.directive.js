(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .directive('acmeNav', acmeNav);

  /** @ngInject */
  function acmeNav() {
    var directive = {
      templateUrl: 'app/components/nav/nav.html'
    };

    return directive;
  }

})();
