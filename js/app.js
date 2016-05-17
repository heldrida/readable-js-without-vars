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
var avgAgeOfMales = function avgAgeOfMales(penguins) {

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

console.log("Imperative approach avgAgeOfMales returns ", avgAgeOfMales(penguins));