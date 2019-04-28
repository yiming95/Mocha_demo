const assert = require('chai').assert;
const app = require('../app');
//const sayHello = require('../app').sayHello;
//const addNumber = require('../app').addNumber;

describe('App', function(){
    it('sayHello should return hello', function(){
        let result = app.sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function(){
        let result = app.sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumber should return type string', function(){
        let result = app.addNumber(1,2);
        assert.isAbove(result, 2);
    });

});