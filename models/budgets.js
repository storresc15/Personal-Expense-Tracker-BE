const mongoose = require('mongoose');
const { Schema } = mongoose;

const budgetsSchema = new Schema({
  amount: {
    type: Number,
    required: true
  },
  description: String,
  category: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category' 
},
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
},
  startDate: Date, 
            endDate: Date
});

const Budget = mongoose.model('Budget', budgetsSchema);
module.exports = Budget;