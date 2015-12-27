const fs = require('fs'),
  path = require('path'),
  postcss = require('postcss'),
  stylelint = require('stylelint'),
  reporter = require('postcss-reporter');

const css = fs.readFileSync('example/style.css', 'utf-8');
postcss([stylelint, reporter({clearMessages: true})])
  .process(css, {from: './style.css'})
  .then(result => {
    // console.log(result.css);
  }).catch(error => console.log(error));
