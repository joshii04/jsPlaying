"use strict";
// - - - - - - - - - - - - - - Types - - - - - - - - - - - - - - //
let myName = 'dave';
let myName2;
let meaningOfLife;
let isLoading;
let album; //defeats TS, and becomes like JS
let album2; //This is a union type; it says string or a number
// TS keeps the assigned datatype unlike JS
myName = 'josh';
meaningOfLife = 5;
isLoading = true;
album = true; //use when you don't know the receiveing data type 
album2 = 'three';
album2 = 3; // can be both
// - - - - - - - - Create a fucntion - - - - - - - - - //
const sum = (a, b) => {
    return a + b;
};
// - - - - - - - - union types - - - - - - - -
let postId; //good for postcodes
let isActive; //can be more then 2 data types
let re = /\w+/g; // this is a reg experssion
