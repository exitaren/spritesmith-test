var SpriteLight = require('webpack-spritesmith');
var SpriteDark = require('webpack-spritesmith');
var path = require('path');

module.exports = {
  configureWebpack: config => {
    config.module.rules[
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: {
            loader: ['file-loader', 'scss-loader'],
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: '../images/',
            }
          }
        }
      ]
    config.plugins.push(
      new SpriteLight({
        src: {
          cwd: path.resolve(__dirname, 'src', 'assets', 'images-light'),
          glob: '*.png'
        },
        target: {
          image: path.resolve(__dirname, 'src/spritesmith-generated/sprite-light.png'),
          css: path.resolve(__dirname, 'src/spritesmith-generated/sprite-light.scss')
        },
        apiOptions: {
          cssImageRef: "../spritesmith-generated/sprite-light.png"
        },
        // retina: {
        //   classifier: {
        //   //   type: 'retina',
        //   //   normalName: 'src/spritesmith-generated/sprite-light.png',
        //   //   retinaName: 'src/spritesmith-generated/sprite-light.png',
        //   },
        //   targetImage: 'src/spritesmith-generated/sprite-light.png',
        //   cssImageRef: 'src/spritesmith-generated/sprite-light.scss',
        // }
      }),
      new SpriteDark({
        src: {
          cwd: path.resolve(__dirname, 'src', 'assets', 'images-dark'),
          glob: '*.png'
        },
        target: {
          image: path.resolve(__dirname, 'src/spritesmith-generated/sprite-dark.png'),
          css: path.resolve(__dirname, 'src/spritesmith-generated/sprite-dark.scss')
        },
        apiOptions: {
          cssImageRef: "../spritesmith-generated/sprite-dark.png"
        }
      })
    )
  }
}