const express = require('express');
const router = express.Router();

const models = require('../models/Item')

router.get('/todoList', function(req, res) {
    models.find({}).then(function (todos) {
        res.send(todos);
    });
});

router.post('/todoList/add', (req, res) => {

	const id = req.body.id;
	const text = req.body.text;
	const done = req.body.done;

	let newItem = new models({ 
		id: id,
		text: text,
		done: done
	});

	newItem.save()
});

router.post('/todoList/:id/doneTodo', function(req, res) {
	let todoId = req.body.id;

	models.findOne({id: todoId}, function (err, item) {
		item.done = !item.done;
		item.save(function (err) {
			if(err) {
				console.error('ERROR!');
			}
		});
	})
})

router.post('/todoList/:id/removeTodo', function(req, res) {
	let todoId = req.body.id;

	models.findOneAndDelete({ id: todoId }, function (err, item) {
		item.save(function (err) {
			if(err) {
				console.error('ERROR!');
			}
		});
	})
})

router.post('/todoList/:id/editTodo', function(req, res) {
	let todoId = req.body.id;
	let todoText = req.body.text;

	models.findOne({id: todoId}, function (err, item) {
		item.text = todoText;
		item.save(function (err) {
			if(err) {
				console.error('ERROR!');
			}
		});
	})
})

module.exports = router;