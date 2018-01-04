

const Box = x => ({ 
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
})

//1. Fusing maps toghether should preserve function composition
const res = Box('squirrels').map(s => s.substr(5)).map(s => s.toUpperCase())

//2. Maped lambda function result should be the same as calling the function on the functor
const res1 = Box('crayons').map(id)

//Lifting a value into a Pointed Functor: of

Task.of()

//Monads





