function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function User(name) {
		this.name = name;
		this.lastVisitDate = randomDate(new Date(2017, 7, 1), new Date());
		this.globalDiscount = randomNumber(1, 10);
		this.nightDiscount = randomNumber(15, 20);
		this.weekendDiscount = randomNumber(10, 20);
		this.ordersCount = randomNumber(1, 10);
		this.ordersTotalPrice = randomNumber(100, 10000);
		this.bonus = randomNumber(1, 100);
}

function DiscountDecorator(user) {
	for (var key in user) {
		this[key] = user[key];
	}
	this.getDiscount = function() {
		var totalDiscount = this.globalDiscount;
		var currentDate = new Date();
		if ((currentDate.getHours() >= 23) && (currentDate.getHours() <= 5)) {
			totalDiscount += this.nightDiscount;
		}
		if ((currentDate.getDay() === 0) || (currentDate.getDay() === 6)) {
			totalDiscount += this.weekendDiscount;
		}
		return totalDiscount;
	}
}

function BonusDecorator(user) {
	for (var key in user) {
		this[key] = user[key];
	}
	this.getBonus = function() {
		var currentDate = new Date();
		var hoursFromLastVisit = ((currentDate.getTime() - this.lastVisitDate.getTime()) / 1000 / 60 / 60);
		if (hoursFromLastVisit <= 240) {
			this.bonus += parseInt(240 - hoursFromLastVisit);
		}
		this.bonus += this.ordersCount;
		return this.bonus;
	}
}

// ---------- invocation example ----------
(function() {
	var user1 = new BonusDecorator(new DiscountDecorator(new User('Khrystyna')));
	var user2 = new DiscountDecorator(new BonusDecorator(new User('Mary')));
	console.log(`${user1.name}:
		got discount = ${user1.getDiscount()}
		got bonus = ${user1.getBonus()}`);
	console.log(`${user2.name}:
		got discount = ${user2.getDiscount()}
		got bonus = ${user2.getBonus()}`);
})();