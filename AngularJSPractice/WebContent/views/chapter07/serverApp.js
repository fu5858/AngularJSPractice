/**
 * 	serverApp.js
 */
 angular.module('serverApp', [])
 	.controller('MainCtrl', ['$http', function($http){
 		var self = this;
 		
 		self.items = [];
 		self.errorMessage='';
 		
 		$http.get('/api/note').then(function(response){
 			self.items=response.data;
 		}, function(errorResponse){
 			self.errorMessage = errorResponse.data.msg;
 		});
 		
 	}]);