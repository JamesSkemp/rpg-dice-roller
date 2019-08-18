"use strict";
exports.__esModule = true;
var index_1 = require("../../types/index");
var diceRoller = new index_1.DiceRoller();
var roll = diceRoller.roll("3d6");
console.log(roll);
