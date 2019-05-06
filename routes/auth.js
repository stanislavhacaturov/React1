
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const withAuth = require('../middleware');

const models = require('../models');

const secret = 'mysecretsshhh';

router.post('/register', (req, res) => {

	const username = req.body.user.username;
	const lastname = req.body.user.lastname;
	const email = req.body.user.email;
	const password = req.body.user.password;

	if (!username || !password || !lastname || !email) {
		res.status(401)
		.json({
			ok: false,
			error: 'Все поля должны быть заполнены!',
		});
	} else if (password.length < 3 || password.length > 16) {
		res.status(401)
		.json({
			ok: false,
			error: 'Длиная пароля от 3 до 16 символов!',
			fields: ['password']
		});
	} else {
		models.User.findOne({
			email
		}).then(user => {
			if (!user) {
				bcrypt.hash(password, null, null, (err, hash) => {
					models.User.create({
						username,
						lastname,
						email,
						password: hash
					})
						.then(user => {
							console.log(user);
							// req.session.userId = user.id;
							// req.session.userEmail = user.email;
							res.status(200)
							.json({
								ok: true,
								message: 'Ура! Аккаунт создан'
							});
						})
						.catch(err => {
							console.log(err);
							res.status(500)
							.json({
								ok: false,
								error: 'Ошибка, попробуйте позже!'
							});
						});
				});
			} else {
				res.status(401)
				.json({
					ok: false,
					error: 'Пользователь с таким Email уже существует!',
					fields: ['email']
				});
			}
		});
	}
});

router.post('/authorization', (req, res) => {
	const email = req.body.user.email;
	const password = req.body.user.password;

	if (!email || !password) {
		res.status(401)
		.json({
			ok: false,
			error: 'Все поля должны быть заполнены!',
		});
	} else {
		models.User.findOne({
			email
		})
			.then(user => {
				if (!user) {
					res.status(401)
					.json({
						ok: false,
						error: 'Email неверен!',
					});
				} else {
					bcrypt.compare(password, user.password, function (err, result) {
						if (!result) {
							res.status(401)
							.json({
								ok: false,
								error: 'Пароль неверен!',
								fields: ['email', 'password']
							});
						} else {
							//
							const payload = { email };
							const token = jwt.sign(payload, secret, {
							  expiresIn: '1h'
							});
							console.log('token', token);
							// res.cookie('token', token, { httpOnly: true }).sendStatus(200);
							res.status(200).send({token});
						
						}
					});
				}
			})
			.catch(err => {
				console.log(err);
				res.status(500)
				.json({
					ok: false,
					error: 'Ошибка, попробуйте позже!'
				});
			});
	}
});

router.post('/checkToken', withAuth, function(req, res) {
	res.sendStatus(200);
  });

module.exports = router;