let variable = 8;
let sum = (a, b = 6) => (a + b);
let square = (b) => {
    return b * b;
};
module.exports.variable = variable;
module.exports.sum = sum;
module.exports.square = square;