let stringArr = ['one', 'hey', 'josh']

let guitars = ['strat', 'les paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'josh'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('jim')

let test = []
let bands: string[] = []
// ^ Empty array
bands.push('jola')
// ^ insert data to the bands string array

// Tuple 

let myTuple: [string, number, boolean] = ['dave', 42, true]
// ^ create strict array and their positions

// objects

let myObj: object
myObj =[]
console.log(typeof myObj)
// show what data type ish

// example object

const exampleObj = {
    prop: 'dave',
    prop2: true,
}

exampleObj.prop = 'josh'

// - - - - - - - - - -

interface Guitarists {
    // this is a class
    name: string,
    active?: boolean, //makes this type optional
    albums: (string | number)[]
}

let evh: Guitarists = {
    name: 'eddie',
    active: false,
    albums: [1984, 5150, 'OU3453']
}

let JP: Guitarists = {
    name: 'Loax',
    active: true,
    albums: ['I', 3430, 'IV']
}

// - - - - - - - - - -

const greetGuitarist = (guitarist: Guitarists) => {
    return `hello ${guitarist.name}!`
}

console.log(greetGuitarist(JP))

// - - - - - - - - - ENUMS - - - - - - - - - - - -

enum Grade {
    U = 1, //you can start it all at 1 here rather then like in java when you have to put all of them as specific values
        // of an array
    D,
    C,
    B,
    A,
}

console.log(Grade.U)
