import Koa from 'koa';
import 'babel-polyfill';
import Router from 'koa-router';
import { baseApi } from '../config';
import * as commentsControllers from '../controllers/comments';

const api: string = 'comments';

const router = new Router();

router.prefix(`/${baseApi}/${api}`);

router.get('/', commentsControllers.find);

router.get('/filter', commentsControllers.findByField);

router.post('/', commentsControllers.add);

// router.put('/:id', jwt, commentsControllers.update);
// router.delete('/:id', jwt, commentsControllers.delete);

export default router;
