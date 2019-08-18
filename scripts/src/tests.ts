import { DiceRoller } from "../../types/index"

let diceRoller = new DiceRoller();
const roll = diceRoller.roll("3d6");
console.log(roll);
