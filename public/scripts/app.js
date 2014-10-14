(function() {
  var app = angular.module('webPortfolio', []);

  app.controller('PortfolioController', function($scope) {
    $scope.sites = sites;
  });

  app.factory('SitesService', function() {
    //function
    function test1() {
      console.log("test1");
    }
    //method (function on object property)
    return {
      test2: function() {
        test1();
        console.log("test2");
      }

    };

  });

  app.controller('SiteController', function($scope, SitesService) {
    $scope.site = {};
    console.log(SitesService);
    SitesService.test2();

    $scope.addSite = function() {
      sites.push($scope.site);
      $scope.site = {};
    };
  });

var sites = [{
        name: 'Travels',
        description: "Places I've visited around the world.",
        url: 'http://peterander.github.io/travels/index.html'
      }, {
        name: 'Music',
        description: "A site about my three instruments.",
        url: 'http://peterander.github.io/music/index.html'
      }, {
        name: 'Art',
        description: "Black and white Sharpee drawings.",
        url: 'http://peterander.github.io/art/index.html'
      }];

})();