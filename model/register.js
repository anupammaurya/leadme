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

// Add User
module.exports.addLogin = (register, callback) => {
	Register.create(register, callback);
}

// Login Authenication
module.exports.checkLogin = function (register, callback) {
	console.log(callback)
	var query = {username: register.username, password: register.password};
	Register.findOne(query, callback);
}
