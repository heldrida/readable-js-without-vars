'use strict';

const penguins = [{
	age: 12,
	male: true
}, {
	age: 32,
	male: false
}, {
	age: 53,
	male: true
}];

// imperative approach
const impAvgAgeOfMales = (penguins) => {

	let total = 0;
	let num = 0;

	for (let penguin of penguins) {

		if (penguin.male) {
			total += penguin.age;
			num++;
		}

	}

	return total / num;

};

console.log("Imperative approach avgAgeOfMales returns ", impAvgAgeOfMales(penguins));

// functional approach
const fnAvgAgeOfMales = (penguins) => {

	// filter
	const males = penguins.filter((penguin) => penguin.male);

	// sum
	const sumAge = males.reduce((memo, penguin) => {
		return memo + penguin.age;
	}, 0);

	return sumAge / males.length;

};

console.log("Functional approach avgAgeOfMales returns ", fnAvgAgeOfMales(penguins));