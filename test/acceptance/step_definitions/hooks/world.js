'use strict';

module.exports = function (){
	this.Before( () => {
		this.world = {};
		return Promise.resolve();
	});
};