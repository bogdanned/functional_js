module.exports = [
    {
        id: "1",
        name: "service1",        
        products: null,
        price: 444
    },
    {
        id: "2",
        name: "service2",
        price: 23,        
        products: [
            {
                id: "1",
                incompatible: ["4"],
                price: 123               
            },
            {
                id: "2",
                price: 234                
            },
        ]
    },
    {
        id: "1",
        name: "service3",
        price: 134,        
        products: [
            {
                id: "3",
                incompatible: ["4"],
                price: 22                
            },
            {
                id: "4",
                price: 2134                
            },
        ]
    }
]