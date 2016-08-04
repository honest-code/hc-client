'use strict';

const request = require('request');
const fs = require('fs');

const blueprint_hook = process.argv[2];
const test_result = process.argv[3];

if(!blueprint_hook) {
	console.error('You have to use as first parameter a valid blueprint hook url');
	process.exit();
}

if(!test_result) {
	console.error('You have to use as second parameter a valid path to the file with test result');
	process.exit();
}

const filepath = `${__dirname}/${test_result}`;

const options = {
	url : `https://pro.honestcode.io/api/hooks/tr/${blueprint_hook}`,
	method : 'POST',
	json : true,
	body : fs.readFileSync(filepath).toString()
};

function handleResponse(err){
	if(err){
		console.error(err,blueprint_hook,test_result);
		process.exit();
	}
	else {
		console.log('Congratulations! Your tests results have been sent to HonestCode.io successfully');
	}
}

request(options,handleResponse());
