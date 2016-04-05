/**
 * Created by yeliex on 16/4/5.
 */
var unique = require("../index");
var assert = require("assert");
const input = [1, 2, 3, 3, 2, 4, 5, 6],
    output = input.unique(),
    right = [1, 2, 3, 4, 5, 6];
console.log("Input: ", input);
console.log("Output: ", output);
console.log("Result: ", assert.deepEqual(output, right, "Error,Should output [ " + right.join(", ") + " ]") || "Success");