var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString('utf-8');
var textByLine = text.split("\n");

var sum = 0;

for(i=0; i < textByLine.length; i++){
    textByLine[i] = parseInt(textByLine[i]);
    textByLine[i] = Math.floor(textByLine[i]/3)-2;
    sum += textByLine[i];
}
console.log(sum);
