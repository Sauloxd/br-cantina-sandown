angular.module('myapp').controller('HotGlassesController', function ($scope) {
  $scope.backgroundImg = ' "../resources/hg/bkg-hotglasses.png"';
  $scope.name = 'Hot Glasses';

  $scope.indexPage = "hot-glasses"
  $scope.info = 'hg-info';
  $scope.gallery = 'hg-gallery';
  $scope.extras = 'hg-extras';


  $scope.headImage = '/resources/hg/prj-hg-head.png';
  $scope.images = [
  {'path': '/resources/hg/prj-hg-1.png',
   'description': 'Descrição 1'},
  {'path': '/resources/hg/prj-hg-2.png',
   'description': 'Descrição 2'},
  {'path': '/resources/hg/prj-hg-3.png',
   'description': 'Descrição 3'},
  {'path': '/resources/hg/prj-hg-4.png',
   'description': 'Descrição 4'},
  {'path': '/resources/hg/prj-hg-5.png',
   'description': 'Descrição 5'},
  {'path': '/resources/hg/prj-hg-6.png',
   'description': 'Descrição 6'}
  ];

  $scope.infoDetails = [
  {'paragraph' : 'Trabalho acadêmico.'},
  {'paragraph' : 'Óculos confeccionado manualmente em poliestireno, desde sua concepção no papel até o acabamento físico.'},
  {'paragraph' : 'Ele possui esse nome devido aos tons que o compõem: vermelho e laranja, além do neutro branco.'}
  ];

});









