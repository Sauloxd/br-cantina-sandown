angular.module('myapp').controller('MinhaCasaController', function ($scope) {
  $scope.backgroundImg = ' "../resources/mc/bkg-minha-casa.png"';
  $scope.name = 'Minha casa';

  $scope.indexPage = "minha-casa"
  $scope.info = 'mc-info';
  $scope.gallery = 'mc-gallery';
  $scope.extras = 'mc-extras';


  $scope.headImage = '/resources/mc/prj-mc-head.png';
  $scope.images = [
  {'path': '/resources/mc/prj-mc-1.png',
   'description': 'Descrição 1'},
  {'path': '/resources/mc/prj-mc-2.png',
   'description': 'Descrição 2'},
  {'path': '/resources/mc/prj-mc-3.png',
   'description': 'Descrição 3'},
  {'path': '/resources/mc/prj-mc-4.png',
   'description': 'Descrição 4'},
  {'path': '/resources/mc/prj-mc-5.png',
   'description': 'Descrição 5'}
  ];

  $scope.infoDetails = [
  {'paragraph' : 'Fiz parte da equipe de arte da Minha Casa, editora Caras.'},
  {'paragraph' : 'Trata-se de uma revista de decoração e ideias criativas com baixo custo. '},
  {'paragraph' : 'Minha função era produzir e diagramar layouts no InDesign, além de acompanhar as demais matérias.'}
  ];

});









