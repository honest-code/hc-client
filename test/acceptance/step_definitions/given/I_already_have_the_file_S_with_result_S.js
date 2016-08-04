'use strict';

module.exports = function (){
	this.Given(/^I already have the file "([^"]*)" with result "([^"]*)"$/, (filename, filecontent) => {
		const world = this.world;
		world.filename = filename;
		world.filecontent = filecontent;
		return Promise.resolve();
	});
};