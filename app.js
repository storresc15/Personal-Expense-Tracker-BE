if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

  const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  //passport = require('passport'),
  //methodOverride = require('method-override'),
  morgan = require('morgan'),
  path = require('path'),
  db = require('./models'),
  //errorHandler = require('./utils/error'),
  //expressError = require('./utils/ExpressError'),
  PORT = process.env.PORT || 3001;

  //const userRoutes = require('./routes/users'),
  const expenseRoutes = require('./routes/expenses'),
  incomeRoutes = require('./routes/incomes');


const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.COOKIE_SECRET));


app.use(cors());
//app.use(passport.initialize());

//RESTFULL ROUTES
app.use('/expenses', expenseRoutes);
app.use('/incomes', incomeRoutes);
/*app.use('/decks', deckRoutes);
app.use('/reviews', reviewRoutes);
app.use('/sets', setRoutes);*/
app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});
app.use(function (req, res, next) {
  let err = new expressError('Not Found!', 404); //Note on the express error for testing, probably create the utils folder already with the error
  next(err);
});

//Error Handling route
//app.use(errorHandler); // Same note in here

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});