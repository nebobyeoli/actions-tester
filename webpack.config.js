const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: './module-tester/scripts.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'module-tester/dist'),
        filename: 'main.js'
    },
    // resolve: {
    //     alias: { 'node_modules': path.join(__dirname, 'node_modules') }
    // },
    externals: nodeExternals()
};

// <script src="dist/webpack.bundle.js"></script>
