//keys - use env or dev?
if(process.env.NODE_ENV == 'production') {
	//we ware in production, return prod keys
	module.exports = require('./prod');
} else {
	//we are ind eveloperment, return dev keys
	module.exports = require('./dev');
}