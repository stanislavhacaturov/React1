const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      unique: true
    },
    done: {
        type: Boolean,
        required: true
    },
    autor: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

todoSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('todoList', todoSchema);