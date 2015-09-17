 var myapp = angular.module('myapp', ["ui.router"]);
    myapp.config(function($stateProvider, $urlRouterProvider){
      
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "home.html"
      });

    });