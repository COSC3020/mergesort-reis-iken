function mergesort(array) {
    let length = array.length;
    for (let i = 1; i < length; i *= 2) {
        for (let leftbegin = 0; leftbegin < length; leftbegin += 2 * i) {
            let middle = Math.min(leftbegin + i, length);
            const rightbegin = Math.min(leftbegin + 2 * i, length);
            inplaceMerge(array, leftbegin, middle, rightbegin);
        }
    }
    return array;
}

function sort(array, leftbegin, middle, rightbegin) {
    let left = leftbegin;
    let right = middle;
    while (left < middle && right < rightbegin) {
        if (array[left] <= array[right]) {
            left++;
        } else {
            const temp = array[right];
            for (let i = right; i > left; i--) {
                array[i] = array[i - 1];
            }
            array[left] = temp;
            left++;
            middle++;
            right++;
        }
    }
}
