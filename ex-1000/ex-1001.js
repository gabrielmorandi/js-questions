var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0])
var b = parseInt(lines[1])

function soma () {
    x = a + b
    console.log('X = ' + x)
}

soma(a, b);