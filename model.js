/*let fruits =['apple','banana','orange'];
let colur = ['red','yellow','orange','pink'];
let mixed =['hello',22,true,null];

fruits.push("pineapple");
fruits.unshift('mango');
fruits.pop();
fruits.shift();

console.log(fruits[0]);
console.log(colur.slice(0,3));
console.log(mixed[3]);
*/
let person = {
    Name: "Viyan",
    Age : 20,
    City : "Trichy",
    Phoneno:1321345667,
    isStudent : false
};
//console.log(person.Name);
console.log(person["Age"]);
person.job ="developer";
person.Age=22;
delete person.isStudent;