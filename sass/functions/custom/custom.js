// npm i -g dart-sass
// node ./sass/functions/custom/custom.js

const sass = require('sass');
const fs = require('fs');

const outFile = "./sass/functions/custom/functions-output.css";

sass.renderSync({  
  file: './sass/functions/custom/functions-input.scss',
  outFile,
  functions: {
    // This function uses the synchronous API, and can be passed to either
    // renderSync() or render().
    'pow($base, $exponent)': function(base, exponent) {
      if (!(base instanceof sass.types.Number)) {
        throw "$base: Expected a number.";
      } else if (base.getUnit()) {
        throw "$base: Expected a unitless number.";
      }

      if (!(exponent instanceof sass.types.Number)) {
        throw "$exponent: Expected a number.";
      } else if (exponent.getUnit()) {
        throw "$exponent: Expected a unitless number.";
      }

      return new sass.types.Number(
        Math.pow(base.getValue(), exponent.getValue())
      );
    },

    // This function uses the asynchronous API, and can only be passed to
    // render().
    'sqrt($number)': function(number, done) {
      if (!(number instanceof sass.types.Number)) {
        throw "$number: Expected a number.";
      } else if (number.getUnit()) {
        throw "$number: Expected a unitless number.";
      }

      done(new sass.types.Number(Math.sqrt(number.getValue())));
    }
  }
}, function(err, result) {
  console.log(result.css.toString());

  if (!err) {
    // Saving here as outFile not tragger saving for some reason
    // similar issue https://stackoverflow.com/questions/42937312/css-file-not-generating-using-node-sass-in-windows
    fs.writeFileSync(outFile, result.css.toString(), (err) => {
      if (err) {
        console.error('Error while writeFile', err)
      }
    });
  }
});
