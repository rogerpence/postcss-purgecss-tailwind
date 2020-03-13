'use strict';

process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const config = require('../config/webpack.prod.config.js');

const compiler = webpack(config);
compiler.run((err, stats) => {
  // do some error/stats printing here
});

