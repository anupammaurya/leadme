const mongoose = require('mongoose');

// lead Schema
const loginSchema = mongoose.Schema({
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	}
});

const Login = module.exports = mongoose.model('Login', loginSchema);

// Get leads
module.exports.getLogin = (callback, limit) => {
	Login.find(callback).limit(limit);
}


// Add lead
module.exports.checkLogin = function (login, callback) {
	var query = {username: login.username, password: login.password};
	Login.findOne(query, callback);
}





// Update lead
module.exports.updatelead = (id, lead, options, callback) => {
	var query = {_id: id};
	var update = {
		title: lead.title,
		genre: lead.genre,
		description: lead.description,
		author: lead.author,
		publisher: lead.publisher,
		pages: lead.pages,
		image_url: lead.image_url,
		buy_url: lead.buy_url
	}
	lead.findOneAndUpdate(query, update, options, callback);
}

// Delete lead
module.exports.removelead = (id, callback) => {
	var query = {_id: id};
	lead.remove(query, callback);
}


