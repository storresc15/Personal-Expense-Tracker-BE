const express = require('express'),
	  router = express.Router(),
	  expenses = require('../controllers/expenses');
/*const { getToken, COOKIE_OPTIONS, getRefreshToken, verifyUser,isAuthor } = require("../middleware");*/ //To be added after the middleware is developed

router.route('/').get(expenses.index).post(/*verifyUser, */expenses.postExpense);

router.route('/:id')
	.get(/*verifyUser, */expenses.getById);

router.get('/myexpenses', /*verifyUser, */expenses.getByUserId);



module.exports = router;