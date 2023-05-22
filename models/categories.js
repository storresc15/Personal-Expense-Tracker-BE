const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  amount: String,
  description: String,
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
},
  type: String    //Not sure on the use of the type of category -- do we have a business process defined for this?
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;