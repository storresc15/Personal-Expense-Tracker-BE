const mongoose = require('mongoose');
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const Session = new Schema({
  refreshToken: {
    type: String,
    default: ''
  }
});

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    unique: true
  },
  profileImageUrl: {
    type: String
  },
  budgets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Budget'
    }
  ],
  authStrategy: {
    type: String,
    default: 'local'
  },
  refreshToken: {
    type: [Session]
  }
});

//Remove refreshToken from the response
UserSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.refreshToken;
    return ret;
  }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
module.exports = User;