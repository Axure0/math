"use strict";
/**
 *
 * @param a
 * @param b
 * @returns The sum of the number 'a' and the number 'b'
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.divide = exports.subtract = exports.sum = void 0;
const sum = (a, b) => {
    return a + b;
};
exports.sum = sum;
/**
 *
 * @param a
 * @param b
 * @returns A part of the number 'a'
 */
const subtract = (a, b) => {
    return a - b;
};
exports.subtract = subtract;
/**
 *
 * @param a
 * @param b
 * @returns The number 'a' divided by the number 'b'
 */
const divide = (a, b) => {
    return a / b;
};
exports.divide = divide;
/**
 *
 * @param a
 * @param b
 * @returns The product of number 'a' and number 'b'
 */
const multiply = (a, b) => {
    return a * b;
};
exports.multiply = multiply;
