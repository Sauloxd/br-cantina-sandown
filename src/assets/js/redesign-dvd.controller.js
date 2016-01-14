angular.module('myapp').controller('RedesignController', function ($scope) {
  $scope.backgroundImg = ' "../resources/rd/bkg-redesign-dvd.png"';
  $scope.name = 'Redesign DVD';

  $scope.indexPage = "redesign-dvd"
  $scope.info = 'rd-info';
  $scope.gallery = 'rd-gallery';
  $scope.extras = 'rd-extras';


  $scope.headImage = '/resources/rd/prj-rd-head.png';
  $scope.images = [
  {'path': '/resources/rd/prj-rd-1.png',
   'description': 'Descrição 1'},
  {'path': '/resources/rd/prj-rd-2.png',
   'description': 'Descrição 2'},
  {'path': '/resources/rd/prj-rd-3.png',
   'description': 'Descrição 3'},
  {'path': '/resources/rd/prj-rd-4.png',
   'description': 'Descrição 4'},
  {'path': '/resources/rd/prj-rd-5.png',
   'description': 'Descrição 5'},
  {'path': '/resources/rd/prj-rd-6.png',
   'description': 'Descrição 6'},
  {'path': '/resources/rd/prj-rd-7.png',
 'description': 'Descrição 7'}
  ];

  $scope.infoDetails = [
  {'paragraph' : 'Trabalho acadêmico realizado em grupo, com Kalinka Lopes e Samantha Oda. '},
  {'paragraph' : 'A proposta era desmontar um equipamento eletrônico e remontá-lo modificando sua aparência exterior, mas sem danificar o funcionamento dos componentes internos.'},
  {'paragraph' : 'Escolhemos o aparelho de DVD 615, da Philips.'}
  ];

});









