var fibonacci = (function() {
	var results = {};
	return function f(n) {
		if (n in results) {
			return results[n];
		} else {
			if (n === 0 || n === 1) {
				return n;
			} else {
				return results[n] = f(n - 1) + f(n - 2);
			}
		}
	}
})();

module.exports = fibonacci;