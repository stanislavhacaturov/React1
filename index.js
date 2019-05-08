const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const rout1 = require('./routes/auth');
const rout2 = require('./routes/todoList');
const cors = require('cors');

ObjectID = mongoose.Types.ObjectId;

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
	'mongodb://localhost:27017/test', 
	{useNewUrlParser: true},
	function (err, client) {
		if (err) return console.log(err);
		app.listen(3001, function () {
			console.log("Сервер ожидает подключения...");
		});
	}
);

app.use('/', rout1);
app.use('/todo', rout2);