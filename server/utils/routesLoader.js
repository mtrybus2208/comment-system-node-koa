import glob from 'glob';

export default dirname => {
  return new Promise((resolve, reject) => {
    const routes = [];
    glob(
      `${dirname}/*`,
      {
        ignore: '**/index.js'
      },
      (err, files) => {
        if (err) {
          return reject(err);
        }
        files.forEach(file => {
          const route = require(file);
          routes.push(route);
        });
        return resolve(routes);
      }
    );
  });
}
