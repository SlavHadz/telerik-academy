const fetch = require('node-fetch');
const result =
    fetch('https://vatapi.com/v1/ip-check?address=DE', {
        headers: {
            'apikey': process.env.VAT_API_KEY
        }
    })
    .then(response => response.json())
    .then(data => data.rates.standart.value)

