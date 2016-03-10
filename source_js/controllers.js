var imdbControllers = angular.module('imdbControllers', []);

//controller for the list view and sorting
imdbControllers.controller('listController', ['$scope', '$http', function($scope, $http) {

		$scope.query = {};
		$scope.query.term = '';
		$scope.query.sortBy = 'rank';
		$scope.query.reverse = '';

	$http.get('./data/imdb250.json').success(function(data) {
		$scope.movieData = data;
	});

}]);

//controller for the gallery view
imdbControllers.controller('galleryController', ['$scope', '$http', function($scope, $http) {

	// var genres = {};

	$http.get('./data/imdb250.json').success(function(data) {

		$scope.movieData = data;
		
		// angular.forEach($scope.movieData, function(movie) {
		// 	for(var i=0; i<movie.genre.length; i++) {
		// 		genres[movie.genre[i]] = 1;
		// 	}
		// });

		// $scope.genres = Object.keys(genres);

	});

}]);

//details controller
imdbControllers.controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		
	$scope.currMovie;

	$http.get('./data/imdb250.json').success(function(data) {
		$scope.movieData = data;

		angular.forEach($scope.movieData, function(item) {
			if($routeParams.rank == item.rank) {
				$scope.currMovie = item;
				return;
			}
		});
	});
}]);