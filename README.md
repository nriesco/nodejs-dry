Make your nodejs code available in your browser
==========

Install
````
express --sessions --css less --ejs nodejs-dry #only needed if you start from scratch
cd nodejs-dry/
npm install
````

To run tests (needs mocha)
````
mocha --ui tdd --reporter list /Users/nriesco/git/nodejs-dry/tests/basic.js
````

Reusable code in nodejs
==========

Writing reusable code in nodejs is very simple, you just need to do something like this:

1. Create a file: utils.js

1. Make it available to node:
````
exports.verifySomething = function (text) {
  if (text == 'someText') {
    return true;
  } else {
    return false;
  }
}
````

1. Include it and use it:
````
var utils = require('path/to/utils.js');
console.log(utils.verifySomething('otherText')); // false!
````

Making it available in your browser
==========

pending

