function forEach(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		fn(arr[i]);
	}
}

function getTransformedArray(arr, fn) {
	var res = [];
	forEach(arr, function(el) {
		res.push(fn(el));
	});
	return res;
}

console.log("Task 2:");
function increment(num){ return num + 1 } 
console.log(getTransformedArray( [1, 7, 20], increment));
