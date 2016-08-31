angular.module("app", ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state('sleep',{
			url: "/sleep",
			templateUrl:"../../html/views/sleep/sleep.html"
		})
		.state('home', {
			url: "/home",
			templateUrl: "../html/views/home/home.html"
		})
		.state('relax',{
			url: "/relax",
			templateUrl: "../../html/views/relax/relax.html"
		})
		.state('focus',{
			url: "/focus",
			templateUrl: "../../html/views/focus/focus.html"
		});

});
