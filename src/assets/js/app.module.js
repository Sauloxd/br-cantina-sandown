console.log('entrou no js');

 var myapp = angular.module('myapp', ["ui.router"]);
    myapp.config(
        function($stateProvider, $urlRouterProvider){
    console.log('carregou as rotas');      
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "html/home.html"
      })
       .state('projects', {
        url: "/projects",
        templateUrl: "html/projects.html"
      })
      .state('about', {
        url: "/about",
        templateUrl: "html/about.html"
      })
;

    });