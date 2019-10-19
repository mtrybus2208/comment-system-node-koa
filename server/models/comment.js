import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const commentSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
commentSchema.plugin(uniqueValidator);
export default mongoose.model('Comment', commentSchema);
