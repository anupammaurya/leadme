const mongoose = require('mongoose');

// task Schema
const taskSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	}
});

const Title = module.exports = mongoose.model('Title', taskSchema);


// Add User
module.exports.addTask = (task, callback) => {
	Title.create(task, callback);
}

//get the title & decsrition
module.exports.getTask = (task, callback) => {
	Title.find({},callback);
}

//delete task
module.exports.removeTask = (id, callback) => {
	var query = {_id: id};
	Title.remove(query, callback);
}


// Update Task
module.exports.getTitles = (id, task, options, callback) => {
	var query = {_id: id};
	var update = {
		title: task.title,
		description: task.description
	}
	Title.findOneAndUpdate(query, update, options, callback);
}

// Delete Task
module.exports.removeTask = (id, callback) => {
	var query = {_id: id};
	Title.remove(query, callback);
}

//edit task

module.exports.editTask = (id, task, options, callback) => {
	var query = {_id: id};	
	var update = {
		title: task.title,
		description: task.description
	}
	Title.findOneAndUpdate(query, update, options, callback);
}
