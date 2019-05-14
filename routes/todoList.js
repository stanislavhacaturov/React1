const express = require('express');
const router = express.Router();

const Items = require('../models/todoList');

router.post('/todoList', (req, res) => {
	const { userId } = req.body;

	Items.find({ autor: userId }).then(todos => {
		res.send(todos);
	});
});

router.post('/todoList/add', async (req, res) => {
	const { taskText, userId } = req.body;

	const newItem = new Items({
		text: taskText,
		done: false,
		autor: userId
	});

	await newItem.save();

	await Items.find({}).then(todos => {
		res.send(todos);
	});
});

router.post('/todoList/doneTodo/:id', (req, res) => {

	const { id } = req.params;

	Items.findById(id)
		.then(result => {
			result.done = !result.done;
			res.send(result);
			return result.save();

		})
})

router.post('/todoList/removeTodo/:id', (req, res) => {

	const { id } = req.params;

	Items.findOneAndDelete({ _id: id })
		.then(result => {
			res.send(result);
			return result.save();
		})
})

router.post('/todoList/editTodo/:id', (req, res) => {
	const { taskText } = req.body;

	const { id } = req.params;

	Items.findById(id)
		.then(result => {
			result.text = taskText;
			res.send(result);
			return result.save();
		})
})

module.exports = router;