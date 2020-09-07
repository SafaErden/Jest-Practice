const analyze = (array) => {
	let object = {};
	object.average = array.reduce((a, b) => a + b, 0) / array.length;
	object.min = Math.min(...array);
	object.max = Math.max(...array);
	object.length = array.length;

	return object;
};

console.log(analyze([ 1, 8, 3, 4, 2, 6 ]));
