var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString("utf-8");
var textByLine = text.split(",", 4);

console.log(textByLine);
