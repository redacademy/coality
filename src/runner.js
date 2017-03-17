#! /usr/bin/env node
const { printWelcome } = require('./output');
const { runTidyHtml } = require('./tidy');
const { runCoality } = require('./coality');

const run = () => {
  printWelcome();
  runTidyHtml();
  runCoality();
}

run();
