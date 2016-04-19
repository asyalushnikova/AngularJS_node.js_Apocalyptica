'use strict';
 
angular.module('Apocalyptica', [
  'ngRoute',
  'Apocalyptica.albums'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/albums'});
}]);
