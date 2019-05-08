const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authorization = require('./routes/authorization');
const todoList = require('./routes/todoList');
const cors = require('cors');

ObjectID = mongoose.Types.ObjectId;

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
	'mongodb://localhost:27017/test',
	{ useNewUrlParser: true },
	function (err, client) {
		if (err) return console.log(err);
		app.listen(3001, function () {
			console.log("Сервер ожидает подключения...");
		});
	}
);

app.use('/', authorization);
app.use('/todo', todoList);	