/** Declaration file generated by dts-gen */
export as namespace rpgDiceRoller;

/**
 * A DiceRoll object, which takes a notation
 * and parses it in to rolls
 *
 * @type {DiceRoll}
 */
export class DiceRoll {
	/**
	 * 
	 * @param notation
	 */
	constructor(notation: string);
	/**
	 * Exports the DiceRoll object to the specified format. Returns mixed.
	 * @param format Export format from exportFormats.
	 */
	export(format: number): string | object;

	/**
	 * Rolls the dice for the existing notation and returns the rolls. Returns Array.
	 */
	roll(): number[];

	/**
	 * Returns the JSON serializable object when the DiceRoll is passed to JSON.stringify.
	 */
	toJSON(): object;

	/**
	 * Returns the output property when the object is parsed as a string (ie. diceroll + ''). Returns String.
	 */
	toString(): string;
	
	/**
	 * The dice notation passed.
	 */
	notation: string;
	/**
	 * The roll notation in the format of: 2d20+1d6: [20,2]+[2] = 24.
	 */
	output: string;
	/**
	 * Roll log for the notation.
	 */
	rolls: number[];
	/**
	 * The number of successes for the roll, if using pool dice.
	 */
	successes: number;
	/**
	 * The roll total generated from roll().
	 */
	total: number;

	/**
	 * Imports the given data and creates a new dice roll.
	 * @param data 
	 */
	static import(data: any): DiceRoll;

	/**
	 * Parses the given notation and returns a list of parsed data. Returns Array
	 * @param notation 
	 */
	static parseNotation(notation: string): any[];
}

/**
 * A DiceRoller handles dice rolling functionality,
 * keeps track of rolls and can output logs etc.
 *
 * @type {DiceRoller}
 */
export class DiceRoller {
	/**
	 * 
	 * @param data 
	 */
	constructor(data?: any);

	/**
	 * Clears the roll history log.
	 */
	clearLog(): void;
	/**
	 * Exports the DiceRoller object to the specified format. Returns mixed
	 * @param format Export format from exportFormats.
	 */
	export(format: number): string | object;
	/**
	 * Imports the given data and appends it to the current roll log, returning the updated log. Returns Array<DiceRoll>
	 * @param data 
	 */
	import(data: any): DiceRoll[];
	/**
	 * Rolls the given dice notation and returns the rolls. Returns DiceRoll
	 * @param notation 
	 */
	roll(notation: string): DiceRoll;
	/**
	 * Rolls the given list of dice notations and returns them. Returns Array<DiceRoll>
	 * @param notations 
	 */
	rollMany(notations: string[]): DiceRoll[];
	/**
	 * Returns the JSON serializable object when the DiceRoller is passed to JSON.stringify. Returns Object
	 */
	toJSON(): object;
	/**
	 * Returns the output property when the object is parsed as a string (ie. diceroller + '').
	 */
	toString(): string;

	/**
	 * A list of the current roll logs.
	 */
	log: DiceRoll[];
	/**
	 * String representation of the object, in the format of: 2d20+1d6: [20,2]+[2] = 24; 1d8: [6] = 6.
	 */
	output: string;
	/**
	 * The total number of successes for all the rolls in the log, if using pool dice.
	 */
	successes: number;
	/**
	 * The sum of all the rolls in the log.
	 */
	total: number;

	/**
	 * List of available export / import formats.
	 */
	static exportFormats: any;
	/**
	 * Imports the given data and creates a new dice roll. Note: This is called on the DiceRoller class, not an instantiated object.
	 * @param data 
	 */
	static import(data: any): DiceRoller;
}

export const exportFormats: {
	BASE_64: number;
	JSON: number;
	OBJECT: number;
};

export namespace DiceRoll {
	namespace notationPatterns {
		function get(name: any, flags: any, ...args: any[]): any;

	}
}

export namespace diceUtils {
	function compareNumbers(a: any, b: any, operator: any): any;

	function equateNumbers(a: any, b: any, ...args: any[]): any;

	function generateNumber(min: any, max: any): any;

	function isBase64(val: any): any;

	function isJson(val: any): any;

	function isNumeric(val: any): any;

	function sumArray(numbers: any): any;

	function toFixed(num: any, decPlaces: any): any;

	function trimOperator(formula: any): any;

}
