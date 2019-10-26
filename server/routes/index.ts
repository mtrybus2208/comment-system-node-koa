import Koa from 'koa';
import routesLoader from '../utils/routesLoader';
import router from './comments';

export default (app: Koa) => {
  app.use(router.routes()).use(
    router.allowedMethods({
      throw: true,
    }),
  );
  // routesLoader(`${__dirname}`)
  //   .then((files: any) => {
  //     files.forEach((router: any) => {
  //       console.log('@@@');
  //       console.log(router);
  //       app.use(router.routes()).use(
  //         router.allowedMethods({
  //           throw: true,
  //         }),
  //       );
  //     });
  //   });
};
