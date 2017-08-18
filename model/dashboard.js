const mongoose = require('mongoose');

// task Schema
const taskSchema = mongoose.Schema({
	full_name:{
		type: String,
		required: true
	},

	dob:{
		type: Date,
		required: true
	},

	school:{
		type: String,
		required: true
	},

	class:{
		type: String,
		required: true
	},

	div:{
		type: String,
		required: true
	},

	status:{
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


// Delete Task
module.exports.removeTask = (id, callback) => {
	var query = {_id: id};
	Title.remove(query, callback);
}

//edit task
module.exports.editTask = (id, task, options, callback) => {
	var query = {_id: id};	
	var update = {
		full_name: task.full_name,
		dob: task.dob,
		school: task.school,
		class: task.class,
		div: task.div,
		status: task.status 
	}
	Title.findOneAndUpdate(query, update, options, callback);
}
