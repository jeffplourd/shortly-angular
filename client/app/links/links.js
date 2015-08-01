angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function () {
    Links.getLinks()
      .success(function (data) {
        $scope.data.links = data;
      });
  };
  $scope.navToLink = function (code) {
    Links.navToLink(code).success(function () {
      console.log('Visited ' + code);
    });
  };
  $scope.getLinks();
});
