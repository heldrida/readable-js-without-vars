'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

// imperative approach for grouping all the male penguins
var impGrouped = {};
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
	for (var _iterator2 = penguins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		var penguin = _step2.value;

		if (penguin.male) {
			var age = penguin.age;
			if (!impGrouped[age]) {
				impGrouped[age] = [];
			}
			impGrouped[age].push(penguin.name);
		}
	}
} catch (err) {
	_didIteratorError2 = true;
	_iteratorError2 = err;
} finally {
	try {
		if (!_iteratorNormalCompletion2 && _iterator2.return) {
			_iterator2.return();
		}
	} finally {
		if (_didIteratorError2) {
			throw _iteratorError2;
		}
	}
}

console.log('imperative approach for grouping male penguins result: ', impGrouped);

// functional approach for grouping all the male penguins
var fnGrouped = penguins.filter(function (penguin) {
	return penguin.male;
}).reduce(function (memo, penguin) {

	var current = memo[penguin.age] || [];
	var group = _defineProperty({}, penguin.age, [].concat(_toConsumableArray(current), [penguin.name]));

	return Object.assign({}, memo, group);
}, {});

console.log('functional approach for grouping male penguins result: ', fnGrouped);