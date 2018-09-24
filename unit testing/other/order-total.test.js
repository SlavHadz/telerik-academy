const orderTotal = require('./order-total');

it.only('calls vatapi.com if country code spcified', () => {
    let isFakeFetchCalled = false;
    const fakeFetch = (url) => {
        expect(url).toBe('https://vatapi.com/v1/ip-check?address=DE')
        isFakeFetchCalled = true;
        return Promise.resolve({
            json: () => Promise.resolve({
                rates: {
                    standard: {
                        value: 19
                    }
                }
            })
        })
    };
    return orderTotal(fakeFetch, {
        country: 'DE',
        items: [
            {name: 'Dragon waffles', price: 20, quantity: 2},
        ]
    }).then(result => {
        expect(result).toBe(20*2*1.19);
        expect(isFakeFetchCalled).toBe(true);
    });
});

it('Quantity', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon candy', price: 3, quantity: 2},
        ]
    }).then(result => expect(result).toBe(6)));
});

it('No quantity specified', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon candy', price: 3},
        ]
    }).then(result => expect(result).toBe(3)));
});

it('Happy path: example 1', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon food', price: 8, quantity: 1},
            {name: 'Dragon cage', price: 100, quantity: 8}
        ]
    }).then(result => expect(result).toBe(808)));
});

it('Happy path: example 2', () => {
    expect(orderTotal({
        items: [
            {name: 'Dragon collar', price: 20, quantity: 1},
            {name: 'Dragon toy', price: 40, quantity: 1}
        ]
    }).then(result => expect(result).toBe(60)));
});

