function mergesort(array) {
    let length = array.length;
    let temp = new Array(length);

    for (let i = 1; i < length; i *= 2) {
        for (let leftbegin = 0; leftbegin < length; leftbegin += 2 * i) {
            let middle = Math.min(leftbegin + i, length);
            const rightbegin = Math.min(leftbegin + 2 * i, length);
            merge(array, temp, leftbegin, middle, rightbegin);
        }
    }
    return array;
}

function merge(array, temp, leftbegin, middle, rightbegin) {
    let left = leftbegin;
    let right = middle;
    let index = leftbegin;

    while (left < middle && right < rightbegin) {
        if (array[left] <= array[right]) {
            temp[index++] = array[left++];
        } else {
            temp[index++] = array[right++];
        }
    }

    while (left < middle) {
        temp[index++] = array[left++];
    }

    while (right < rightbegin) {
        temp[index++] = array[right++];
    }

    for (let i = leftbegin; i < rightbegin; i++) {
        array[i] = temp[i];
    }
}
