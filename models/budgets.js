const mongoose = require('mongoose');
const { Schema } = mongoose;

const budgetsSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  category: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category' 
},
  description: String,
  endDate: Date,
  startDate: Date,
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
}
});

const Budget = mongoose.model('Budget', budgetsSchema);
module.exports = Budget;