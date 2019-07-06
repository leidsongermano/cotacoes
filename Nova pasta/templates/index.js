var express = require(‘express’);
var app = express();
app.listen(3000, function () {
  console.log(‘server running on port 3000’);
})

var PythonShell = require('python-shell');

var options = {
  mode: 'text',
  encoding: 'utf8',
  pythonOptions: ['-u'],
  scriptPath: './',
  args: [0,1,1]
};

var test = new PythonShell('machine_learning.py', options);
test.on('message', function(message) {
  console.log(message);
});