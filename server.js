const fastifyConstructor = require('fastify');
const nextJs = require('fastify-nextjs');

const PORT = process.env.PORT || 5001;
const isDev = process.env.NODE_ENV !== 'production';

const { registerPlugins, afterHandler, listenHandler, readyHandler } = require('./utils');

const socketTracker = {
	admins: [],
};

console.log('Environment: ', process.env.NODE_ENV);
const fastify = fastifyConstructor({
	// logger: isDev,
});

registerPlugins(fastify, isDev);

fastify
	.register(nextJs, { dev: isDev })
	.after(afterHandler(fastify, socketTracker, isDev))
	.ready(readyHandler(fastify));

fastify.listen(PORT, '::', listenHandler(PORT));
