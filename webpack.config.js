const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Указываем точку входа
  output: {
    path: path.resolve(__dirname, 'dist'), // По умолчанию требуется указывать начальную корневую папку системы, метод resolve помогает этого избежать
    filename: 'index.js' // Указываем название готового файла
  }, // Указываем какую папку будем создавать и как будет называться файл
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My frist title by Webpack',
      template: './src/index.html',
      filename: 'index.html'
    }),
    
    new MiniCSSExtractPlugin()
  ]
}