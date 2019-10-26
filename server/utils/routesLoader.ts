import glob from 'glob';

export default (dirname: string): Promise<object[]> => {
  return new Promise((resolve, reject) => {
    const routes: object[] = [];
    glob(
      `${dirname}/*`,
      {
        ignore: '**/index.js',
      },
      (err, files: string[]) => {
        if (err) {
          return reject(err);
        }
        files.forEach((file: string): void => {
          const route:object = require(file);
          routes.push(route);
        });
        return resolve(routes);
      },
    );
  });
};
