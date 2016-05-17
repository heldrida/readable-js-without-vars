'use strict';

var penguins = [{
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
var impAvgAgeOfMales = function impAvgAgeOfMales(penguins) {

	var total = 0;
	var num = 0;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = penguins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var penguin = _step.value;


			if (penguin.male) {
				total += penguin.age;
				num++;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return total / num;
};

console.log("Imperative approach avgAgeOfMales returns ", impAvgAgeOfMales(penguins));

// functional approach
var fnAvgAgeOfMales = function fnAvgAgeOfMales(penguins) {

	// filter
	var males = penguins.filter(function (penguin) {
		return penguin.male;
	});

	// sum
	var sumAge = males.reduce(function (memo, penguin) {
		return memo + penguin.age;
	}, 0);

	return sumAge / males.length;
};

console.log("Functional approach avgAgeOfMales returns ", fnAvgAgeOfMales(penguins));