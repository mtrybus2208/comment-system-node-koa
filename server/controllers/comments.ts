import Koa from 'koa';
import Comment from '../models/comment';
import IComment from '../interfaces/comment';
import { domain, port } from '../config';

export const add = async (ctx: Koa.Context) => {
  try {
    const comment = await new Comment(ctx.request.body).save();
    ctx.body = comment;
  } catch (err) {
    ctx.throw(422);
  }
};

export const find = async (ctx: Koa.Context) => {
  try {
    const comments: IComment[] = await Comment.find();
    ctx.body = {
      description: 'successful operation',
      data: comments.map(comment => ({
        comment,
        request: {
          type: 'GET',
          url: `${domain}:${port}/comments/${comment._id}`,
        },
      })),
    };
  } catch (error) {
    ctx.throw(400, JSON.stringify({
      error,
      description: 'Bad Request',
    }));
  }
};

export const findByField = async (ctx: Koa.Context) => {
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
};
