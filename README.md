# line-numbers-stream
> Add line numbers to a stream of text

## Installation

```sh
$ npm install --save line-numbers-stream
```

## Usage

```js
const fs = require('fs');
const source = fs.createReadStream('exampleText.txt');
const addLineNumbers = require('line-numbers-stream');

source.pipe(addLineNumbers).pipe(process.stdout);

// 1: First line
// 2: and the second line.
// 3: ... and so on.

```

## License

MIT © [Even Brenna]()


[npm-image]: https://badge.fury.io/js/line-numbers-stream.svg
[npm-url]: https://npmjs.org/package/line-numbers-stream
[travis-image]: https://travis-ci.org/evenbrenna/line-numbers-stream.svg?branch=master
[travis-url]: https://travis-ci.org/evenbrenna/line-numbers-stream
[daviddm-image]: https://david-dm.org/evenbrenna/line-numbers-stream.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/evenbrenna/line-numbers-stream
