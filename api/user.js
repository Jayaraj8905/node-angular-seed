const User = module.exports;
const response = require('./../core/response');

// get the list of users
User.get = (req, res) => {
	const data = req.query;

	response.sendJson(req, res, {status: 'Pinged Successfully'});
}
