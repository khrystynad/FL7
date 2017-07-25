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

function getTopNRichestNames(n, objArray) {

	var convertedArr = objArray;
	convertedArr.map(convert);
	convertedArr.sort(compare);

	function convert(el) {
		if (typeof el.income === "string"){
			var str = el.income;
			var num = parseInt(str);
			str = str.replace(num, '');
			switch(str) {
				case "B": {
					el.income = num * 1e12;
					return el; 
				}
				case "M": {
					el.income = num * 1e9;
					return el; 
				}
				case "K": {
					el.income = num * 1e3;
					return el; 
				}
			}
		}
	}

	function compare (a, b) {
		return b.income - a.income;
	}

	return pluckByAttribute(convertedArr.slice(0, n), "name");;
}

var people = [
	{name: "Bara", income: "1B"},
	{name: "Dara", income: "5B"},
	{name: "Kara", income: "1M"},
	{name: "Zara", income: "2K"},
	{name: "Mary", income: "12M"}
];

console.log("Task 6:");
console.log(getTopNRichestNames(2, people));
console.log(getTopNRichestNames(100, people));
