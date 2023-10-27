// accepts sorted array
function countUnique(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.lrngth; j++) {
        if (arr[i] !== arr[j]) {
            i += 1
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUnique([1, 1, 1, 1, 1]))
console.log(countUnique([]))


