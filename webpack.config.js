
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    mode: "production", //mode: "development",
    devtool: "source-map",
    module: {
      rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader", // Creates `style` nodes from JS strings
              "css-loader",   // Translates CSS into CommonJS
              "sass-loader",  // Compiles Sass to CSS
            ],
          },
          {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'docs'),
      },
      compress: true,
      port: 9000,
      client: {
        logging: 'none'
      },
    },
};
