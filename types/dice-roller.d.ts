import { DiceRoll } from "./dice-roll";

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
