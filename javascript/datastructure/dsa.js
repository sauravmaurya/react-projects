//fibonacci series

const fibonacci = (n) => {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}

//console.log(fibonacci(5))

//Big(O) = O(n)

//Prime Number

const prime = (n) => {
    let counter = 0;
    for (let i = 2; i < n; i++) {
        if (n % 2 !== 0) {
            counter += 1
        }
    }
    if (counter > 0) {
        return "prime"
    }
    else return "not prime"
}

// console.log(prime(11))
// Big(O) : O(n)


const powerOfTwo = (n) => {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true // it means n==1
}

// console.log(powerOfTwo(1))
// console.log(powerOfTwo(4))
// console.log(powerOfTwo(9))

// Big(O) : O(logn)


const powerOfTwoBitwise = (n) => {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0 // it means n==1
}

// console.log(powerOfTwoBitwise(1))
// console.log(powerOfTwoBitwise(4))
// console.log(powerOfTwoBitwise(9))
// Big(O) : O(1)


const fibonacciRecusrsion = (n) => {
    if (n < 2) {
        return n
    }
    return fibonacciRecusrsion(n - 1) + fibonacciRecusrsion(n - 2)
}
// console.log(fibonacciRecusrsion(1))
// console.log(fibonacciRecusrsion(4))
// console.log(fibonacciRecusrsion(6))
// Big(O) : O(2^n)


const factorialRecursion = (n) => {
    if (n === 0) {
        return 1
    }
    return n * factorialRecursion(n - 1)
}

// console.log(factorialRecursion(0))
// console.log(factorialRecursion(1))
// console.log(factorialRecursion(5))
// Big(O) : O(n)


const linearSearch = (arr, t) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t)
            return i
    }
    return -1
}

// console.log(linearSearch([-5, 2, 10, 4, 6], 10))
// console.log(linearSearch([-5, 2, 10, 4, 6], 6))
// console.log(linearSearch([-5, 2, 10, 4, 6], 20))
// Big(O) : O(n)


const binarySearch = (arr, t) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[middleIndex] === t) {
            return middleIndex
        }
        if (t < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        }
        else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

// console.log(binarySearch([-5, 2, 4, 6, 10], 10))// 4
// console.log(binarySearch([-5, 2, 4, 6, 10], 6))// 3
// console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1
// Big(O) : O(log(n))



const recursiveBinarySearch = (arr, t) => {
    return search(arr, t, 0, arr.length - 1)
}

function search(arr, t, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (arr[middleIndex] === t) {
        return middleIndex
    }

    if (t < arr[middleIndex]) {
        return search(arr, t, leftIndex, middleIndex - 1)
    }
    else {
        return search(arr, t, middleIndex + 1, rightIndex)
    }
}

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))// 4
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))// 3
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1
// Big(O) : O(log(n))

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true;
            }
        }
    } while (swapped)
    return arr
}

// console.log(bubbleSort([18, 2, -1, 42, -66]))
// console.log(bubbleSort([-18, -2, -1, 42, 66]))
//Big(O) : O(n^2)




function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numbertoInsert = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > numbertoInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numbertoInsert
    }
    return arr
}

// console.log(insertionSort([2, 18, -1, 42, -66]))
// console.log(insertionSort([-18, -2, -1, 42, 66]))
// // Big(O) : O(n^2)




function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// console.log(quickSort([2, 18, -1, 42, -66]))
// console.log(quickSort([-18, -2, -1, 42, 66]))
// // worst case : O(n^2)
// // avg case : O(nlogn)




function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArray = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] >= rightArr[0]) {
            sortedArray.push(rightArr[0])
            rightArr.shift()
        }
        else {
            sortedArray.push(leftArr[0])
            leftArr.shift()
        }
    }
    return [...sortedArray, ...leftArr, ...rightArr]
}

// console.log(mergeSort([2, 18, -1, 42, -66]))
// console.log(mergeSort([-18, -2, -1, 42, 66]))
// // Big O : O(nlogn)


const palindrome = (str) => {
    const strArr = str.split("")
    let reverseArr = [];
    for (let i = strArr.length - 1; i >= 0; i--) {
        reverseArr.push(strArr[i])
    }

    if (strArr.toString() === reverseArr.toString()) {
        return true
    }
    else {
        return false
    }
}

// console.log(palindrome("saddas"))
// console.log(palindrome("saurav"))
// Big O = O(n)

const palindromeSingleArray = (str) => {
    let i = 0
    let j = str.length - 1
    while ((j - i) < 1) {
        if (str[i] === str[j]) {
            i += 1
            j -= 1
        }
        else {
            return false
        }
    }
    return true
}

// console.log(palindromeSingleArray("saddas"))
// console.log(palindrome("sadas"))
// console.log(palindrome("saurav"))
// Big O = O(n/2)


const cartesian = (arr1, arr2) => {
    let cartesianArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            cartesianArr.push([arr1[i], arr2[j]])
        }
    }
    return cartesianArr
}

// console.log(cartesian([1, 2], [3, 4]))
// // Big O = O(n2)


// fun()
// function fun() {
//     console.log(saurav)
//     var saurav = "abc"
// }

let a = { x: "1", y: "3" }

let b = a;

b.x = 3

console.log(a, b)

// console.log(a)

