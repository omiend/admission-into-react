module.exports = {

  entry: __dirname + "/src/app.js",

  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
