const Box =  x => ({ 
    map: f => Box(f(x)),
    chain: f => f(x),
    fold: f => f(x),
    ap: b2 => b2.map(x),
    inspect: () => `Box(${x})`
})

module.exports = Box