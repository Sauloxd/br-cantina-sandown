angular.module('myapp').controller('MoocaNostraController', function ($scope) {
  $scope.backgroundImg = ' "../resources/mn/bkg-mooca-nostra.png"';
  $scope.name = 'Mooca Nostra';

  $scope.indexPage = "mooca-nostra"
  $scope.info = 'mn-info';
  $scope.gallery = 'mn-gallery';
  $scope.extras = 'mn-extras';


  $scope.headImage = '/resources/mn/prj-mooca-head.png';
  $scope.images = [
  {'path': '/resources/mn/prj-mooca-1.png',
   'description': 'Descrição 1'},
  {'path': '/resources/mn/prj-mooca-2.png',
   'description': 'Descrição 2'},
  {'path': '/resources/mn/prj-mooca-3.png',
   'description': 'Descrição 3'},
  {'path': '/resources/mn/prj-mooca-4.png',
   'description': 'Descrição 4'},
  {'path': '/resources/mn/prj-mooca-5.png',
   'description': 'Descrição 5'},
  {'path': '/resources/mn/prj-mooca-6.png',
   'description': 'Descrição 6'}
  ];

  $scope.infoDetails = [
  {'paragraph' : 'Trabalho de Graduação Interdisciplinar realizado em grupo, com Kalinka Lopes e Samantha Oda.'},
  {'paragraph' : 'Escolhemos o bairro da Mooca para desenvolver nosso trabalho, que sanaria os principais problemas vistos pelos moradores'},
  {'paragraph' : 'Falta de áreas verdes e de lazer. E nossa solução para essas dificuldades foi projetar um parklet (extensão temporária da calçada)'}
  ];

});









