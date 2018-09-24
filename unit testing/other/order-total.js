function orderTotal(fetch, order) {
    return fetch('https://vatapi.com/v1/ip-check?address=' + order.country)
        .then(response => response.json())
        .then(data => data.rates.standard.value)
        .then(vat => order.items.reduce((prev, cur) =>
        prev + (cur.price * (cur.quantity || 1)), 0) * (1 + vat/100))

    return Promise.resolve(order.items.reduce((prev, cur) =>
        prev + (cur.price * (cur.quantity || 1)), 0));
}

module.exports = orderTotal;