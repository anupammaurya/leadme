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

// Add Checklogin
module.exports.checkLogin = function (login, callback) {
	console.log(callback)
	var query = {username: login.username, password: login.password};
	Login.findOne(query, callback);
}


