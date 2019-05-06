const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    text: {
      type: String,
      required: true
    },
    done: {
        type: Boolean,
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

module.exports = mongoose.model('Item', todoSchema);