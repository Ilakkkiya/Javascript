const prompt = require("prompt-sync")();

var marks = prompt("Enter you mark:")
let mark = parseInt(marks)
if (mark==100 & mark>85){
    console.log("A grade")
}
else if(mark<=85 & mark>=60)
{
    console.log("B grade")
}
else if(mark<=60 & mark>=40){
    console.log("C grade")
}
else{
    console.log("fail")
}
console.log(mark);