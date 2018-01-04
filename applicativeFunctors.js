const Box = require('./box')
const { List } = require('immutable-ext') 

const res = Box(x => x + 1 ).ap(Box(2))

console.log(res)

const res2 = Box(x => y => x + y ).ap(Box(2)).ap(Box(3))

console.log(res2)

const res3 = List.of(x => x + 3).ap(List([1, 2, 3]))

console.log(res3)

const merch = () => List.of(x => y => z => `${x}-${y}-${z}`)
                        .ap(List([`TShirt`, 'Sweater']))
                        .ap(List([`Large`, 'Medium', 'Small']))
                        .ap(List([`Red`, 'Black', 'Blue']))
                        
const res4 = merch()

console.log(res4)