const express = require('express');
const router = express.Router();

const models = require('../models/Item')

router.get('/todoList', function (req, res) {
	models.find({}).then(function (todos) {
		res.send(todos);
	});
});

router.post('/todoList/add', async (req, res) => {
	const { taskText } = req.body

	const newItem = new models({
		text: taskText,
		done: false
	});

	await newItem.save();

	await models.find({}).then(function (todos) {
		res.send(todos);
	});
});

router.post('/todoList/doneTodo/:id', function (req, res) {

	const { id } = req.params;

	models.findById(id)
		.then(function (result) {
			result.done = !result.done;
			res.send(result);
			return result.save()

		})
})

router.post('/todoList/removeTodo/:id', function (req, res) {

	const { id } = req.params;

	models.findOneAndDelete({ _id: id })
		.then(function (result) {
			res.send(result);
			return result.save()
		})
})

router.post('/todoList/editTodo/:id', function (req, res) {
	const { taskText } = req.body;

	const { id } = req.params;

	models.findById(id)
		.then(function (result) {
			result.text = taskText;
			res.send(result);
			return result.save()
		})
})

module.exports = router;