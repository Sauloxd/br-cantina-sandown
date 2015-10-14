var myapp = angular.module('myapp', ["ui.router"]);
    myapp.config(
        function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "html/home.html"
      })
      .state('contact', {
        url: "/contact",
        templateUrl: "html/contact.html"
      })
      .state('about', {
        url: "/about",
        templateUrl: "html/about.html"
      })
      .state('projects', {
        url: "/projects",
        templateUrl: "html/project/projects.html"
      })


      .state('mooca-nostra', {
        url: "/projects/mooca-nostra",
        controller: "MoocaNostraController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('mn-info', {
        url: "/projects/mooca-nostra/info",
        controller: "MoocaNostraController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('mn-gallery', {
        url: "/projects/mooca-nostra/gallery",
        controller: "MoocaNostraController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('mn-extras', {
        url: "/projects/mooca-nostra/extras",
        controller: "MoocaNostraController",
        templateUrl: "html/templates/projects-extras.html"
      })



      .state('minha-casa', {
        url: "/projects/minha-casa",
        controller: "MinhaCasaController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('mc-info', {
        url: "/projects/minha-casa/info",
        controller: "MinhaCasaController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('mc-gallery', {
        url: "/projects/minha-casa/gallery",
        controller: "MinhaCasaController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('mc-extras', {
        url: "/projects/minha-casa/extras",
        controller: "MinhaCasaController",
        templateUrl: "html/templates/projects-extras.html"
      })



      .state('redesign-dvd', {
        url: "/projects/redesign-dvd",
        controller: "RedesignController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('rd-info', {
        url: "/projects/redesign-dvd/info",
        controller: "RedesignController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('rd-gallery', {
        url: "/projects/redesign-dvd/gallery",
        controller: "RedesignController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('rd-extras', {
        url: "/projects/redesign-dvd/extras",
        controller: "RedesignController",
        templateUrl: "html/templates/projects-extras.html"
      })



    .state('hot-glasses', {
        url: "/projects/hot-glasses",
        controller: "HotGlassesController",
        templateUrl: "html/templates/projects-index.html"
      })
      .state('hg-info', {
        url: "/projects/hot-glasses/info",
        controller: "HotGlassesController",
        templateUrl: "html/templates/projects-info.html"
      })
      .state('hg-gallery', {
        url: "/projects/hot-glasses/gallery",
        controller: "HotGlassesController",
        templateUrl: "html/templates/projects-gallery.html"
      })
      .state('hg-extras', {
        url: "/projects/hot-glasses/extras",
        controller: "HotGlassesController",
        templateUrl: "html/templates/projects-extras.html"
      })
;

    });