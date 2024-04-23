function mergesort(array) {
    let length = array.length;
    for (let i = 1; i < length; i *= 2) {
        for (let leftbegin = 0; leftbegin < length; leftbegin += 2 * i) {
            let middle = Math.min(leftbegin + i, length);
            const rightbegin = Math.min(leftbegin + 2 * i, length);
            sort(array, leftbegin, middle, rightbegin);
        }
    }
    return array;
}

function sort(array, leftbegin, middle, rightbegin) {
    let left = leftbegin;
    let right = middle;
    let index = leftbegin;
    while (left < middle && right < rightbegin) {
        if (array[left] <= array[right]) {
            array[index++] = array[left++];
        } else {
            array[index++] = array[right++];
        }
    }
    while (left < middle) {
        array[index++] = array[left++];
    }
    while (right < rightbegin) {
        array[index++] = array[right++];
    }
}
