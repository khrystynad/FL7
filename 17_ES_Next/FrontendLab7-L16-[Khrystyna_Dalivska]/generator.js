const max = +process.argv[2];

let FizzBuzz = function*() {
	let number = 1;
    while (number <= max) {
    	let value = number;
    	if (number % 3 === 0 && number % 5 === 0) {
    		value = "FizzBuzz";
    	} else if (number % 3 === 0) {
    		value = "Fizz";
    	} else if (number % 5 === 0) {
    		value = "Buzz";
    	}
    	number++;
    	yield value;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}