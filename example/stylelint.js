const fs = require('fs'),
  path = require('path'),
  postcss = require('postcss'),
  stylelint = require('stylelint'),
  reporter = require('postcss-reporter');

const content = fs.readFileSync('example/style.css');

const css = postcss([
  stylelint,
  reporter({clearMessages: true})
]).process(content).css;
