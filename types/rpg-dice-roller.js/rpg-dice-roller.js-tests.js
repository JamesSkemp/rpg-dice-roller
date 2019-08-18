"use strict";
exports.__esModule = true;
var rpgDiceRoller = require("rpg-dice-roller.js");
var diceRoller = new rpgDiceRoller.DiceRoller();
var roll = diceRoller.roll("3d6");
console.log(roll);
