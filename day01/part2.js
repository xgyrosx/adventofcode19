var fs = require("fs");
var text = fs.readFileSync("./data.txt").toString('utf-8');
var textByLine = text.split("\n");

var sum = 0;
var fuels = [];

function calculateFuel(module){
    if(module > 0) {
        module = Math.floor(module/3)-2;
        if (module > 0) {
            fuels.push(module)
        } else {
            return null;
        }
        calculateFuel(module);
        console.log(module);
        console.log(fuels);
    } else {
        return null;
    }
}

for(i=0; i < textByLine.length; i++){
    textByLine[i] = parseInt(textByLine[i]);
    textByLine[i] = calculateFuel(textByLine[i]);
}

for(j=0; j < fuels.length; j++){
    sum += fuels[j];
}

console.log(sum);
