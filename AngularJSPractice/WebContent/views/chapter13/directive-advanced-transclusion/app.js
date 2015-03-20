/**
 *	app.js 
 */

angular.module('stockApp', [])
	.controller('MainCtrl', [function(){
		var self = this;
		
		self.stocks = [
            {name: 'First Stock', price: 100, previous: 220},
            {name: 'Second Stock', price: 180, previous: 120},
            {name: 'Third Stock', price: 250, previous: 210},
            {name: 'Fourth Stock', price: 165, previous: 190},
            {name: 'Fifth Stock', price: 320, previous: 270}
	    ];
	}]);