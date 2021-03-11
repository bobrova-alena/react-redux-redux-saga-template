const path = require('path');

module.exports = {
    context: process.cwd(), // to automatically find tsconfig.json
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: [
                    { 
                        loader: 'ts-loader', 
                        options: { transpileOnly: true } 
                    },
                    {
                        loader: 'thread-loader',
                        options: { workerParallelJobs: 2 } //node-sass has a bug which blocks threads from the Node.js thread pool. When using it with the thread-loader set workerParallelJobs: 2
                    }
                ]
            },
            {
                // Preprocess 3rd party .css files located in node_modules
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // Preprocess our own .css files
                // This is the place to add your own loaders (e.g. sass/less etc.)
                // for a list of loaders, see https://webpack.js.org/loaders/#styling
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader', // to inject the result into the DOM as a style block
                    'css-modules-typescript-loader',  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
                    { 
                        loader: "css-loader", // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                        options: { modules: true } 
                    },  
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require("node-sass"),
                            sassOptions: {
                                fiber: false,
                            },
                        },
                    }
                ],
            }
        ]
    }
};