let price = require('crypto-price')

let base = 'USD'
let crypto = 'ETH'

price.getCryptoPrice(base, crypto).then(obj => { // Base for ex - USD, Crypto for ex - ETH  
    console.log(obj.price)
}).catch(err => {
    console.log(err)
})
 