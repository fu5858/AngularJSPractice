/**
 *	stockDirectiveRenderSpec.js 
 */

describe("stock Widget Directive Rendering", function() {
	beforeEach(module('stockApp'));
	var compile, mockBackend, rootScope;

	// Step 1
	beforeEach(inject(function($compile, $httpBackend, $rootScope){
		compile = $compile;
		mockBackend = $httpBackend;
		rootScope = $rootScope;
	}));
	
	it("Should render HTML based on scope correctly", function(){
		// Step 2
		var scope = rootScope.$new();
		scope.myStock = {
				name: 'Best Stock',
				price: 900,
				previous: 680
		};
		scope.title = 'The Best';
		
		// Step 3
		mockBackend.expectGET('stock.html').respond(
				'<div ng-bind="stockTitle"></div>' +
				'<div ng-bind="stockData.price"></div>');

		// Step 4
		var element = compile('<div stock-widget ' +
				'stock-data="myStock"' +
				'stock-title="This is {{title}}"></div>')(scope);

		// Step 5
		scope.$digest();
		mockBackend.flush();
		
		// Step 6
		expect(element.html()).toEqual(
				'<div class="ng-binding" ng-bind="stockTitle">This is The Best</div>' +
				'<div class="ng-binding" ng-bind="stockData.price">900</div>');
	});
});
