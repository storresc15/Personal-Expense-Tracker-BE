const mongoose = require("mongoose");
const url = process.env.MONGO_DB_CONNECTION_STRING

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN FOR EXPENSES!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

//The below exports from models represent the domains of the data
module.exports.User = require('./users');
module.exports.Budget = require('./budgets');
module.exports.Category = require('./categories');
module.exports.Expense = require('./expenses');
module.exports.Income = require('./incomes');