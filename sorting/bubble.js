/**
 * Bubble sorting
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * @param {object} arr List of items to order
 */
function bubbleSort(arr) {
    var hasChanged;
    do {                      
        hasChanged = false;      
        for (var i = 1; i< arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                var temp = arr[i];
                arr[i]  = arr[i - 1];
                arr[i - 1] = temp;
                hasChanged = true;
            }
        }
    } while (hasChanged);
    return arr;
}