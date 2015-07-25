angular.module('starter.controllers')

.controller('MainCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.testData = $scope.testData ||{};
  $scope.testData.offers = [
    new Offer('ride',1,2,3,4, 'John',12345678,'Jurong'),
    new Offer('ride',5,6,7,8, 'Jane',12345678,'Bishan')
  ];
  function Offer(){
    var attrList = "entryType, startLat,startLon, endLat,endLon, firstName,phone,neighborhood".split(','); //zipCode //lastName
    for(var i=0; i<arguments.length; ++i){
      this[attrList[i].trim()] = arguments[i];
    }
    return this;
  }


  $scope.data = $scope.data ||{};
  $scope.data.offers = $scope.testData.offers;

});

