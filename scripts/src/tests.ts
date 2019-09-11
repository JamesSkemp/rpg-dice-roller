// WIP. There are two code blocks here, which can be (un)commented as needed to test two different ways of referencing the TS Defs file.
/*
/// <reference path="../../types/index.d.ts" />
let diceRoller: rpgDiceRoller.DiceRoller = new rpgDiceRoller.DiceRoller();
const roll = diceRoller.roll("3d6");
console.log(roll);

let diceRoll: rpgDiceRoller.DiceRoll = new rpgDiceRoller.DiceRoll("3d6");
console.log(diceRoll.roll());
*/
import { DiceRoller, DiceRoll } from "../../types/index"
let diceRoller: rpgDiceRoller.DiceRoller = new DiceRoller();
const roll = diceRoller.roll("3d6");
console.log(roll);

let diceRoll: rpgDiceRoller.DiceRoll = new DiceRoll("3d6");
console.log(diceRoll.roll());
