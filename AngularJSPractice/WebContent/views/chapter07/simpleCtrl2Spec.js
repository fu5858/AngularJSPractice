/**
 *	simpleCtrl2Spec.js 
 */

describe('SimpleCtrl2', function() {
	beforeEach(module('simpleCtrl2App'));
	
	var ctrl, $loc;
	
	beforeEach(inject(function($controller, $location){
		ctrl = $controller('SimpleCtrl2');
		$loc = $location;
	}));
	
	it('Should navigate away from the current page', function(){
		expect($loc.path()).toEqual('');
		
		$loc.path('/here');
		
		console.log('Path before passing navigate1() ==> ' + $loc.path());
		ctrl.navigate1();
		console.log('Path after passing navigate1() ==> ' + $loc.path());
		expect($loc.path()).toEqual('/some/where');
	});

	it('Should navigate away from the current page', function(){
		expect($loc.path()).toEqual('');
		
		$loc.path('/there');
		ctrl.navigate2();
		expect($loc.path()).toEqual('/some/where/else');
	});
});
