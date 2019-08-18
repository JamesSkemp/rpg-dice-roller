import { DiceRoller, DiceRoll } from "../../types/index"

let diceRoller = new DiceRoller();
const roll = diceRoller.roll("3d6");
console.log(roll);

let diceRoll = new DiceRoll("3d6");
console.log(diceRoll.roll());
