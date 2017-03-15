function recursiveLoop(start, end) {
    function recursive(i) {
        console.log(i);
        if (i < end) {
            recursive(i + 1);
        }
    }

    recursive(start);
}