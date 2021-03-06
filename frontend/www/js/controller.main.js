angular.module('starter.controllers')

.controller('MainCtrl', function($scope,$http, $ionicModal, $state,$ionicViewService, $timeout, $window) {
  $scope.user = $scope.user ||{};       $scope.user.phone = "91787437";
  $scope.data = $scope.data ||{};
  $scope.newReq = $scope.newReq ||{};
  $scope.newOffer = $scope.newOffer ||{};
  $scope.goToState = function(stateName, enableBack){
    if(typeof enableBack == 'undefined'){
      enableBack = true;
    }
    $state.go(stateName);
    if(!enableBack){
      $ionicViewService.nextViewOptions({
          disableBack: true
      });
    }
  }
  $scope.scrollTop = function(){
    $window.scrollTo(0,0);
    // document.getElementsByTagName("ion-content")[0].scrollTop = 0;
  }
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.testData = $scope.testData ||{};
  $scope.testData.offers = [
    new Offer('ride',1,2,3,4, 'John',12345678,'Jurong')
    // new Offer('ride',5,6,7,8, 'Jane',12345678,'Bishan')
  ];
  function Offer(){
    var attrList = "entryType, startLat,startLon, endLat,endLon, firstName,phone,neighborhood".split(','); //zipCode //lastName
    for(var i=0; i<arguments.length; ++i){
      this[attrList[i].trim()] = arguments[i];
    }
    return this;
  }


  $scope.data.offers = $scope.testData.offers;


  $scope.getOffers = function(){
    $http.get('http://mediscope.moxware.com/'+'getall/', {}
    ).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(data, status, headers, config);
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(data, status, headers, config);
    });
  };
$scope.getOffers();

});

