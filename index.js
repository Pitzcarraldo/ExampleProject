#!/usr/bin/env node --harmony
'use strict';
const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const prompt = require('inquirer').prompt;
const paramCase = require('param-case');
const copyTemplateDir = require('copy-template-dir');
const pkg = require('./package.json');

program
  .version(pkg.version)
  .parse(process.argv);

function validator(input) {
  if (!input) {
    return 'Input value can not be empty.'
  }
  return true;
}

function logCreatedFiles(targetDir, createdFiles) {
  console.log('\nThis will walk you through creating a new Reason project in '+ targetDir);
  createdFiles.sort().forEach(function (createdFile) {
    const relativePath = path.relative(targetDir, createdFile);
    console.log(chalk.green('create') +' '+ relativePath);
  });
  const message = chalk.gray([
    '',
    chalk.bold('To run your Reason App:'),
    '    cd ' + targetDir,
    '    npm install',
    '    npm start',
    chalk.bold('If you want to use Reason with yarn, please read README-Yarn.md')
  ].join('\n'));
  console.log(message);
}

let vars;

prompt([
  {
    type: 'input',
    name: 'project',
    message: 'Project Name',
    validate: validator
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project Description',
    validate: validator
  },
  {
    type: 'input',
    name: 'version',
    message: 'Version',
    default: '0.0.1',
    validate: validator
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author',
    validate: validator
  },
  {
    type: 'input',
    name: 'username',
    message: 'Github Username',
    validate: validator
  }
]).then(function (answers) {
  vars = answers;
  vars.repository = paramCase(vars.project);
  vars.year = new Date().getFullYear();
  const targetDir = path.resolve(process.cwd(), vars.repository);
  return targetDir;
}).then(function (targetDir) {
  const templateDir = path.resolve(__dirname, 'template');
  copyTemplateDir(templateDir, targetDir, vars, function (err, createdFiles) {
    if (err) {
      throw err;
    }
    logCreatedFiles(targetDir, createdFiles);
  });
}).catch(function (error) {
  console.error(error);
  process.exit(1);
});