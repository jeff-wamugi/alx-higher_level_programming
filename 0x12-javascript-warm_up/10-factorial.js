#!/usr/bin/node
console.log((function factorial(x){
	if (isNaN(x) || x === 1) return 1;
	let result = x * factorial(x-1);
	return result;
})(parseInt(process.argv[2])));
