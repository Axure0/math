/**
 * @param {*} a - The First Number
 * @param {*} b - The Second Number
 */
const sum = (a, b) => {
    if(!a || !b || !a && !b){
        throw new Error("Please Specifiy two Numbers to Sum.");
    }
    return a + b
}

/**
 * @param {*} a - The First Number
 * @param {*} b - The Second Number
 */
const subtract = (a, b) => {
    if(!a || !b || !a && !b){
        throw new Error("Please Specifiy two Numbers to Subtract.");
    }
    return a - b
}

/**
 * @param {*} a - The First Number
 * @param {*} b - The Second Number
 */
const multiply = (a, b) => {
    if(!a || !b || !a && !b){
        throw new Error("Please Specifiy two Numbers to Multiply.");
    }
    return a * b
}

/**
 * @param {*} a - The First Number
 * @param {*} b - The Second Number
 */
const divide = (a, b) => {
    if(!a || !b || !a && !b){
        throw new Error("Please Specifiy two Numbers to Divide.");
    }
    return a/b
}

/**
 * @param {*} a - Rounds a Number to the Nearest Integer
 * @param {*} b - Multiplies A by B and Rounds it to The Nearest Integer
 * @param {*} c - Multiplies A by B, Divides the Answer by C and Rounds it to The Nearest Integer
 */
const round = (a, b, c) => {
    if(!a){
        throw new Error("Please Specifiy a Number to Round");
    }
    if(!b || !c){
        return Math.round(a)
    } else if(!c && a && b) {
        return Math.round(a * b)
    } else if(a && b && c){
        return Math.round(a * b) / c
    }
}

const findGCD = (a, b) => {
    if (b != 0) {
      return findGCD(b, a % b);
    } else {
      return a;
    }
  }

/**
 * @param {*} n - The Numerator
 * @param {*} d - The Denominator
 */
 class Fraction {
    constructor(n, d = 1) {
      if (d == 0) {
        throw new Error("The Denominator Cannot be Zero!");
      }
      this.n = n
      this.d = d
    }

    dec() {
      return this.n / this.d;
    }

    val() {
        return `${this.n}/${this.d}`
    }

    simple() {
        if (Number.isInteger(this.n) && Number.isInteger(this.d)) { 

            const gcd = findGCD(this.n, this.d);

            return `${this.n / gcd}/${this.d / gcd}`;
        
        } else {
            return new Fraction(this.n * 10, this.d * 10).simple()
        }
    }

    add(other) {
        if(!other){
            throw new Error("Please Specify a Number to Add to The Fraction.")
        }
        if (other instanceof Fraction) {
          let gcd = findGCD(this.d, other.d);

          return new Fraction(
            this.n * other.d / gcd + other.n * this.d / gcd,
            this.d * other.d / gcd
          ).simple();

        } else {       
            return new Fraction(this.n + other * this.d, this.d).simple();
        }
      }
  }

export { sum, subtract, multiply, divide, round, Fraction }