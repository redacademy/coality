const shell = require('shelljs');
const glob = require("glob");
require('colour');


// options is optional
const runTidyHtml = () => {
  glob("**/*.html", { ignore: 'node_modules/**' }, function (er, files) {
    if (!files.length) return;

    console.log();
    console.log('HTML Tidy Output:');
    console.log();

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
