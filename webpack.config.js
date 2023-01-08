
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

          // Images
          { test: /\.(jpg|png|gif|svg)$/,
            use:[{
                loader: 'file-loader',
                options:{
                  outputPath: 'Img/'
                }
            }]
          },

          // Fonts
        { test: /\.(ttf|eot|woff|woff2)$/,
        use:[{
          loader: 'file-loader',
          options:{
            outputPath: 'fonts/'
          }
        }]
      }
        ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
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