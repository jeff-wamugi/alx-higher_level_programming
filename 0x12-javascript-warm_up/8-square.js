#!/usr/bin/node
if (isNaN(process.argv[2])) console.log('Missing size');
else{
        const x = (parseInt(process.argv[2]));
	for(let i = 0; i < x; i++){
		let line = '';
		for(let k = 0; k < x; k++){
			line = line.concat('X');
		}
		console.log(line);
        }
}
