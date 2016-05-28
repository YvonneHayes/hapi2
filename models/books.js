const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Books', new Schema ( {
  name: {
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  }
}));
