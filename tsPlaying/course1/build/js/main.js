"use strict";
let username = 'josh';
console.log(username);
let a = 12; //this specifies it to a number type
let b = 6;
let c = '2'; //to a string
console.log(a * b);
// console.log(a / b) This is valid js. However, this is not valid ts
/*

when a change is made in tsc, you need  to

re-compile with

    : tsc main.ts
    
    OR you can set WATCH which will update always

    : tsc main.ts -w
*/
/*
    tsc --init

    creates the tsconfig.json

    then, go to the rootDir and change the file to src

    then, go to the outDir and change the file to build/js.
    This then creates the js files there

    then, tsc -w: watch all files
    
*/
/*

    Then, create test.ts. This then creates the test.hs file in
    js. This then shows that the watch works

    you can then also go to target in tsconfig.json and change
    the target to an older version of js to allow for change in
    older browsers.

        type: es5
    
    Then, you can see that the test.js will change to var instead
    of let
    
    If you delete a main.ts, you need to manually delete it from your js build

*/
/*
    Then, you need to goto tsconfig, and go to the bottom and add
        
        ,
            "include": [
                "src"
            ]

    This specifies which folder to compile ts files to js files in the build folder
*/
/*

when you import js to ts, it will actually still run. However, you would get lots of warnings

If you want to change this, you can do so by uncommenting the emitOnError in tsconfig

*/ 
