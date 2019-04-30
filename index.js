const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

// const config = require('./config');
const rout1 = require('./routes/auth');
const rout2 = require('./routes/todoList');
const cors = require('cors');

ObjectID = mongoose.Types.ObjectId;

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(
// 	session({
// 	  secret: config.SESSION_SECRET,
// 	  resave: true,
// 	  saveUninitialized: false,
// 	  store: new MongoStore({
// 		mongooseConnection: mongoose.connection
// 	  }),
// 	  expires: new Date(Date.now() + 60 * 60 * 24 * 30)
// 	})
// );



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
app.use('/add', rout2);

// require('./config-passport')