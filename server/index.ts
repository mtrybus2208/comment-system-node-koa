import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import koaSwagger from 'koa2-swagger-ui';
import mongoose from 'mongoose';
import { port, connexionString } from './config';
import routing from './routes';
import * as swaggerConfig from "./swagger.json";

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(connexionString);
mongoose.connection.on('error', console.error);

const app: Koa = new Koa();
console.log(swaggerConfig);
app
  .use(logger())
  .use(bodyParser())
  .use(helmet())
  .use(
    koaSwagger({
      routePrefix: '/swagger',
      swaggerOptions: {
        spec: swaggerConfig,
      },
    }),
  );

routing(app);

app.listen(port, () =>
  console.log(`✅  The server is running at http://localhost:${port}/`),
);

export default app;
