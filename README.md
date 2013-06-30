Make your nodejs code available in your browser
==========

Install
````
express --sessions --css less --ejs nodejs-dry #only needed if you start from scratch
cd nodejs-dry/
npm install
````

To run tests (needs mocha - http://visionmedia.github.io/mocha/)
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

1. First, you need nodejs code to be available on your public directory. Be careful not to include passwords or any secret algorithm. Remember this code will be available to anyone.

2. Then you will need to include some javascripts within your client-side code

````<script type="text/javascript" src="/register/exports"></script>````

3. Now you are ready to import your modules

````<script type="text/javascript" src="/javasripts/utils.js"></script>````

4. After this utils will be available by using ```exports.myMethod()``` but it will be better to use ```utils.myMethod()```. In order to do so, you'll need to include the following script:

````<script type="text/javascript" src="/register/utils"></script>````

where utils is the name you'll use to refer to this module.

5. Now you can start using ```utils.myMethod()```

6. Repeat the last two steps as needed

7. NOTE: if you register the same module name twice (include the module + register), the first one will not be accesible.

8. What happens if you don't register your scripts? Well, register/exports is mandatory, but the rest of the register steps are optional. If you have utils.someMethod and utils2.someMethod you will only be able to access them by using exports.someMethod (instead of utils.someMethod), and of course, only one (the latter) will be available
