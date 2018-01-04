const Task = require('data.task')

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

const lauchMissiles = () => new Task((rej, res) => {
    console.log("launch missiles!")
    res("missile")
}) 

//fork is called to execute the buildt function

lauchMissiles()
.map(x => x + 1)
.fork( e => console.log('err: ', e), x => console.log('success: ', x))