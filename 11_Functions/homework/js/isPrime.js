function isPrime(x) {
	if (isNaN(x) || (x <= 1)) {
		return false;
	}
	for (var i = 2; i < x; i++) {
		if (x % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrime(7));