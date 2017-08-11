const mongoose = require('mongoose');

// Book Schema
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

// Get Books
module.exports.getLogin = (callback, limit) => {
	Login.find(callback).limit(limit);
}

// Get Book
// module.exports.checkLogin = (kk, callback) => {
// 	// Login.find(username);
// 	Login.findOne({username: 'kk'});
// }

// Add Book
module.exports.checkLogin = function (login, callback) {
	var query = {username: login.username, password: login.password};
	Login.findOne(query, callback);
}





// Update Book
module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
}


// // Add Book
// module.exports.addLogin = (adduser, callback) => {
// 	Login.create(adduser, callback);
// }

