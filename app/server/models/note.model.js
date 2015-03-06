
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoteSchema = new Schema({
  title: String,
  text: String,
  userId: Schema.Types.ObjectId,
  created_at: { type: Date, default: Date.now() },
  updated_at: Date
});

module.exports = mongoose.model('Note', NoteSchema);

