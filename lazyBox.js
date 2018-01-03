const Task = require('data').task

const Box = x => ({ 
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
})


const LazyBox = g => ({ 
    map: f => LazyBox(f(g())),
    fold: f => f(g()),
    inspect: () => `Box(${x})`
})

//Capture Side Effects in a Task



