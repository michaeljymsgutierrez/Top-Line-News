// State configuration

app.config(function($locationProvider, $routeProvider){

	$locationProvider.hashPrefix('');

	$routeProvider
	.when('/',{
		controller: 'mainCtrl',
		templateUrl: './template/home.html',
		cache: true
	})
	.when('/profile',{
		controller: 'mainCtrl',
		templateUrl: './template/profile.html',
		cache: true
	});

	$routeProvider.otherwise({ redirectTo: '/' });

});