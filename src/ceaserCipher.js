const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const cipher = (string, number) => {
	let indexes = [];
	string.split('').forEach((item) => {
		if (alphabet.includes(item.toLowerCase())) {
			if (alphabet.includes(item)) {
				indexes.push(alphabet[(alphabet.indexOf(item) + number) % 26]);
			} else {
				indexes.push(alphabet[(alphabet.indexOf(item.toLowerCase()) + number) % 26].toUpperCase());
			}
		} else {
			indexes.push(item);
		}
	});
	return indexes.join('');
};

console.log(cipher('safA, Phillip!', 2));
