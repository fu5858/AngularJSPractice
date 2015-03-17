/**
 * 	services.js
 */

angular.module('fifaApp')
	.factory('FifaService', ['$http', function($http){
		return {
			getTeams: function(){
				return $http.get('/api/team');
			},
			
			getTeamDetails: function(code){
				return $http.get('/api/team/' + code);
			}
		};
	}])
	.factory('UserService', ['$http', function($http){
		var service = {
				isLoggedIn: false,
				
				session: function(){
					return $http.get('/api/session')
						.then(function(resp){
							service.isLoggedIn = true;
							return resp;
						});
				},
				
				login: function(user){
					return $http.post('/api/login' + user)
						.then(function(resp){
							service.isLoggedIn = true;
							return resp;
						});
				}
		};
		return service;
	}]);
	