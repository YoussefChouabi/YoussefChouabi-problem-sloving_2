/**
 *
 *
 * @param {Function} f
 * @param {Function} g
 */
const composer = (f, g) => (x) => f(g(x));

/**
 *
 *
 * @param {Function} x
 */
const double = (x) => x * 2;

/**
 *
 *
 * @param {Function} x
 */
const incrementer = (x) => x + 1;

const doublePuisIncrementer = composer(incrementer, double);
const incrementerPuisDouble = composer(double, incrementer);
console.log(doublePuisIncrementer(3));  
console.log(incrementerPuisDouble(3));