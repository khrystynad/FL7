function assign() {
	var objResult = arguments[0];
	for ( var i = 1; i < arguments.length; i++) {
		for (var key in arguments[i]) {
			if (arguments[i].hasOwnProperty(key)){
				objResult[key] = arguments[i][key];
			}
		}
	}
	return objResult;
}

// ----------------------------------------------------------------------------------------------------- 

function setPrototype(Parent, Child) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Сharacter(obj) {
	this.name = obj.name;
	this.attack = obj.attack;
	this.hitpoints = obj.hitpoints;
	this.totalHitpoints = obj.hitpoints;
    // Indicates if the character is alive (hitpoints > 0)
	this.alive = true;
}

Сharacter.prototype.getHitpoints = function() {
	return this.hitpoints;
}

/**
     * Set hitpoints.
     * @param {newHitpoints} - newHitpoints should be a positive number value.
    							if newHitpoints is less than 0 or is not a number, hitpoints will be set 0.
*/
Сharacter.prototype.setHitpoints = function(newHitpoints){
	if (isNaN(newHitpoints) || newHitpoints < 0) {
		this.hitpoints = 0;
	} else {
		this.hitpoints = (newHitpoints > this.totalHitpoints) ? this.totalHitpoints : newHitpoints;
		this.isAlive();
	}
}

Сharacter.prototype.getTotalHitpoints = function() {
	return this.totalHitpoints;
}

Сharacter.prototype.setTotalHitpoints = function(newTotalHitpoints) {
	if (isNaN(newTotalHitpoints) || newTotalHitpoints < 0) {
		this.hitpoints = 0;
	} else {
		this.totalHitpoints = newTotalHitpoints;
		if (this.hitpoints >  newTotalHitpoints) {
			this.hitpoints =  newTotalHitpoints;
		}
	}
}

Сharacter.prototype.getAttack = function() {
	return this.attack;
}

Сharacter.prototype.setAttack = function(newAttack) {
	this.attack = newAttack;
}

Сharacter.prototype.isAlive = function() {
	this.alive = this.hitpoints > 0;
	return this.alive;
}

Сharacter.prototype.fight = function(opponent) {
	if (this === opponent) {
		console.log("You can not fight with yourself.");
	} else if (!opponent.isAlive()) {
		console.log(`${opponent.name} can not fight because he is not alive.`);
	} else if (this.isAlive()){
		if (opponent.hasOwnProperty("block") && (opponent.block)) {
			opponent.block = false;
		} else {
			opponent.setHitpoints(opponent.getHitpoints() - this.attack);
			opponent.isAlive();
		}
	} else {
		console.log(`${this.name} can not fight because he is not alive.`);
	}
}

function Champion(obj) {
	Сharacter.call(this, obj);
	// Blocking incoming damage
	this.block = false;
}

setPrototype(Сharacter, Champion);

Champion.prototype.rest = function() {
	this.setHitpoints(this.hitpoints + 5);
}

Champion.prototype.defence = function() {
	this.block = true;
}

Champion.prototype.fight = function(opponent) {
	Сharacter.prototype.fight.call(this, opponent);
	if (!opponent.isAlive()) {
		this.attack += 1;
	}
}

function Monster(obj) {
	Сharacter.call(this, obj);
	this.enrageCounter = 0;
}

setPrototype(Сharacter, Monster);

Monster.prototype.enrage = function() {
	this.enrageCounter = 2;
}

Monster.prototype.fight = function(opponent) {
	if (this.enrageCounter > 0) {
		this.enrageCounter--;
		this.attack *= 2;
		Сharacter.prototype.fight.call(this, opponent);
		this.attack /= 2;
	} else {
		Сharacter.prototype.fight.call(this, opponent);
	}
	if (!opponent.isAlive()) {
		this.setTotalHitpoints(this.totalHitpoints + Math.floor(opponent.getTotalHitpoints() * 0.1));
		this.setHitpoints(this.hitpoints + Math.floor(opponent.getTotalHitpoints() * 0.25));
	}
}

module.exports = {
	assign: assign,
	setPrototype: setPrototype,
	Champion: Champion,
	Monster: Monster
}