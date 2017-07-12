var eur = 29.6974;
var usd = 26.0230;

var userEur = parseFloat(prompt("Input the amount of euros = ", ""));
var userUsd = parseFloat(prompt("Input the amount of dollars = ", ""));

var eurUah = (userEur * eur).toFixed(2);
var usdUah = (userUsd * usd).toFixed(2);
var eurUsd = (eur / usd).toFixed(3);

alert(`${userEur} euros are equal ${eurUah} UAH, ${userUsd} dollars are equal ${usdUah} UAH, one euro is equal ${eurUsd} dollars.`);