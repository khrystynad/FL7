var inputs = process.argv.slice(2);
var result = inputs.map(el => el[0].toUpperCase()).reduce((accumulator, el) => accumulator += el);
console.log(result);