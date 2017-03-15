/**
 * Function that takes two arguments and recursively returns exponent value of the base
 * @param {number} base 
 * @param {number} expo 
 */
function recursiveExponent(base, expo) {
    if (expo === 1) {
        return base;
    }
    return base * recursiveExponent(base, expo - 1);
}

/**
 * Function that takes two arguments and multiplies each arr value into by num and returns an array of the values.
 * @param {object} arr Array with the values to multiply
 * @param {number} num Multiplier
 */
function recursiveMultiplier(arr, num) {
    var cont = 0;
    function multiplyItem(arr, num) {
        if (cont < arr.length) {
            arr[cont++] *= num;
            multiplyItem(arr, num);
        }
    }
    multiplyItem(arr, num);
    return arr;
}

/**
 * Function that takes two arguments and multiplies each arr value into by num and returns an array of the values.
 * NO CLOSURES
 * @param {object} arr Array with the values to multiply
 * @param {number} num Multiplier
 */
function recursiveMultiplier(arr, num) {
    if (arr.length === 0) {
        return arr;
    }

    var last = arr.pop();
    recursiveMultiplier(arr, num);
    arr.push(last * num);
    return arr;
}

/**
 * Function that takes an array and uses recursion to return its contents in reverse
 * @param {object} array List of items to apply the reverse operation
 */
function recursiveReverse(array) {
    var reverse = [];
    function addItems(nArr) {
        if (nArr.length) {
            reverse.push(nArr.pop());
            addItems(nArr);
        } 
        return;
    }

    addItems(array);
    return reverse;
}