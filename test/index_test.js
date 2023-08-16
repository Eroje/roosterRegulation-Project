const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {

      // Setup phase
      const expected = 'cock-a-doodle-doo!';

      // Excercise phase
      const actual = Rooster.announceDawn();

      // Verify phase
      assert.equal(actual, expected);

      // Teardown phase(not required)
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {

        // Setup
        const inputNumber = 12; 
        const expected = '12';

        // Excercise
        const actual = Rooster.timeAtDawn(inputNumber);

        // Verify
        assert.equal(actual, expected);
    });
    it('throws an error if passed a number less than 0', () => {

      // Setup 
      const inputNumber = -1; 
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected); // Excercise

    });

     it('throws an error if passed a number more than 23', () => {

      // Setup 
      const inputNumber = 24; 
      const expected = RangeError;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber);
      }, expected); // Excercise

    });
  });
});