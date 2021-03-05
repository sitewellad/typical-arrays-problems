exports.min = function min(array) {
    return !Array.isArray(array) || !array.length
        ? 0
        : array.sort((a, b) => a - b)[0];
};

exports.max = function max(array) {
    return !Array.isArray(array) || !array.length
        ? 0
        : array.sort((a, b) => a - b)[array.length - 1];
};

exports.avg = function avg(array) {
    let sum = 0;
    if (Array.isArray(array) && array.length > 0) {
        array.forEach((item) => (sum += item));
        return sum / array.length;
    } else return 0;
};
