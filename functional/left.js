const Left = x => ({
    map: _f => Left(x),
    chain: _f => Left(x),       
    fold: (f, _g) => f(x),        
    inspect: () => `Right(${x})`    
})

module.exports = Left