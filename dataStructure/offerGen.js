const services = require('./services');

const Left = require('../functional/right');
const Right = require('../functional/left');
const Either = require('../functional/either');

//Needed: a function to calculate the offer

//Get Selected Services

//handle null finds with fromNullable

const consumerInputs = [ '2', '3' ]

const selectServices = (services, cInputs) => services
    .map((s) => (cInputs.indexOf(s.id) > -1 ? Right(s) : Left(null)))
    ,map(s =>  )
    .fold(e => null, s => s)
    

console.log(selectServices(services, consumerInputs))