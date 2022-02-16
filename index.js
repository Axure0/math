/**
 * @param {*} a - The First Number
 * @param {*} b - The Second Number
 */
const sum = (a, b) => {
    if(!a || b || a && b){
        throw new Error("Please Specifiy two Numbers to Sum.");
    }
    return a + b
}

/**
 * @param {*} a - The First Number
 * @param {*} b - The Second Number
 */
const subtract = (a, b) => {
    if(!a || b || a && b){
        throw new Error("Please Specifiy two Numbers to Subtract.");
    }
    return a - b
}

/**
 * @param {*} a - The First Number
 * @param {*} b - The Second Number
 */
const multiply = (a, b) => {
    if(!a || b || a && b){
        throw new Error("Please Specifiy two Numbers to Multiply.");
    }
    return a * b
}

/**
 * @param {*} a - The First Number
 * @param {*} b - The Second Number
 */
const divide = (a, b) => {
    if(!a || b || a && b){
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
    if(!b || c){
        return Math.round(a)
    } else if(!c && a && b) {
        return Math.round(a * b)
    } else if(a && b && c){
        return Math.round(a * b) / c
    }
}

module.exports = { sum, subtract, multiply, divide, round }        }
      }
  }
