var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
	let commaSep = val.split(',');
    commaSep.forEach(val => {
    	if(val !== '') args.push(+val);
    });
});

var avg = function(...args) {
	return args.reduce((accumulator, el) => accumulator += el) / args.length;
}

console.log(avg(...args));