const chalk = require('chalk');

function Dog(name){
	this.name = name;
	this.stomtach = [];
}

Dog.prototype.eat = function (cat){
	this.stomatch.push(cat);
}

Dog.prototype.sayHi = function(){
	console.log('Hello, my name is ', chalk.green(this.name));
}

module.exports = Dog ;