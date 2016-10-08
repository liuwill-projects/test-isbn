'use strict';

var answer = require('../src/hiker.js');

describe("answer", function() {
    it("to life the universe and everything", function() {
        console.log("to life the universe and everything");
        expect(answer()).toEqual(54);
    });
});
