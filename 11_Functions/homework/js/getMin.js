function getMin() {
	var smallest = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		if (smallest > arguments[i]) {
			smallest = arguments[i];
		}
	}
	return smallest;
}

console.log(getMin(1,-3,3,-9,10,11,-25));