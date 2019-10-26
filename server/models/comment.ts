import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import Comment from '../interfaces/comment';
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const commentSchema: mongoose.Schema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
commentSchema.plugin(uniqueValidator);
export default mongoose.model<Comment>('Comment', commentSchema);
