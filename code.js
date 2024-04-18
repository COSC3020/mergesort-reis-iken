function mergesort(array) {
    while (array.length() > 1) {
        split(array); }
    return array;
}

function split(array) {
    let left = array.splice(0, array.length()/2);
    return merge(split(left), split(array));
}

function merge(left, right) {
    let array = [];
    while (left.length() > 0 && right.length() > 0) {
        if (left[0] > right[0] {
            array.push(left[0]); }
        else {
            array.push(right[0]); }
    }
    return [...array, ...left, ...right]; }
