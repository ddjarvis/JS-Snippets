function getElement(selector,index,limit){
	return new Promise((resolve,reject) => {
	console.log(index);
		index = index ?? '0';
		let count = 0;
		(function waitForFoo() {
		const element = document.querySelectorAll(selector)[index];
		if (element) return resolve(element);
		if (limit && count > limit) return false;
		count += 1;
		setTimeout(waitForFoo, 50);
		})();
	});
}
