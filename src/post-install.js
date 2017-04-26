#!/usr/bin/env node
const fs = require('fs');
const appRoot = require('app-root-path');
require('colour');

const cssLintRules = `{
  "unique-headings": false
}`;
const cssLintPath = `${appRoot}/.csslintrc`;

const coafile = `
[Javascript]
bears = ESLintBear, SpaceConsistencyBear
files = js/*.js
use_spaces = True
 
[CSS]
bears = CSSLintBear, SpaceConsistencyBear
files = styles/*.css
use_spaces = True
`;
const coafilePath = `${appRoot}/.coafile`;


console.log('Coality Post-Install:');
console.log();

fs.writeFile(`${cssLintPath}`, cssLintRules, (err) => {
  console.log(`> Writing .csslintrc to ${cssLintPath}`);
  if (err) return console.log('>' + 'Could not write .csslintrc'.red);
  console.log('> .csslintrc created!');
  console.log();
});


fs.writeFile(`${coafilePath}`, coafile, (err) => {
  console.log(`> Writing basic .coafile to ${cssLintPath}`);
  if (err) return console.log('>' + 'Could not write .coafile'.red);
  console.log('> .coafile created!');
  console.log();
});
