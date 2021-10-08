const { initController } = require('../controllers');

const routes = [
	{
		method: 'GET',
		url: '/ping',
		handler: initController.ping,
		schema: {
			response: {
				200: {
					type: 'object',
					properties: {
						pong: {
							type: 'boolean',
						},
					},
				},
			},
		},
	},
];

module.exports = routes;
