"use strict";
let stringArr = ['one', 'hey', 'josh'];
let guitars = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'josh';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('jim');
let test = [];
let bands = [];
// ^ Empty array
bands.push('jola');
// ^ insert data to the bands string array
// Tuple 
let myTuple = ['dave', 42, true];
// ^ create strict array and their positions
// objects
let myObj;
myObj = [];
console.log(typeof myObj);
// show what data type ish
// example object
const exampleObj = {
    prop: 'dave',
    prop2: true,
};
exampleObj.prop = 'josh';
let evh = {
    name: 'eddie',
    active: false,
    albums: [1984, 5150, 'OU3453']
};
let JP = {
    name: 'Loax',
    active: true,
    albums: ['I', 3430, 'IV']
};
// - - - - - - - - - -
const greetGuitarist = (guitarist) => {
    return `hello ${guitarist.name}!`;
};
console.log(greetGuitarist(JP));
// - - - - - - - - - ENUMS - - - - - - - - - - - -
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    // of an array
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
