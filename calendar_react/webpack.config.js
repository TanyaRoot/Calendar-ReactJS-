var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    watch: true,

    // //если вотчер не бумбум, то poll его внатури
    // watchOptions: {
    //   poll: true
    // },
    // devServer: {
    //     proxy: [{
    //         path: '/api/',
    //         target: 'http://localhost:3001'
    //     }],
    //     historyApiFallback: true
    // },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(jpg|png|gif|svg)$/i,
              loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
            }
        ]
    }
}
