
// - - - - - - - - - - - - - - Types - - - - - - - - - - - - - - //

let myName: string = 'dave'
let myName2: string
let meaningOfLife: number
let isLoading: boolean
let album: any //defeats TS, and becomes like JS
let album2: string | number  //This is a union type; it says string or a number


// TS keeps the assigned datatype unlike JS

myName = 'josh'
meaningOfLife = 5
isLoading = true
album = true //use when you don't know the receiveing data type 

album2 = 'three'
album2 = 3 // can be both

// - - - - - - - - Create a fucntion - - - - - - - - - //

const sum = (a: number, b: string) =>{
    return a + b
}

// - - - - - - - - union types - - - - - - - -

let postId: string | number //good for postcodes
let isActive: number | boolean //can be more then 2 data types

let re: RegExp = /\w+/g // this is a reg experssion
