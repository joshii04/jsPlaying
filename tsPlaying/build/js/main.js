"use strict";
let username = 'dave';
console.log(username);
/*

when a change is made in tsc, you need to

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

*/
