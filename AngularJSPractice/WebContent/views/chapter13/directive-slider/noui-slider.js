/**
 * 	noui-slider.js
 */
angular.module('sliderApp')
	.directive('noUiSlider', [function() {
		return {
			restrict: "E",
			require: "ngModel",
			link: function($scope, $element, $attr, ngModelCtrl){
				
				$element.noUiSlider({
					start: 0,
					range: {
						min: Number($attr.rangeMin),
						max: Number($attr.rangeMax)
					}
				});
				
				ngModelCtrl.$render = function(){
					$element.val(ngModelCtrl.$viewValue);
				};
				
				$element.on('set', function(args){
					
					$scope.$apply(function(){
						ngModelCtrl.$setViewValue($emelent.val());
					});
				});
			}
		};
	}]);
