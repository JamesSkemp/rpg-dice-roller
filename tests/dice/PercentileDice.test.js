import PercentileDice from '../../src/dice/PercentileDice.js';
import StandardDice from '../../src/dice/StandardDice.js';
import RollResult from '../../src/results/RollResult.js';
import RollResults from '../../src/results/RollResults.js';
import Modifier from '../../src/modifiers/Modifier.js';

describe('PercentileDice', () => {
  describe('Initialisation', () => {
    test('model structure', () => {
      const die = new PercentileDice('4d%', 4);

      // assert that the die is a PercentileDie and that it extends StandardDice
      expect(die).toBeInstanceOf(PercentileDice);
      expect(die).toBeInstanceOf(StandardDice);
      expect(die).toEqual(expect.objectContaining({
        notation: '4d%',
        sides: '%',
        qty: 4,
        modifiers: null,
        max: 100,
        min: 1,
        name: 'PercentileDice',
        roll: expect.any(Function),
        rollOnce: expect.any(Function),
        toJSON: expect.any(Function),
        toString: expect.any(Function),
      }));
    });

    test('constructor requires notation', () => {
      expect(() => {
        new PercentileDice();
      }).toThrow('Notation is required');

      expect(() => {
        new PercentileDice(false);
      }).toThrow('Notation is required');

      expect(() => {
        new PercentileDice(null);
      }).toThrow('Notation is required');

      expect(() => {
        new PercentileDice(undefined);
      }).toThrow('Notation is required');
    });
  });

  describe('Quantity', () => {
    test('qty must be numeric', () => {
      const die = new PercentileDice('4d%', 8);
      expect(die.qty).toBe(8);

      expect(() => {
        const die = new PercentileDice('4d%', 'foo');
      }).toThrow('qty must be a positive integer');

      expect(() => {
        const die = new PercentileDice('4d%', false);
      }).toThrow('qty must be a positive integer');

      expect(() => {
        const die = new PercentileDice('4d%', true);
      }).toThrow('qty must be a positive integer');

      expect(() => {
        const die = new PercentileDice('4d%', []);
      }).toThrow('qty must be a positive integer');

      expect(() => {
        const die = new PercentileDice('4d%', {qty: 4});
      }).toThrow('qty must be a positive integer');
    });

    test('qty must be positive non-zero', () => {
      let die = new PercentileDice('4d%', 1);
      expect(die.qty).toBe(1);

      die = new PercentileDice('4d%', 324);
      expect(die.qty).toBe(324);

      expect(() => {
        const die = new PercentileDice('4d%', 0);
      }).toThrow('qty must be a positive integer');

      expect(() => {
        const die = new PercentileDice('4d%', -42);
      }).toThrow('qty must be a positive integer');

      expect(() => {
        const die = new PercentileDice('4d%', -1);
      }).toThrow('qty must be a positive integer');
    });
  });

  describe('Modifiers', () => {
    test('can set modifiers with Map', () => {
      const modifiers = new Map(Object.entries({foo: new Modifier('m')}));
      const die = new PercentileDice('4d%', 1, modifiers);

      expect(die.modifiers).toBeInstanceOf(Map);
      expect(die.modifiers).toEqual(modifiers);
    });

    test('can set modifiers with Object', () => {
      const modifier = new Modifier('m');
      const die = new PercentileDice('4d%', 1, {foo: modifier});

      expect(die.modifiers).toBeInstanceOf(Map);
      expect(die.modifiers.get('foo')).toEqual(modifier);
    });

    test('can set modifiers with Array', () => {
      const modifiers = [new Modifier('m')];
      const die = new PercentileDice('4d%', 1, modifiers);

      expect(die.modifiers).toBeInstanceOf(Map);
      expect(die.modifiers.get('Modifier')).toEqual(modifiers[0]);
    });

    test('throws error if modifiers type is invalid', () => {
      expect(() => {
        new PercentileDice('4d%', 1, 'foo');
      }).toThrow('modifiers should be a Map or an Object');

      expect(() => {
        new PercentileDice('4d%', 1, 351);
      }).toThrow('modifiers should be a Map or an Object');

      expect(() => {
        const modifiers = new Map(Object.entries({foo: 'bar'}));
        new PercentileDice('4d%', 1, modifiers);
      }).toThrow('modifiers is invalid. List must only contain Modifier instances');

      expect(() => {
        const modifiers = {foo: 'bar'};
        new PercentileDice('4d%', 1, modifiers);
      }).toThrow('modifiers is invalid. List must only contain Modifier instances');

      expect(() => {
        const modifiers = ['bar'];
        new PercentileDice('4d%', 1, modifiers);
      }).toThrow('modifiers is invalid. List must only contain Modifier instances');
    });

    test('modifiers list always returns in correct order', () => {
      // create modifiers and define their order
      const mod1 = new Modifier('m1');
      mod1.order = 4;
      const mod2 = new Modifier('m2');
      mod2.order = 3;
      const mod3 = new Modifier('m3');
      mod3.order = 1;
      const mod4 = new Modifier('m4');
      mod4.order = 2;

      // create the dice instance
      const die = new PercentileDice('4d%', 1, {mod1, mod2, mod3, mod4,});

      // get the modifier keys
      const modKeys = [...die.modifiers.keys()];
      // check that the order matches the defined modifier orders
      expect(modKeys[0]).toEqual('mod3');
      expect(modKeys[1]).toEqual('mod4');
      expect(modKeys[2]).toEqual('mod2');
      expect(modKeys[3]).toEqual('mod1');
    });

    test('cannot change modifiers', () => {
      const modifiers = new Map(Object.entries({foo: new Modifier('m')}));
      const die = new PercentileDice('4d%', 1);

      expect(() => {
        die.modifiers = modifiers;
      }).toThrowError(TypeError);
    });
  });

  describe('Output', () => {
    test('JSON output is correct', () => {
      const die = new PercentileDice('4d%', 4);

      // json encode, to get the encoded string, then decode so we can compare the object
      // this allows us to check that the output is correct, but ignoring the order of the
      // returned properties
      expect(JSON.parse(JSON.stringify(die))).toEqual({
        max: 100,
        min: 1,
        modifiers: null,
        name: 'PercentileDice',
        notation: '4d%',
        qty: 4,
        sides: '%',
        type: 'die',
      });
    });

    test('String output is correct', () => {
      const die = new PercentileDice('4d%', 4);

      expect(die.toString()).toEqual('4d%');
    });
  });

  describe('Rolling', () => {
    test('rollOnce returns a RollResult object', () => {
      expect((new PercentileDice('1d%', 1)).rollOnce()).toBeInstanceOf(RollResult);
    });

    test('rollOnce rolls between min and max (Inclusive)', () => {
      const die = new PercentileDice('1d%', 1);
      const iterations = 1000;

      // run the test multiple times to try and ensure consistency
      for (let i = 0; i < iterations; ++i) {
        const result = die.rollOnce();

        expect(result.value).toBeGreaterThanOrEqual(1);
        expect(result.value).toBeLessThanOrEqual(100);
      }
    });

    test('roll return a RollResults object', () => {
      expect((new PercentileDice('1d%', 1)).roll()).toBeInstanceOf(RollResults);
    });

    test('rollOnce gets called when rolling', () => {
      // create a spy to listen for the Model.rollOnce method to have been triggered
      const spy = jest.spyOn(PercentileDice.prototype, 'rollOnce');
      const die = new PercentileDice('4d%', 4);

      // roll the dice
      die.roll();

      expect(spy).toHaveBeenCalledTimes(4);

      // remove the spy
      spy.mockRestore();
    });

    test('roll returns correct number of rolls', () => {
      const die = new PercentileDice('4d%', 4);

      expect(die.roll()).toHaveLength(4);
    });
  });

  describe('Readonly properties', () => {
    test('cannot change max value', () => {
      const die = new PercentileDice('4d%', 4);

      expect(() => {
        die.max = 450;
      }).toThrowError(TypeError);
    });

    test('cannot change min value', () => {
      const die = new PercentileDice('4d%', 4);

      expect(() => {
        die.min = 450;
      }).toThrowError(TypeError);
    });

    test('cannot change name value', () => {
      const die = new PercentileDice('4d%', 4);

      expect(() => {
        die.name = 'Foo';
      }).toThrowError(TypeError);
    });

    test('cannot change notation value', () => {
      const die = new PercentileDice('4d%', 4);

      expect(() => {
        die.notation = '6d4';
      }).toThrowError(TypeError);
    });

    test('cannot change qty value', () => {
      const die = new PercentileDice('4d%', 4);

      expect(() => {
        die.qty = 6;
      }).toThrowError(TypeError);
    });

    test('cannot change sides value', () => {
      const die = new PercentileDice('4d%', 4);

      expect(() => {
        die.sides = 2;
      }).toThrowError(TypeError);
    });
  });
});
