const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Books', new Schema ({

  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  done: {
    type: Boolean,
    required: true
  },

  rating: {
    type: Number,
    min: [0, 'We get it, you hated it - you still can not give it a negative number as a rating. Sorry.'],
    max: [10, 'We are thrilled you loved it so much - still, you can not rate it any higher than 10!'],
    required: true
  }
}, {

  timestamps: true

}));
