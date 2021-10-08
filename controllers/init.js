exports.ping = async function (request, reply) {
	try {
		return reply.send({ pong: true });
	} catch (err) {
		console.log('error in init', err);

		return reply.code(500).send();
	}
};
