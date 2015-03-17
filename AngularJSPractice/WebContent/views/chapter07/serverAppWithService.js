/**
 *	serverAppWithService.js 
 */

angular.module('serverApp2', [])
	.controller('MainCtrl', ['NoteService', function(NoteService){
		var self = this;
		
		self.items=[];
		self.errorMessage='';
		
		NoteService.query().then(function(resp){
			self.items = resp.data;
		}, function(errResp){
			self.errorMessage = errResp.data.msg;
		});
	}])
	.factory('NoteService', ['$http', function($http){
		return {
			query: function(){
				return $http.get('/api/note');
			}
		};
	}]);