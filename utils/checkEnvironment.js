module.exports = (request, reply, done) => {
	if (process.env.NODE_ENV === 'production') return reply.status(418).send();

	done();
};
