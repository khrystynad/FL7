function getClosestToZero() {
	var closest = arguments[0];
	for ( var i = 1; i < arguments.length; i++) {
		if ( Math.abs(closest) > Math.abs(arguments[i])) {
			closest = arguments[i];
		}
	}
	return closest;
}

console.log(getClosestToZero(9, 5, -4, -9));