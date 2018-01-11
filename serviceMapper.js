const mult = require('./mult')

const numeral = require('numeral')

const Box =  x => ({ 
    map: f => Box(f(x)),
    chain: f => f(x),
    fold: f => f(x),
    ap: b2 => b2.map(x),
    inspect: () => `Box(${x})`
})

const calculateTotalPrice = s => ({
    ...s,
    totalPrice: s.basePrice + s.wage * s.setupTime + s.margin + s.addition 
})

const format = p => (numeral(p).format('0,00.00'))

const currency = (p, c) => (p + ' ' + c)


const formatPrices = s => ({
    ...s,
    totalPrice: format(s.totalPrice)
})

const addCurrency = (s, c) => ({
    ...s,
    totalPrice: currency(s.totalPrice, c)
})

const vat = (p, v) => (p/100 * v)

const addVatInfo = (s, vatRate) => ({
    ...s,
    vatAmount: vat(s.totalPrice, vatRate)
})

const serviceItem = {
    name: 'BadeWannne',
    offerText: 'Badde Wanne Offer Text',
    basePrice: 50,
    addition: 10,
    margin: 20,
    setupTime: 40,
    wage: 4
}


const test = Box(serviceItem)

//Composing this object still does not work ... the function should be created at runtime

console.log(
    Box(serviceItem )
          .map(calculateTotalPrice)
          .map(addVatInfo(19))
          .map(formatPrices)
          .map(addCurrency('€')) 
          .map(addVatInfo)                    
          .fold(x => x))