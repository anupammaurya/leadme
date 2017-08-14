const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());


Login = require('./model/login');
Register = require('./model/register');
Title = require('./model/dashboard');

mongoose.connect('mongodb://<anupammaurya>:<Anupam1214@@@>@ds161630.mlab.com:61630/leadschool');
// mongoose.connect('mongodb://127.0.0.1/leadschool',  { useMongoClient: true });
var db = mongoose.connection;

//check login
app.post('/api/logins', (req, res) => {
  var register = req.body;
  console.log("Here is the login_post method!!!");
  Register.checkLogin(register, (err, isMatch) => {
    console.log('ISMATCH IS: ' + isMatch)
    if (isMatch) {
      console.log('THIS IS ISMATCH RESPONSE');
      res.json(isMatch);
    } else {
      console.log('THIS IS ERROR RESPONSE')
      res.json(err);
    }
  });
});


//Add login 
app.post('/api/adduser', (req, res) => {
  console.log("asdf");
  var adduser = req.body;
  console.log(adduser);
  Register.addLogin(adduser, (err, register) => {
    if (err) {
      throw err;
    }
    res.json(register);
    console.log(register);
  });
});

//add task detail
app.post('/api/addtask', (req, res) => {
  console.log("task is going way");
  var task = req.body;
    // console.log(task);
  Title.addTask(task, (err, addtask) => {
    if (err) {
      throw err;
    }
    res.json(addtask);
  });
});


app.get('/api/gettask', (req, res) => {
  console.log("task is get going way");
  Title.getTask({}, (err, data) => {
    if (err) {
      throw err;
    }
    res.json(data);
    console.log(data);
  });
});

//delete task
app.delete('/api/deletetask/:_id', (req, res) => {
  var id = req.params._id;
  console.log("task deleted"+ " " + id);
	Title.removeTask(id, (err, data) => {
		if(err){
			throw err;
		}
		res.json(data);
	});
});

//Edit task
app.put('/api/editTask/:_id', (req, res) => {
	var id = req.params._id;
	var task = req.body;
	Title.editTask(id, task, {}, (err, task) => {
		if(err){
			throw err;
		}
		res.json(task);
	});
});



// app.listen(3000);
// console.log('Running on port 3000...');

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
