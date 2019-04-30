const express = require('express');
const router = express.Router();

const models = require('../models/Item')

router.post('/todoList', (req, res) => {

	const id = req.body.todoItem.id;
	const text = req.body.todoItem.text;
	const done = req.body.todoItem.done;

	console.log(id, text, done)

	let newItem = new models({ 
		id: id,
		text: text,
		done: done
	});

	newItem.save().then(function(result){
		console.log(result)
	})
});

router.post('/todoList/:id/doneTodo', function(req, res) {
	let todoId = req.body.id;;

	console.log('iiiiiddddddd', todoId)
	models.findById(todoId)
		.exec()
		.then(function(result) {
			result.done = !result.done;
			return result.save();
		})
})

module.exports = router;