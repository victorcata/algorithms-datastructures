/**
 * Selection sorting returning another array
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * @param {object} arr List of items to order
 */
function selectionSort(arr){
    var output = [], smallest;
    do {
        smallest = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < smallest && output.indexOf(arr[i]) === -1) {
                smallest = arr[i];
            }
        }
        
        output.push(smallest);
    } while (output.length < arr.length);

    return output;
}

/**
 * Selection sorting returnin the same array
 * Time complexity: O(n^2)
 * Space complexity: 
 * @param {object} arr Items to sort
 */
function selectionSortInPlace(arr){
    var bigger, biggerIndex = 0, lastIndex = arr.length - 1;
    do {
        bigger = arr[0];
        biggerIndex = 0;
        for (var i = 1; i <= lastIndex; i++) {
            if (arr[i] > bigger) {
                bigger = arr[i];
                biggerIndex = i;
            }
        }

        arr[biggerIndex] = arr[lastIndex];
        arr[lastIndex] = bigger;
        lastIndex--;
    } while (lastIndex > 0);
    return arr;
}