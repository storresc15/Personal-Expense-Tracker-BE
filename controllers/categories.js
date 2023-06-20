const db = require('../models');
//expressError = require('../utilities/ExpressError');

module.exports.index = (req, res) => {
  res.send('Welcome to the Categories route!!');
};

//Get Category by ID
module.exports.getById = async (req, res) => {
  const id = req.params.id;
  const theCategory = await db.Category.find({ _id: id });
  res.send(theCategory);
};

//Get Cateogires by User Id
module.exports.getByUserId = async (req, res) => {
  const id = req.user._id;
  const theCategories = await getCategoriesbyUserId(id);
  res.send(theCategories);
};

//Creating Category record
module.exports.postCategory = async (req, res) => {
  const id = req.user._id;
  if (!req.body.name) {
    res.send('Sorry no arguments made it'); // Later check this code, since we can send a error response by the use of next
  } else {
    const addedCategory = new db.Category({
      amount: req.body.amount,
      description: req.body.description,
      type: req.body.type,
      user: id
    });
    await addedCategory.save(function (err) {
      if (err) res.send('There was an error in the Category creation!');
    });
    const theCategories = await getCategoriesbyUserId(id);
    res.send(theCategories);
  }
};

const getCategoriesbyUserId = async (id) => {
  const theCategories = await db.Category.find({ user: id }).populate('user');
  return theCategories;
};
