const webpack = require('webpack');
const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const postcssPlugins = function (loader) {
  return [
      postcssImports({
          resolve: (url, context) => {
              return new Promise((resolve, reject) => {
                  let hadTilde = false;
                  if (url && url.startsWith('~')) {
                      url = url.substr(1);
                      hadTilde = true;
                  }
                  loader.resolve(context, (hadTilde ? '' : './') + url, (err, result) => {
                      if (err) {
                          if (hadTilde) {
                              reject(err);
                              return;
                          }
                          loader.resolve(context, url, (err, result) => {
                              if (err) {
                                  reject(err);
                              }
                              else {
                                  resolve(result);
                              }
                          });
                      }
                      else {
                          resolve(result);
                      }
                  });
              });
          },
          load: (filename) => {
              return new Promise((resolve, reject) => {
                  loader.fs.readFile(filename, (err, data) => {
                      if (err) {
                          reject(err);
                          return;
                      }
                      const content = data.toString();
                      resolve(content);
                  });
              });
          }
      }),
      postcssUrl({
          filter: ({ url }) => url.startsWith('~'),
          url: ({ url }) => {
              const fullPath = path.join(projectRoot, 'node_modules', url.substr(1));
              return path.relative(loader.context, fullPath).replace(/\\/g, '/');
          }
      }),
      postcssUrl([
          {
              // Only convert root relative URLs, which CSS-Loader won't process into require().
              filter: ({ url }) => url.startsWith('/') && !url.startsWith('//'),
              url: ({ url }) => {
                  if (deployUrl.match(/:\/\//) || deployUrl.startsWith('/')) {
                      // If deployUrl is absolute or root relative, ignore baseHref & use deployUrl as is.
                      return `${deployUrl.replace(/\/$/, '')}${url}`;
                  }
                  else if (baseHref.match(/:\/\//)) {
                      // If baseHref contains a scheme, include it as is.
                      return baseHref.replace(/\/$/, '') +
                          `/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
                  }
                  else {
                      // Join together base-href, deploy-url and the original URL.
                      // Also dedupe multiple slashes into single ones.
                      return `/${baseHref}/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
                  }
              }
          },
          {
              // TODO: inline .cur if not supporting IE (use browserslist to check)
              filter: (asset) => {
                  return maximumInlineSize > 0 && !asset.hash && !asset.absolutePath.endsWith('.cur');
              },
              url: 'inline',
              // NOTE: maxSize is in KB
              maxSize: maximumInlineSize,
              fallback: 'rebase',
          },
          { url: 'rebase' },
      ]),
      PostcssCliResources({
          deployUrl: loader.loaders[loader.loaderIndex].options.ident == 'extracted' ? '' : deployUrl,
          loader,
          filename: `[name]${hashFormat.file}.[ext]`,
      }),
      autoprefixer({ grid: true }),
  ];
};



module.exports = env => {

  const dev = (env && env.NODE_ENV) !== "production";

  let plugins = [
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(!dev)
    }),
    new ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.resolve(__dirname, '../src')
    )
  ]

  if (!dev) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ sourcemap: false }));
  }

  const commonConfig = {
    context: __dirname,
    devtool: dev ? "inline-sourcemap" : false,
    module: {
      "rules": [
        {
          "test": /\.html$/,
          "loader": "raw-loader"
        },
        {
          "test": /\.(eot|svg|cur)$/,
          "loader": "file-loader",
          "options": {
            "name": "[name].[hash:20].[ext]",
            "limit": 10000
          }
        },
        {
          "test": /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
          "loader": "url-loader",
          "options": {
            "name": "[name].[hash:20].[ext]",
            "limit": 10000
          }
        },
        {
          "exclude": [
            path.join(process.cwd(), "src\\styles.css")
          ],
          "test": /\.css$/,
          "use": [
            {
              "loader": "raw-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                "ident": "embedded",
                "plugins": postcssPlugins,
                "sourceMap": true
              }
            }
          ]
        },
        {
          "exclude": [
            path.join(process.cwd(), "src\\styles.css")
          ],
          "test": /\.scss$|\.sass$/,
          "use": [
            {
              "loader": "raw-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                "ident": "embedded",
                "plugins": postcssPlugins,
                "sourceMap": true
              }
            },
            {
              "loader": "sass-loader",
              "options": {
                "sourceMap": true,
                "precision": 8,
                "includePaths": []
              }
            }
          ]
        },
        {
          "exclude": [
            path.join(process.cwd(), "src\\styles.css")
          ],
          "test": /\.less$/,
          "use": [
            {
              "loader": "raw-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                "ident": "embedded",
                "plugins": postcssPlugins,
                "sourceMap": true
              }
            },
            {
              "loader": "less-loader",
              "options": {
                "sourceMap": true
              }
            }
          ]
        },
        {
          "exclude": [
            path.join(process.cwd(), "src\\styles.css")
          ],
          "test": /\.styl$/,
          "use": [
            {
              "loader": "raw-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                "ident": "embedded",
                "plugins": postcssPlugins,
                "sourceMap": true
              }
            },
            {
              "loader": "stylus-loader",
              "options": {
                "sourceMap": true,
                "paths": []
              }
            }
          ]
        },
        {
          "include": [
            path.join(process.cwd(), "src\\styles.css")
          ],
          "test": /\.css$/,
          "use": [
            "style-loader",
            {
              "loader": "raw-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                "ident": "embedded",
                "plugins": postcssPlugins,
                "sourceMap": true
              }
            }
          ]
        },
        {
          "include": [
            path.join(process.cwd(), "src\\styles.css")
          ],
          "test": /\.scss$|\.sass$/,
          "use": [
            "style-loader",
            {
              "loader": "raw-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                "ident": "embedded",
                "plugins": postcssPlugins,
                "sourceMap": true
              }
            },
            {
              "loader": "sass-loader",
              "options": {
                "sourceMap": true,
                "precision": 8,
                "includePaths": []
              }
            }
          ]
        },
        {
          "include": [
            path.join(process.cwd(), "src\\styles.css")
          ],
          "test": /\.less$/,
          "use": [
            "style-loader",
            {
              "loader": "raw-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                "ident": "embedded",
                "plugins": postcssPlugins,
                "sourceMap": true
              }
            },
            {
              "loader": "less-loader",
              "options": {
                "sourceMap": true
              }
            }
          ]
        },
        {
          "include": [
            path.join(process.cwd(), "src\\styles.css")
          ],
          "test": /\.styl$/,
          "use": [
            "style-loader",
            {
              "loader": "raw-loader"
            },
            {
              "loader": "postcss-loader",
              "options": {
                "ident": "embedded",
                "plugins": postcssPlugins,
                "sourceMap": true
              }
            },
            {
              "loader": "stylus-loader",
              "options": {
                "sourceMap": true,
                "paths": []
              }
            }
          ]
        },
        {
          "test": /\.ts$/,
          "loader": "@ngtools/webpack"
        }
      ]
    },
    resolve: {
      "extensions": [
          ".ts",
          ".js"
      ],
      modules: [
        __dirname,
        'node_modules',
      ],
    },
    plugins: plugins,
  }

  return [
    Object.assign({
      entry: {
        loader: "./singleSpaEntry.js"
      },
      output: {
        path: __dirname + "/lib",
        filename: "[name].js",
        libraryTarget: 'amd'
      }

    }, commonConfig),
    //add here extra packages when needed, add it in the scripts_list_creator files filter to exclude it from the build
    // Object.assign({
    //   entry: {
    //     menu: "./src/dev-apps/menu.ts"
    //   },
    //   output: {
    //     path: __dirname + "/lib",
    //     filename: "[name].js",

    //   },
    // }, commonConfig)
  ]
};
