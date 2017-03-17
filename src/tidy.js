const shell = require('shelljs');
const glob = require("glob");
require('colour');


// options is optional
const runTidyHtml = () => {
  glob("**/*.html", { ignore: 'node_modules/**' }, function (er, files) {
    console.log();
    console.log('HTML:');

    files.forEach((fileName) => {
      shell.exec(`tidy -e ${fileName}`, {async:true, silent:true}, (code, stdout, stderr) => {
        const lines = stderr.split(/\r?\n/).filter(line => /^line.+/.test(line));

        if (lines.length) {
          console.log(`File: ${fileName}`.red);
          lines.forEach(line => console.log(line.red));
          console.log();
        }
      });
    });
  });
}

module.exports = {
  runTidyHtml
}
