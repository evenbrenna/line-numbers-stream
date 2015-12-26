'use strict';

const fs = require('fs');
const addLineNumbers = require('.');
const source = fs.createReadStream('exampleText.txt');

source.pipe(addLineNumbers).pipe(process.stdout);
