angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (obj) {
    Links.addLink(obj).success(function() {
      console.log('submitted form');
    });
  };
  
});
