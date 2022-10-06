var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0])
var b = parseFloat(lines[1])

function media () {
    med = (a + b) / 2
    console.log('MEDIA = ' + med.toFixed(2))
}

media()