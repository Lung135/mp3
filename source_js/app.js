var app = angular.module('mp3',['ngRoute', 'imdbControllers']);

app.config(function ($routeProvider) {
		
		$routeProvider
		//list route
        .when('/index', {
            templateUrl : './partials/list.html',
            controller  : 'listController',
            controllerAs: 'lc'
        })
		//gallery route
        .when('/gallery', {
            templateUrl : './partials/gallery.html',
            controller  : 'galleryController',
        })
        //details route
        .when('/details/:rank', {
            templateUrl : './partials/details.html',
            controller  : 'detailsController',
        })

        .otherwise({
        	redirectTo: '/index'
        });
})
