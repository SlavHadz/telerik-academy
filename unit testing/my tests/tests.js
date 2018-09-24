const {assert, expect} = require('chai');
const sinon = require('sinon');


describe('My test', () => {
    it('assert test', () => {
        assert(5 === 5, 'five should equal 5');
    });

    it('expect test', () => {
        expect({a: 5}).to.have.property('a');
    });

    it('deep equlity test', () => {
        var x = {a: 5};
        expect({a: 5}).to.eql(x);
    });

    it('.not test', () => {
        
        expect([1,3,5]).to.not.include(4);
    });

    it('.nested test', () => {      
        expect({a: {b: 3, c: 5, d: [1,5,2]}}).to.have.nested.property('a.d[2]');
    });

    it('.own test', () => {
        Object.prototype.b = 4;      
        expect({a: 2}).to.have.own.property('a').but.not.own.property('b');
        delete Object.prototype.b; 
    });

    it('.ordered test', () => {
        expect([3, 6, 5, 6]).to.have.ordered.members([3,6,5,6]);
    });

    it('.any and .all test', () => {
        expect({a: 5, b: 3, c: 6}).to.have.any.keys('b', 'g', 's');
        expect({a: 5, b: 3, c: 6}).to.have.all.keys('b', 'c', 'a');
    });

    it('.a test', () => {
        expect(5).to.be.a('number');
    });

    it('include test', () => {
        expect('I am a robot').to.include('robot');
        expect([2, 6, 6, 4, 3]).to.include(3);
    });

    it('true/false test', () => {
        expect(2 === 2, 'why is this not working').to.be.true;
        expect(2 === 'two').to.be.false;
    });

    it('.empty test', () => {
        expect([]).to.be.empty;
    });

    it('instanceOf, keys and length test', () => {
        expect([2, 5]).to.be.an.instanceOf(Array);
        expect([3, 6, 7, 2, 5]).to.have.lengthOf(5);
        expect({a: 4, b: 4, c: 3}).to.have.keys('a', 'b', 'c');
    });

    it('throw test', () => {

        function func() {
            throw new Error('bad function');
        }
        expect(func).to.throw(Error, 'bad function');
       });
}); 

function once(fn) {
    var returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

describe('Sinon tests', () => {
    it('Fakes test', () => {
        let callback = sinon.fake();
        let proxy = once(callback);

        proxy();

        assert(callback.called);
    });

    it('Fakes test callback called once', () => {
        let callback = sinon.fake();
        let proxy = once(callback);

        proxy();
        proxy();
        assert(callback.calledOnce);
    });

    describe('Stub tests', () => {
        
        it('Stub function test', () => {
            let obj = {
                stubbed: function() {
                    console.log('i am stubbed');
                }
            };

            let stub = sinon.stub(obj, 'stubbed');
            expect(stub).to.be.a('function');
            obj.stubbed.restore();
        }); 

        it("test should stub method differently based on arguments", function () {
        var callback = sinon.stub();
        callback.withArgs(42).returns(1);
        callback.withArgs(1).throws("name");

        
        expect(callback(42)).to.equal(1);
        expect(() => {callback(1)}).to.throw();
        });

        it("sinon nth calls method", function () {
            var callback = sinon.stub();
            callback.withArgs(42)
                .onFirstCall().returns(5)
                .onSecondCall().returns(6);
            callback.withArgs(1).throws("name");
    
            expect(callback(42)).to.equal(5);
            expect(callback(42)).to.equal(6);
            callback.resetBehavior();
            expect(callback(42)).to.be.a('undefined');
            });
        
    });
});