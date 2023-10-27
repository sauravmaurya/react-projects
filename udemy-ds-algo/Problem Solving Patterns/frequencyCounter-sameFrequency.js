// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false



function sameFrequency(n, m) {
    let nobj = {}
    while (n > 0) {
        let num = n % 10
        nobj[num] = (nobj[num] || 0) + 1
        n = parseInt(n / 10)
    }
    while (m > 0) {
        let num = m % 10
        if (nobj[num]) {
            nobj[num] -= 1
        }
        else {
            return false
        }
        m = parseInt(m / 10)
    }
    return true
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))
