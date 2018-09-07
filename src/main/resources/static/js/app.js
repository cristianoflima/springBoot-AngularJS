var app = angular.module('app', ['ngRoute','angularCSS'])

.config(function config($locationProvider, $routeProvider) {
	
			$locationProvider.html5Mode(true);
			
			$routeProvider
			.when("/", {
				templateUrl: 'static/views/home.html',
				controller: "homeController",
				css: 'static/css/main.css'
			})
			.when("/fp", {
				templateUrl: 'static/views/firstPage.html',
				controller: "firstPageController"
			})
			.otherwise("/");
		}

);
