/**
 *	directive.js 
 */

angular.module('stockApp')
	.directive('stockWidget', [function(){
		return {
			templateUrl: "stock.html",
			restrict: "AE"
		};
	}]);