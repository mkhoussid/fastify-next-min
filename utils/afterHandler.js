const connectDb = require('../db/connectDb');
const applyApiRoutes = require('../routes/applyApiRoutes');

module.exports = (fastify, socketTracker, isDev) =>
	async function () {
		try {
			await connectDb(isDev);

			applyApiRoutes(fastify, socketTracker);

			fastify.next('/', (app, req, reply) => {
				console.log('[server] pathname: /', !!fastify.redis);
				req.raw.cookies = req.cookies;
				req.raw.redisInstance = fastify.redis;
				app.render(req.raw, reply.raw, '/', req.query);
			});
		} catch (err) {
			console.log('Error caught in afterHandler', err);
		}
	};
