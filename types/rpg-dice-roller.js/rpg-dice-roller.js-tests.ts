import * as rpgDiceRoller from "rpg-dice-roller.js";

let diceRoller = new rpgDiceRoller.DiceRoller();
const roll = diceRoller.roll("3d6");
console.log(roll);
