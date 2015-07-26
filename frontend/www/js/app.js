// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module("kmpg", ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.register', {
      cache: false,
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html'
        }
      }
  })

  .state('app.begin', {
      cache: false,
      url: '/begin',
      views: {
        'menuContent': {
          templateUrl: 'templates/begin.html'
        }
      }
  })  

  .state('app.splashscreen', {
      cache: false,
      url: '/splashscreen',
      views: {
        'menuContent': {
          templateUrl: 'templates/splashscreen.html'
        }
      }
  })


  .state('app.explore', {
      url: '/explore',
      views: {
        'menuContent': {
          templateUrl: 'templates/explore.html'
        }
      }
  })
  .state('app.request', {
      cache: false,
      url: '/request',
      views: {
        'menuContent': {
          templateUrl: 'templates/request.html'
        }
      }
  })
  .state('app.offer', {
      cache: false,
      url: '/offer',
      views: {
        'menuContent': {
          templateUrl: 'templates/offer.html',
          controller: "OfferCtrl"
        }
      }
  })
  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
  })


  .state('app.test_oneMap', {
      url: '/test_oneMap',
      views: {
        'menuContent': {
          templateUrl: 'templates/test_oneMap.html'
        }
      }
  })


  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/splashscreen');
});
