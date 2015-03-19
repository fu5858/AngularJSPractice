/**
 * 	stockDirectiveBehaviorSpec.js
 */

describe("Stock Widget Directive Behavior", function() {
	beforeEach(module('stockApp'));
	
	var compile, mockBackend, rootScope;
	
	beforeEach(inject(function($compile, $httpBackend, $rootScope){
		compile = $compile;
		mockBackend = $httpBackend;
		rootScope = $rootScope;
	}));
	
	it("Should have functions and data on scope correctly", function(){
		
		var scope = rootScope.$new();
		var scopeClickCalled = '';
		scope.myStock = {
				name: 'Best Stock',
				price: 900,
				previous: 750
		};
		
		scope.title = 'the Best';
		scope.userClick = function(stockPrice, stockPrevious, stockName){
			scopeClickCalled = stockPrice + ';' + stockPrevious + ';' + stockName;
		};
		
		mockBackend.expectGET('stock.html').respond(
				'<div ng-bind="stockTitle"></div>' +
				'<div ng-bind="stockData.price"></div>');
		
		var element = compile(
				'<div stock-widget' +
				' stock-data="myStock"' +
				' stock-title="This is {{title}}"' +
				' when-select="userClick(stockPrice, ' +
				'stockPrevious, stockName)">' +
				'</div>'
				)(scope);
		
		scope.$digest();
		mockBackend.flush();
		
		var compiledEmementScope = element.isolateScope();
		
		expect(compiledEmementScope.stockData).toEqual(scope.myStock);
		expect(compiledEmementScope.getChange(compiledEmementScope.stockData)).toEqual(20);
		
		expect(scopeClickCalled).toEqual('');
		compiledEmementScope.onSelect();
		
		expect(scopeClickCalled).toEqual('900;750;Best Stock');
	});
});