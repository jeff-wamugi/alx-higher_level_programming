#!/usr/bin/node
function add(a, b){
	const sum = parseInt(a) + parseInt(b);
	return sum;
}
console.log(add(process.argv[2], process.argv[3]));
