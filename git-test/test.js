let embedobj = {
    a: 1,
    b: { c: 1, d: 2 },
    e: { f: { g: 3, k: 9 } },
    h: 4,
    i: { j: 8 }
}

const flattenObj = function (obj) {
    let flattenobj = {}
    let key;
    for (let i in obj) {
        key = i;
        if (typeof obj[i] === "object") {
            const temp = flattenObj(obj[i])
            for (let j in temp) {
                flattenobj[`${i}.${j}`] = temp[j]
            }
        }
        else {
            flattenobj[key] = obj[i]
        }
    }
    return flattenobj
}

console.log(flattenObj(embedobj))

const a1 = new Map([["a", "b"], ["b", "c"], ["c", "d"]])

console.log(a1.get("a"))
let b1 = a1.keys()
for (let x in a1) {
    console.log(a1[x])
}