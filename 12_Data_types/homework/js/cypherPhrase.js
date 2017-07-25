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

function cypherPhrase(obj, str) {
	var res = getTransformedArray(str, function(el) {
		return (obj[el] || el);
	});
	return res.join('');
}

var charactersMap = {a: 'o', c: 'd', t: 'g'}
console.log("Task 4:");
console.log(cypherPhrase( charactersMap, 'kitty cat' ));