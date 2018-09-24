const { expect } = require('chai');

describe('First test group', () => {

    before(() => {
        console.log("---Before all---");
    })

    beforeEach(() => {
        console.log("---Before each---");
    });

    after(() => {
        console.log("---After all---");
    })

    it('Should return 4', () => {
        let x = 2,
            y = 2,
            expected = x + y;

        expect(expected).to.equal(4);
    });

    it('Should return 4', () => {
        let x = 2,
            y = 2,
            expected = x + y;

        expect(expected).to.equal(4);
    });
});