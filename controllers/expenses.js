const db = require('../models');
  //expressError = require('../utilities/ExpressError');

module.exports.index = (req, res) => {
  res.send('Welcome to the expenses route!!');
};

//Get Expense by ID
module.exports.getById = async (req, res) => {
  const id = req.params.id;
  const theExpsense = await db.Expense.find({ _id: id });
  res.send(theExpsense);
};

//Get expense by User Id
module.exports.getByUserId = async (req, res) => {
  const id = req.user._id;
  const theExpenses = await getExpensesbyUserId(id);
  res.send(theExpenses);
};

//Creating expense record
module.exports.postExpense = async (req, res) => {
  const id = req.user._id;
  if (!req.body.name) {
    res.send('Sorry no arguments made it'); // Later check this code, since we can send a error response by the use of next
  } else {
    const addedExpense = new db.Expense({
      amount: req.body.amount,
      category: req.body.category,
      date: Date.now(),
      description: req.body.description,
      recurrent: req.body.recurrent,
      user: id,
      vendor: req.body.vendor
    });
    await addedExpense.save(function (err) {
      if (err) res.send('There was an error in the expense creation!');
    });
    const theExpenses = await getExpensesbyUserId(id);
    res.send(theExpenses);
  }
};

const getExpensesbyUserId = async (id) => {
    const theExpenses = await db.Expense.find({user: id}).populate('user');
    return theExpenses;
}