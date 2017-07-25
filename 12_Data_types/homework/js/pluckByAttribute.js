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

function pluckByAttribute(obfArray, label) {
	return getTransformedArray(obfArray, function(obj){
		return obj[label];
	})
}

var presidents = [
	{ name: "George", surname: "Kush" },
	{ name: "Barako", surname: "Obaame" }
];

console.log("Task 3:");
console.log(pluckByAttribute( presidents, "name" ));





