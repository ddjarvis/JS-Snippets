function properCase(str) {
	return str.replace(/\b\w+\b/g, word => {
		if (word.length <= 4 && !/[aeiou]/i.test(word)) {
			return word.toUpperCase();
		} else {
			return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
		}
	});
}