const path = require('path')
const webpack = require('webpack')
const nib = require('nib');
const rupture = require('rupture');
const sgrid = require('s-grid')

module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    // import '@storybook/addon-links/register';
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    'storybook-addon-designs/register'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            appendTsSuffixTo: [/\.vue$/]
        }
    });
    config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    });
    config.module.rules.push({
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: {
            loader: 'url-loader',
        },
        include: [ 
            path.resolve(__dirname, '../public'),
            path.resolve(__dirname, '../src'),
        ]
    });
    config.module.rules.push({
        test: /\.styl$/,
        use: ['style-loader', 'css-loader?url=false',
             {
                loader: 'stylus-loader',
                options: {
                    use: [nib(), rupture(), sgrid()],
                    import: [
                        path.join(__dirname, '../src/css/reset.styl'),
                        path.join(__dirname, '../src/css/root-white.styl'),
                        path.join(__dirname, '../src/css/fonts.styl')
                    ],
                }
            } 
        ],
        include: [ path.resolve(__dirname, '../'), path.resolve(__dirname, '../public'), path.resolve(__dirname, '../src') ]
    });
    config.module.rules.push({
        test: /\.pug$/,
        loader: '@pointotech/pug-plain-loader'
    })
    config.plugins.push(
        new webpack.LoaderOptionsPlugin({
            test: /\.styl$/,
            stylus: {
                default: {
                    use: [nib(), rupture(), sgrid()]
                }
            }
        })
    );
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../public"),
        path.resolve(__dirname, "../src")
      ];

    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
    config.resolve.extensions.push('.ts')

    return config;
  },
};