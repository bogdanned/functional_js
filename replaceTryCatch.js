// Replace Try Catch with function Objects
const fs = require('fs')

const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x), 
    chain: f => f(x),   
    inspect: () => `Right(${x})`    
})


const Left = x => ({
    map: _f => Left(x),
    chain: _f => Left(x),       
    fold: (f, _g) => f(x),        
    inspect: () => `Right(${x})`    
})


const fromNullable = x => x != null ? Right(x) : Left(null)

const tryCatch = f => {
    try{
        return Right(f())
    }catch(e){
        return Left(e)
    }
}

const getPort = () =>
    tryCatch(() => fs.readFileSync('./conig.json'))
    .map(c => JSON.parse(c))
    .fold(e => 3000, c => c.port)


console.log(getPort())