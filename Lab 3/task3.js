const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(o1, o2) {
	return (o1.name == o2.name && o1.weight == o2.weight)
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false