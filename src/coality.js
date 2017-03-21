const shell = require('shelljs');
require('colour');

const { printEnd, getColour } = require('./output');
const { parseData, generateErrorLocation } = require('./parser');

const runCoality = () => {
  shell.exec(`coala --json`, {async:true, silent:true}, function(code, stdout, stderr) {
    console.log();
    console.log('Coala Output:');
    console.log();

    const parsed = parseData(stdout);

    if(!parsed) return;

    Object.keys(parsed).forEach(sectionName => {
      const sectionErrors = parsed[sectionName];

      sectionErrors.forEach(errorData => {
        if (errorData.severity === 0) return;

        const colour = getColour(errorData.severity);
        const files = errorData.affected_code.map(generateErrorLocation);

        console.log(`Bear: ${errorData.origin}`[colour]);
        console.log(`File(s): ${files.join(',')}`[colour]);
        console.log(`Message: ${errorData.message}`[colour]);

        console.log();
        console.log();
      });
    });

    printEnd();
  });
};

module.exports = {
  runCoality
};
