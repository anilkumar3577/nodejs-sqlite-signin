const path = require('path');

module.exports = {
  entry: './app.js', // Replace with the path to your entry file
  output: {
    filename: 'bundle.js', // The name of the output bundle
    path: path.resolve(__dirname, 'dist'), // The output directory
  },
  // Add any loaders or plugins you need here
};
