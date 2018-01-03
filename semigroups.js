const Map = require("immutable-ext").Map

const Sum = x => 
({
    x,
    concat: ({x: y}) => Sum(x + y),
    inspect: () => `Sum(${x})`,
    empty: () => Sum(0)
})


const All = x => 
({
    x,
    concat: ({x: y}) => All(x && y),
    inspect: () => `All(${x})`,
    empty: () => All(true)    
})


const First = x => 
({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`
})


//Semigroups and Monoids


const acct1 = Map({
    name: First('Nico'),
    isPaid: All(true),
    points: Sum(10)
})

const acct2 = Map({
    name: First('Nico'),
    isPaid: All(false),
    points: Sum(2)
})


const res = acct1.concat(acct2)

console.log(res.toJS())