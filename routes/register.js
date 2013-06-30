
/*
* registers a variable so it can be used on client-side
* javascript setting a namespace/scope
*
* if called using variableName = 'exports' it will check 
* whether or not the variable 'exports' is set, and if not, 
* set it with a default value
*
* if called using other value for variableName, thet it will
* set that value as the variable containing what was in the
* object 'exports' and then proceed to empty the latter
*
*/
exports.index = function(req, res) {
  var variableName = req.params.variableName;

  if (variableName === 'exports') {
    var response = "\
      if (exports === undefined) {\
        var exports =  {};\
      }";
  } else {
    var response = "\
      var " + variableName + " = exports;\
      exports = {};"
  }

  // send the content as javascript
  res.writeHead(200, {
    "Content-Type": "application/javascript"
  });
  res.end(response);
};

/*

this is the code:

// first code
// set the variable if undefined
if (exports === undefined) {
  var exports =  {};
}

// second code
var someName = exports;
exports = {};
*/
