const db = require('../models');
  //expressError = require('../utilities/ExpressError');

module.exports.index = (req, res) => {
  res.send('Welcome to the incomes route!!');
};

//Get Income by ID
module.exports.getById = async (req, res) => {
  const id = req.params.id;
  const theIncome = await db.Income.find({ _id: id });
  res.send(theIncome);
};

//Get Income by User Id
module.exports.getByUserId = async (req, res) => {
  const id = req.user._id;
  const theIncomes = await getIncomesbyUserId(id);
  res.send(theIncomes);
};

//Creating Income record
module.exports.postIncome = async (req, res) => {
  const id = req.user._id;
  if (!req.body.name) {
    res.send('Sorry no arguments made it'); // Later check this code, since we can send a error response by the use of next
  } else {
    const addedIncome = new db.Income({
      amount: req.body.amount,
      category: req.body.category,
      date: Date.now(),
      description: req.body.description,
      recurrent: req.body.recurrent,
      user: id
    });
    await addedIncome.save(function (err) {
      if (err) res.send('There was an error in the Income creation!');
    });
    const theIncomes = await getIncomesbyUserId(id);
    res.send(theIncomes); 
  }
};

const getIncomesbyUserId = async (id) => {
    const theIncomes = await db.Income.find({user: id}).populate('user');
    return theIncomes;
}