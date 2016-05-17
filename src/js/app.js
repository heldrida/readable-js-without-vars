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

// imperative approach for grouping all the male penguins
var impGrouped = {};
for (let penguin of penguins) {
	if (penguin.male) {
		let age = penguin.age;
		if (!impGrouped[age]) {
			impGrouped[age] = [];
		}
		impGrouped[age].push(penguin.name);
	}
}

console.log('imperative approach for grouping male penguins result: ', impGrouped);

// functional approach for grouping all the male penguins
const fnGrouped = penguins
				.filter((penguin) => penguin.male)
				.reduce((memo, penguin) => {

					const current = memo[penguin.age] || [];
					const group = {[penguin.age]: [...current, penguin.name]};

					return Object.assign({}, memo, group);

				}, {});

console.log('functional approach for grouping male penguins result: ', fnGrouped);