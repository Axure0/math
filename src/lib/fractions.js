"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fraction = void 0;
class Fraction {
    /**
     * @param Number - The number used to create the fraction (i.e. 1 or 0.96)
     */
    constructor(Number) {
        this.num = Number;
        this.den = 1;
    }
    /**
     * @param a - The Numerator
     * @param b - The Denominator
     * @returns The greatest common devisor
     */
    findGcd(a, b) {
        return b ? this.findGcd(b, a % b) : a;
    }
    /**
     * @returns Converts a number to a fraction and simplifies it
     */
    simplifiy() {
        let a = `${this.num}`;
        let d = `${this.den}`;
        let gcd;
        if (a.indexOf(".") !== -1) {
            for (let i = 0; i < this.num; i++) {
                if (a.indexOf(".") === -1) {
                    break;
                }
                else {
                    this.num = this.num * 10;
                    this.den = this.den * 10;
                    a = `${this.num}`;
                    d = `${this.den}`;
                    gcd = this.findGcd(this.num, this.den);
                }
            }
            return `${this.num / gcd}/${this.den / gcd}`;
        }
        else {
            const gcd = this.findGcd(this.num, this.den);
            return `${this.num / gcd}/${this.den / gcd}`;
        }
    }
    /**
     * @returns A fraction from a number.
     */
    frac() {
        let a = `${this.num}`;
        let d = `${this.den}`;
        if (a.indexOf(".") !== -1) {
            for (let i = 0; i < this.num; i++) {
                if (a.indexOf(".") === -1) {
                    break;
                }
                else {
                    this.num = this.num * 10;
                    this.den = this.den * 10;
                    a = `${this.num}`;
                    d = `${this.den}`;
                }
            }
            return `${a}/${d}`;
        }
        else {
            return `${this.num}/${this.den}`;
        }
    }
}
exports.Fraction = Fraction;
