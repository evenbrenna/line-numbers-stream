'use strict';

let stream = require('stream');
let lineNumAdder = new stream.Transform();
let count = 0;

lineNumAdder._transform = (chunk, enc, next) => {
  let data = chunk.toString();
  if (this._lastLineData) { data = this._lastLineData + data; }

  var lines = data.split('\n');
  this._lastLineData = lines.splice(lines.length-1,1)[0];
  
  lines.forEach( (line) => {
    count += 1;
    lineNumAdder.push(count + ": " + line + '\n');
  });

  next();
};

lineNumAdder._flush = (done) => {
  if (this._lastLineData) { this.push(this._lastLineData); }
  this._lastLineData = null;
  done();
};

module.exports = lineNumAdder;
