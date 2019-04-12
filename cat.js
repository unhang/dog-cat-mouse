function Cat(weight) {
	this.stomacth = [] ;
	this.weight  = weight;
}

Cat.prototypes.sleep = function(){
	console.log('sleeping....')
}
module.exports = Cat;