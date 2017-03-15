function join(array, joinStr) {
    function recursive(index, results) {
        results += array[index];

        if (index === array.length - 1){
            return results;
        } else {
            return recursive(index + 1, results + joinStr);
        }
    }
}