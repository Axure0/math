"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fraction = void 0;
const index_1 = require("../errors/index");
class Fraction {
    /**
     * @param n - The numerator or number (i.e. 1 or 0.96)
     * @param d - The denominator
     */
    constructor(n, d) {
        if (d) {
            this.num = n;
            this.den = d;
        }
        else {
            this.num = n;
            this.den = 1;
        }
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
     * @returns A fraction and simplifies it
     */
    simplifiy() {
        if (this.den !== 1) {
            const gcd = this.findGcd(this.num, this.den);
            return new Fraction(this.num / gcd.this.den / gcd);
        }
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
            return new Fraction(this.num / gcd, this.den / gcd);
        }
        else {
            const gcd = this.findGcd(this.num, this.den);
            return new Fraction(this.num / gcd, this.den / gcd);
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
            return new Fraction(this.num, this.den);
        }
        else {
            return new Fraction(this.num, this.den);
        }
    }
    /**
     * @param b
     * @returns The sum of the two fractions
     */
    add(b) {
        if (b instanceof Fraction) {
            const gcd = this.findGcd(this.den, b.den);
            return new Fraction((this.num * b.den) / gcd + (b.num * this.den) / gcd, (this.den * b.den) / gcd).simplifiy();
        }
        else if (b instanceof Number) {
        }
        else {
            throw (0, index_1.paramError)('b', b);
        }
    }
    /**
     *
     * @param b
     * @returns The result of two fractions multiplied together
     */
    mult(b) {
        if (b instanceof Fraction) {
            return new Fraction(this.num * b.num, this.den * b.den).simplifiy();
        }
        else if (typeof b == "number") {
            return this.mult(new Fraction(b));
        }
        else {
            throw (0, index_1.paramError)('b', b);
        }
    }
    /**
     * @returns The reciprocal of the fraction
     */
    reci() {
        return new Fraction(this.den, this.num);
    }
    /**
     * @param b
     * @returns A part of the fraction
     */
    sub(b) {
        if (b instanceof Fraction) {
            return this.add(b.mult(-1));
        }
        else if (b instanceof Number) {
            return this.add(-b);
        }
        else {
            throw (0, index_1.paramError)('b', b);
        }
    }
    /**
     * @param b
     * @returns A fraction divided by a fraction/number
     */
    div(b) {
        if (b instanceof Fraction) {
            return this.mult(b.reci());
        }
        else if (typeof b == "number") {
            return this.mult(new Fraction(1, b));
        }
        else {
            throw (0, index_1.paramError)('b', b);
        }
    }
    /**
     * @param exp - Exponent
     * @returns The fraction raised to an exponent
     */
    pow(exp) {
        if (exp < 0) {
            return this.reci().pow(-exp);
        }
        else if (exp == 1) {
            return this;
        }
        else {
            return new Fraction(this.num ** exp, this.den ** exp);
        }
    }
}
exports.Fraction = Fraction;
