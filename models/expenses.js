const mongoose = require('mongoose');
const { Schema } = mongoose;

const expennseSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  category: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category' 
}, 
  date: Date,
  description: String, 
  recurrent: Boolean,
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
},
vendor: String
});

const Expense = mongoose.model('Expense', expennseSchema);
module.exports = Expense;