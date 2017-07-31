function compose() {
	return Array.prototype.reduceRight.call(arguments, function(previousFunc, currentFunc) {
		return function() {
			return currentFunc(previousFunc.apply(null, arguments));
		}
	});
}

module.exports = compose;
