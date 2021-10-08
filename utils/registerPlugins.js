const fastifyCaching = require('fastify-caching');
const fastifyHelmet = require('fastify-helmet');
const fastifyFormBody = require('fastify-formbody');
const fastifyCors = require('fastify-cors');

module.exports = (fastify, isDev) => {
	fastify.register(fastifyCaching);
	fastify.register(fastifyFormBody);
	fastify.register(fastifyHelmet, { contentSecurityPolicy: false });
	fastify.register(fastifyCors, {
		origin: '*',
	});
};
