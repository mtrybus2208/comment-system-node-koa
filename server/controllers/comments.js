import Comment from '../models/comment';

export const add = async (ctx) => {
  try {
    const comment = await new Comment(ctx.request.body).save();
    ctx.body = comment;
  } catch (err) {
    ctx.throw(422);
  }
}

export const find = async (ctx) => {
  try {
    ctx.body = await Comment.find();
  } catch (err) {
    ctx.throw(400);
  }
}

export const findByField = async (ctx) => {
  try {
    const comment = await Comment.find(ctx.query);
    if (!comment) {
      ctx.throw(404);
    }
    ctx.body = comment;
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'NotFoundError') {
      ctx.throw(404);
    }
    ctx.throw(500);
  }
}
