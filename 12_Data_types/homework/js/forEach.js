function forEach(arr, fn) {
	for (var i = 0; i < arr.length; i++) {
		fn(arr[i]);
	}
}

console.log("Task 1:");
forEach([3, 5, 2], function(el) {
	console.log(el);
})