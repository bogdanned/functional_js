const Box = require('./box')


const res = Box(x => x + 1 ).ap(Box(2))

console.log(res)


const res2 = Box(x => y => x + y ).ap(Box(2)).ap(Box(3))

console.log(res2)

