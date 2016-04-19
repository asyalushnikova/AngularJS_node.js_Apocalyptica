'use strict';

angular.module('Apocalyptica.albums', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider
                        .when('/albums', {
                            templateUrl: 'albums/albums.html',
                            controller: 'AlbumsCtrl'
                        })
                        .when('/albums/:albumId', {
                            templateUrl: 'albums/album-details.html',
                            controller: 'AlbumDtlsCtrl'
                        });
            }])

        .controller('AlbumsCtrl', ["$http", "$scope", function($http, $scope) {
                $http.get("json/albums.json").success(function(data) {
                    $scope.albums = data;
                });
            }])

        .controller('AlbumDtlsCtrl', ["$http", "$scope", "$routeParams", "$filter", function ($http, $scope, $routeParams, $filter) {
                var albumId = $routeParams.albumId;
                $http.get("json/albums.json").success(function(data) {
                    $scope.album = $filter("filter")(data, function(_data) {
                       return _data.id == albumId;
                    })[0];
                    $scope.mainImage = $scope.album.image[0].name; 
                });
                $scope.setImage = function(image){
                    $scope.mainImage = image.name;
                }
            }]);
