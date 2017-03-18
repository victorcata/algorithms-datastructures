/**
 * Insertion sorting using a new array
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * @param {object} arr Array to sort
 */
function insertionSort(arr) {
    var output = [];
	output.push(arr[0]);

	for (var i=1; i < arr.length; i++) {
		var el = arr[i], _prev, inserted = false;
		for (var j = 0; j < output.length; j++){
			if (inserted || el < output[j]) {
				_prev = output[j];
				output[j] = el;
				el = _prev;
				inserted = true;
			}
		}
		output.push(el);
	}

	return output;
}

/**
 * Insertion sorting using the same array
 * Time complexity: O(n^2)
 * Space complexity: ?
 * @param {object} arr Array to sort
 * TODO: FINISH
 */
function insertionSortInPlace(arr) {
	debugger;
	for (var i=0; i < arr.length; i++) {
		var el = arr[i], _prev, inserted = false;
		for (var j = i; j < arr.length; j++){
			if (inserted || el < arr[j]) {
				_prev = arr[j];
				arr[j] = el;
				el = _prev;
				inserted = true;
			}
		}
		arr[arr.length - 1] = el;
	}

    return arr;
}