Function.prototype.bindMe = function(context) {
	var thisF = this;
	return function() {
		return thisF.apply(context, arguments);
	}
}