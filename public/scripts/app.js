(function() {
  var app = angular.module('webPortfolio', []);

  app.controller('PortfolioController', function($scope, SitesService) {
    $scope.sites = SitesService.getSites();
  });

  app.factory('SitesService', function() {

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

    //method (function on object property)
    return {
      getSites: function(){
        return sites;
      },
      addSite: function(site){
        sites.push(site);
      }
    };

  });

  app.controller('SiteController', function($scope, SitesService) {
    $scope.site = {};
    console.log(SitesService);

    $scope.createSite = function(site) {
      SitesService.addSite(site);
      console.log(site);
    };

  });



})();