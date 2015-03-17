/**
 *	app.js 
 */

angular.module('fifaApp', ['ngRoute'])
	.config(function($routeProvider){
		
		$routeProvider.when('/', {
			templateUrl: "/views/team_list.html",
			controller: 'TeamListCtrl as teamListCtrl'
		})
		.when('/login', {
			templateUrl: "views/team_details.html",
			controller: "TeamDetailsCtrl as teamDetailsCtrl",
			resolve: {
				auth: ['$q', '$location', 'UserService', 
				       function($q, $location, UserService){
					return UserService.session().then(
							function(success){},
							function(error){
								$location.path('/login');
								$location.replace();
								return $q.reject(error);
							});
				}]
			}
		});
		$routeProvider.otherwise({
			redirectTo: '/'
		});
	});