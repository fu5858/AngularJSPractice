/**
 * 	timeAgoFilterSpec.js
 */

describe('timeAgo', function() {
	beforeEach(module('filtersApp'));
	
	var filter;
	
	beforeEach(inject(function(timeAgoFilter){
		filter = timeAgoFilter;
	}));
	
	it("Shold respond based on timestamp", function(){
		var currentTime = new Date().getTime();
		
		console.log('Before setting Currenttime ==> ' + currentTime);
		currentTime -= 10000;
		
		console.log('After setting Currenttime ==> ' + currentTime);
		
		expect(filter(currentTime)).toEqual('seconds ago');
		
		var fewMinutesAgo = currentTime - 1000 * 60;
		expect(filter(fewMinutesAgo)).toEqual('minutes ago');
		
		var fewHoursAgo = currentTime - 1000 * 60 * 68;
		expect(filter(fewHoursAgo)).toEqual('hours ago');
		
		var fewDaysAgo = currentTime - 1000 * 60 * 60 * 26;
		expect(filter(fewDaysAgo)).toEqual('days ago');
		
		var fewMonthsAgo = currentTime - 1000 * 60 * 60 * 24 * 32;
		console.log('#### Console Log ####');
		console.log(fewMonthsAgo);
		console.log(filter(fewMonthsAgo));
		
		expect(filter(fewMonthsAgo)).toEqual('months ago');
	});
});