const express = require('express'),
	  router = express.Router(),
	  incomes = require('../controllers/incomes');
/*const { getToken, COOKIE_OPTIONS, getRefreshToken, verifyUser,isAuthor } = require("../middleware");*/ //To be added after the middleware is developed

router.route('/').get(incomes.index).post(/*verifyUser, */incomes.postIncome);

router.route('/:id')
	.get(/*verifyUser, */incomes.getById);

router.get('/myincomes', /*verifyUser, */incomes.getByUserId);



module.exports = router;