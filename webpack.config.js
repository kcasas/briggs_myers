const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader"
            // options: {
            //   modules: true,
            //   importLoaders: 1,
            //   sourceMap: true
            // }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: "file-loader"
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Briggs Myers Test",
      template: require("html-webpack-template"),
      inject: false,
      appMountId: "app",
      headHtmlSnippet: `<link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap" rel="stylesheet">`,
      meta: [
        {
          name: "og:title",
          content: "Taga Pisay EVC ka ba talaga?"
        },
        {
          name: "og:description",
          content:
            "Answer this quiz to know what subject you will teach if you were a Pisay teacher?"
        },
        {
          name: "og:image",
          content:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZlNa9_1_648llp4M24wCedYR7PocaQ6lUav2IYA7TijkD0lTUw&s"
        },
        {
          name: "fb:app_id",
          content: 641499649714690
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "science.html",
      title: "Science!",
      template: require("html-webpack-template"),
      inject: false,
      appMountId: "app",
      headHtmlSnippet: `<link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap" rel="stylesheet">`,
      meta: [
        {
          name: "og:title",
          content: "Science"
        },
        {
          name: "og:description",
          content:
            "Answer this quiz to know what subject you will teach if you were a Pisay teacher?"
        },
        {
          name: "og:image",
          content:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZlNa9_1_648llp4M24wCedYR7PocaQ6lUav2IYA7TijkD0lTUw&s"
        },
        {
          name: "fb:app_id",
          content: 641499649714690
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "math.html",
      title: "Math!",
      template: require("html-webpack-template"),
      inject: false,
      appMountId: "app",
      headHtmlSnippet: `<link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap" rel="stylesheet">`,
      meta: [
        {
          name: "og:title",
          content: "Math"
        },
        {
          name: "og:description",
          content:
            "Answer this quiz to know what subject you will teach if you were a Pisay teacher?"
        },
        {
          name: "og:image",
          content:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZlNa9_1_648llp4M24wCedYR7PocaQ6lUav2IYA7TijkD0lTUw&s"
        },
        {
          name: "fb:app_id",
          content: 641499649714690
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "tech.html",
      title: "Tech!",
      template: require("html-webpack-template"),
      inject: false,
      appMountId: "app",
      headHtmlSnippet: `<link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap" rel="stylesheet">`,
      meta: [
        {
          name: "og:title",
          content: "Tech"
        },
        {
          name: "og:description",
          content:
            "Answer this quiz to know what subject you will teach if you were a Pisay teacher?"
        },
        {
          name: "og:image",
          content:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZlNa9_1_648llp4M24wCedYR7PocaQ6lUav2IYA7TijkD0lTUw&s"
        },
        {
          name: "fb:app_id",
          content: 641499649714690
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "humanities.html",
      title: "Humanities!",
      template: require("html-webpack-template"),
      inject: false,
      appMountId: "app",
      headHtmlSnippet: `<link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600&display=swap" rel="stylesheet">`,
      meta: [
        {
          name: "og:title",
          content: "Humanities"
        },
        {
          name: "og:description",
          content:
            "Answer this quiz to know what subject you will teach if you were a Pisay teacher?"
        },
        {
          name: "og:image",
          content:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZlNa9_1_648llp4M24wCedYR7PocaQ6lUav2IYA7TijkD0lTUw&s"
        },
        {
          name: "fb:app_id",
          content: 641499649714690
        }
      ]
    })
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};

module.exports = config;
