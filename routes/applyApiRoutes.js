const routes = require('.');

module.exports = (next, socketTracker) => {
	routes(socketTracker).forEach((route) => {
		next.route(route);
	});
};
