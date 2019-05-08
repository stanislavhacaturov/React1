const express = require('express');
const router = express.Router();

const models = require('../models/Item')

router.get('/todoList', function(req, res) {
    models.find({}).then(function (todos) {
        res.send(todos);
    });
});

router.post('/todoList/add', (req, res) => {
	const { taskText } = req.body
	
	let newItem = new models({ 
		text: taskText,
		done: false
	});

	newItem.save()
});

router.post('/todoList/doneTodo/:id', function(req, res) {

	const { id } = req.params;

	models.findById(id)
		.then(function(result){
			result.done = !result.done;
			return result.save()
		})
})

router.post('/todoList/removeTodo/:id', function(req, res) {
	
	const { id } = req.params;
	
	models.findOneAndDelete({ _id: id })		
		.then(function(result){	
		return result.save()
	})	
})

router.post('/todoList/editTodo/:id', function(req, res) {
	const { todoText } = req.body;

	console.log('text', todoText)
	
	const { id } = req.params;
	
	models.findById(id)
		.then(function(result){
			result.text = todoText;
			return result.save()
		})

	// models.findOne({id: todoId}, function (err, item) {
	// 	item.text = todoText;
	// 	item.save(function (err) {
	// 		if(err) {
	// 			console.error('ERROR!');
	// 		}
	// 	});
	// })
})

module.exports = router;