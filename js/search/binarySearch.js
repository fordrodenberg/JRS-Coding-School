function makeArray() {
    let arr = [];

    for (let i = 1; i <= 100; i++) {
        arr.push(i);
    }

    return arr;
}

/**
 * Returns the index of a value found in an array
 * @param {number} value - the value to find
 * @param {number[]} arr - the array to search in
 * @returns index of the found value (-1 if not found)
 */
function binarySearch(value, arr) {
    // look at the middle of the array
    // compare the value to that value
    // if its less than the index
    // look on the left half of that array
    // else
    // look on the right half

    let min = 0; // low
    let max = arr.length - 1; // high
    let mid = Math.floor(max / 2); // the index to look at

    while (true) {
        if (value == arr[mid]) {
            // the value is found
            return mid;
        }
        // value not found
        // if the low == high
        if (min >= max) {
            return -1;
        }

        if (value > arr[mid]) {
            // look on the right
            min = mid + 1;
        } else {
            // look on the left
            max = mid - 1;
        }
        mid = Math.floor((max + min) / 2)
    }

}

let arr = makeArray();
console.log(binarySearch(4, arr))
console.log(binarySearch(9, arr))
console.log(binarySearch(1, arr))
console.log(binarySearch(14.5, arr))
