const assert = require('assert');
const WaterJugs = require("../index");


describe('WaterJugs', () => {
    describe('Ability to sort an array of numbers in descending order', () => {
        it('sorts an inputted array of numbers in descending order', () => {
            const unsortedArray = [1, 5, 2, 6];
            const sortedArray = WaterJugs.sortJugsByDescendingOrder(unsortedArray);
            assert.equal(sortedArray.length, unsortedArray.length, 'The sorted and unsorted arrays have the same length');
            assert.deepStrictEqual(sortedArray, [6, 5, 2, 1], 'Sorted array should be in descending order.');
        })
    })
})