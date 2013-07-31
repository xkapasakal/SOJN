window.onload = function (event){
	var values = [ 213, 16, 2058, 54, 10, 1965, 57, 9 ];
	var sortedValues = values.sort(function(value1, value2){return value1 - value2});
	console.log(sortedValues);
	
};

function isNimble(){ return true; }

