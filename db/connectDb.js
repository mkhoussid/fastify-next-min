const mongoose = require('mongoose');

module.exports = async (isDev) => {
	const uri = ``;

	if (uri) {
		try {
			console.log('Connecting to DB');
			await mongoose.connect(uri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			console.log('DB connected');
		} catch (err) {
			console.log('Error caught connecting to db', err);

			process.exit(1);
		}
	} else {
		console.log('Please specify the MongoDB uri');
	}
};
