var votes = ["angular","angular","react","react","react","angular","ember","react","vanilla"];

var vote = function(arr) {
	var resObj = {};
	for (var i = 0; i < arr.length; i++){
		if (resObj.hasOwnProperty(arr[i])) {
			resObj[arr[i]]++;
		} else {
			resObj[arr[i]] = 1;
		}
	}
	return resObj;
}

var result = vote(votes);

for (var prop in result) {
	console.log(prop + " = " + result[prop]);
}