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
