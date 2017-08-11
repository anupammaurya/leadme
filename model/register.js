const mongoose = require('mongoose');
const Registerschema = mongoose.Schema({
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	}	

});

const taskSchema = mongoose.Schema({

});


const Register = module.exports = mongoose.model('Register', Registerschema);

// Get Books
module.exports.getlogin = (callback, limit) => {
	Register.find(callback).limit(limit);
}

module.exports.login = (callback, limit) => {
	Register.find(callback).limit(limit);
}

// Get Book
module.exports.getRegister = (id, callback) => {
	Register.findById(id, callback);
}

// Add User
module.exports.addLogin = (register, callback) => {
	Register.create(register, callback);
}

// Login Authenication
module.exports.checkLogin = function (register, callback) {
	var query = {username: register.username, password: register.password};
	Register.findOne(query, callback);
}
