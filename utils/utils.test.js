const expect = require('expect');

const utils = require('./utils');

// Setting up describe() so we can organize our test code easier
describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
            // if (res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}.`);
            // }
        });
    });


    // testing utils.asyncAdd()
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    // testing utils.asyncSquare()
    it('should async square a number', (done) => {
        utils.asyncSquare(4, (res) => {
            expect(res).toBe(16).toBeA('number');
            done();
        });
    });

    // testing utils.square()
    it('should square a number', () => {
        var res = utils.square(4);

        expect(res).toBe(16).toBeA('number');
        // if (res !== 16) {
        //     throw new Error(`Expected 16, but got ${res}.`);
        // }
    });
});


// Bogus test case for practice
// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({name: 'Logan'}).toEqual({name: 'Logan'});
//     // expect({name: 'Logan'}).toNotEqual({name: 'logan'});
//     // expect([2,3,4]).toInclude(2);
//     // expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'Logan',
//         age: 35,
//         location: 'Fort Worth'
//     }).toInclude({ // can also use .toExclude() here as well
//         age: 35
//     });
// });

it('should set first and last name properties', () => {
    var user = {
        age: 35,
        location: "Fort Worth"
    };
    utils.setName(user, "Logan Wood");
    expect(user).toInclude({
        firstName: "Logan",
        lastName: "Wood"
    }).toBeA('object');
});

// CHALLENGE
//  1. create an asynchronous version of the square method
//  2. wait a second to have the function carryout its action
//  3. create a test that tests that the number is indeed a square
//  4. verify that it is a number and be sure to use done()
