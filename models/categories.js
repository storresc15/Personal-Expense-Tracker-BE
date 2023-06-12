const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  amount: String,
  description: String,
  type: String,//Not sure on the use of the type of category -- do we have a business process defined for this?
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
},
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;