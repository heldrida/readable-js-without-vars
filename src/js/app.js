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
const avgAgeOfMales = (penguins) => {

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

console.log("Imperative approach avgAgeOfMales returns ", avgAgeOfMales(penguins));