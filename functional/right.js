const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x), 
    chain: f => f(x),   
    inspect: () => `Right(${x})`    
})

module.exports = Right