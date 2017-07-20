function isSmaller(a, b){
	return a < b;
}

console.log(isSmaller(5,-1));
console.log(isSmaller(-7,-1));

//  reusing isBigger function

function isBigger(a, b){
	return a > b;
}

function isSmaller(a, b){
	return !isBigger(a,b);
}

console.log(isSmaller(5,-1));
console.log(isSmaller(-7,-1));