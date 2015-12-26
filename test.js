'use strict';

import test from 'ava';
import fs from 'fs';
import lns from '.';

test(t => {
  fs.createReadStream('./exampleText.txt').pipe(lns);
  let lineCount = 0;

  lns.on('readable', () => {
    lineCount++;
    let buffer = lns.read();
    let line = buffer ? buffer.toString() : "";

    if (line.length > 0) {
      t.assert(line.charAt(0) === lineCount.toString());
    }
  });
});
