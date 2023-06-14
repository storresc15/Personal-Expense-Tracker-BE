const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
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
});

const Income = mongoose.model('Income', incomeSchema);
module.exports = Income;