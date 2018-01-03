


const Box = x => ({ 
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
})



const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),    
    inspect: () => `Right(${x})`    
})


const Left = x => ({
    map: _f => Left(x),
    fold: (f, _g) => f(x),        
    inspect: () => `Right(${x})`    
})

const Either = Right || Left


const testRight = Right(4).map(s => s + 1).fold(s => `Error: ${s}`, s => s)
const testLeft = Left(4).map(s => s + 1).fold(s => `Error: ${s}`, s => s)


console.log(testRight)

console.log(testLeft)