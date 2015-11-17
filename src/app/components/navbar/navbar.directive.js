(function() {
  'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;
  }

})();
